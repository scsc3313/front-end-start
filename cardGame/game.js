   
        var ctx;
        var canvas;
        // 카드앞뒤 그리기 위한 컬러
        var flipColor ="rgb( 128, 128, 255)";
        var clearColor = "rgb( 255, 255, 255)";
        
        // Card객체저장을 위한 배열및 위치참조 배열선언
        var deck=[];
        var deckPosition=[];
        var gap=30; // card간격
        
        // 카드 시작위치 및 가로,세로 크기 변수
        var startX =30;
        var startY =50;
        var cardWidth =100;
        var cardHeight =100;
        
        // 짝이 맞은 수를 체크하기 위한 count변수
        var count =0;
        // 클릭한 카드를 저장한는 배열
        var openCardkList=[];
                
        var cardImgList=[];
        cardImgList.push(["image/image1.png","image/image1.png"]);
        cardImgList.push(["image/image2.png","image/image2.png"]);
        cardImgList.push(["image/image3.png","image/image3.png"]);
        cardImgList.push(["image/image4.png","image/image4.png"]);
        cardImgList.push(["image/image5.png","image/image5.png"]);
        
        
        
        /* cardItem선언 */
        function Card( sx, sy, img, index ){
            this.sx     =sx;
            this.sy     =sy;
            this.index  =index;
            this.img    =img;
        };
        

        /* 뒤집어진 카드 그리기 */
        function drawFlipCard( card ){
            ctx.fillStyle = flipColor;
            ctx.fillRect( card.sx, card.sy, cardWidth, cardHeight );
        };
        
        /* 제거된 카드 그리기 */
        function drawClearCard( card ){
            ctx.fillStyle = clearColor;
            ctx.fillRect( card.sx, card.sy, cardWidth, cardHeight );
            card.sx = -1;
            card.sy = -1;
        };
        
        /* 오픈된 카드 그리기 */
        function drawOpenCard( card ){
            ctx.drawImage( card.img, card.sx, card.sy, cardWidth, cardHeight );
        }
        
        
        function createCardItem( src, px, py , cardIndex ){
            var pic = new Image();
            pic.src = src;
            var card = new Card( px, py, pic, cardIndex );
            drawFlipCard( card );
            return card;
        };
        
        
        /* 카드 아이템 생성 및 정보 초기화  */
        function makeCardDeck(){
            var i
            var posx, posy;
            for( i=0; i<cardImgList.length; i++ ){
                
                posx = startX +( cardWidth + gap )*i;
                posy = startY +( cardHeight + gap )*0;
                deck.push( createCardItem( cardImgList[i][0], posx, posy, i) );
                deckPosition.push({x:posx, y:posy });
                
                posy = startY +( cardHeight + gap )*1;
                deck.push( createCardItem( cardImgList[i][1], posx, posy, i) );
                deckPosition.push({x:posx, y:posy });
                    
            }
        };
        
        
        function shuffleCard(){
            function shuffleItem( item1, item2){
                return Math.random()-.5;
            };
            var i;
            for(i=0; i<5; i++ ){
                deckPosition.sort( shuffleItem );   
            }
            
            
            
            var card, position;
            for( i=0; i<deckPosition.length; i++ ){
                card = deck[i];
                position = deckPosition[i];
                card.sx = position.x;
                card.sy = position.y;
            }           
        };

        /* 
         * 카드 유효성 검사
         * 이미 오픈된 카드와 중복인지 아닌지 체크
         */
        function cardValidation( objCard ){
            var i;
            var flipCard;
            for( i=0; i<openCardkList.length ; i++ ){
                flipCard = openCardkList[i];
                if (flipCard == objCard )return false;
            }
            return true;
        };
        
        /*
         * checkList 유효성 검사 
         * checkList의 길이가 2일 경우 
         * 일치카드이면 제거 아니면 초기화 
         **/
        function matchOpenCardList(){
            
            if( openCardkList[0].index == openCardkList[1].index ){
                
                drawClearCard( openCardkList[0] );
                drawClearCard( openCardkList[1] );
                count++;
                
            } else {
                
                drawFlipCard(openCardkList[0]);
                drawFlipCard(openCardkList[1]);
                
            }
            
            openCardkList=[];   
            
            
        };
        
        function checkComplete(){
            
            if( count == parseInt(deck.length/2) ){
                
                alert( '-complete-' );
                
            }
            
        };
        
        
        
        /* 카드 클릭 시 이벤트핸들러 */
        function onClick_Card( event ){
            
            if( openCardkList.length == 2 ) return;
            var rect = canvas.getBoundingClientRect();
            var i;
            var mouseX, mouseY;
            var card;
            for( i=0; i<deck.length; i++ ){
                card    =deck[i];
                if( card.sx < 0 ) continue;
                mouseX  =event.clientX - rect.left - card.sx;
                mouseY  =event.clientY - rect.top - card.sy;
                
                if( mouseX > 0 && mouseX < cardWidth ){
                    if( mouseY > 0 && mouseY < cardHeight ){
                        // 클릭된 카드가 아니면  오픈 
                        if( cardValidation( card ) ){
                            drawOpenCard( card );   
                            openCardkList.push( card );
                        }
                    }
                }
            }
            
            if (openCardkList.length == 2) {
                setTimeout( matchOpenCardList, 500 );
                setTimeout( checkComplete, 510 );
            }
        };
        
        
        
        /* 초기화 함수  */
        function init(){
            ctx     = document.getElementById("canvas").getContext("2d");
            canvas  = document.getElementById("canvas");
            canvas.addEventListener("click", onClick_Card, false );
            makeCardDeck();
            shuffleCard();
        };
        
        init();
