function setColor(line, color) {
    var tile = createDom("span");
    tile.setAttribute("class", "color "+color); //앞에 tile 클래스에 "color "+ color를 삽입
    tile.setAttribute("default", color);
    line.appendChild(tile); //line에 tile을 삽입!
}

var board = getDom("board");  //체스판 만들기

//칸들 지정해주기
var line = createDom("span");
line.setAttribute("class", "line");
board.appendChild(line);

//색 지정하기
for(var i = 1; i <= 4; ++i) {
    for(var j = 1; j <= 4; ++j) {
        if((i+j)%2 === 0){
          setColor(line, "white");
        }
        else setColor(line, "black");
    }
}

//클릭 이벤트 발생하게 하기
var unClick = null;
board.addEventListener("click", function(event) {
    //이벤트 타겟이 없으면 처음색으로 바꾼다.
    if(unClick !== null){
        var defaultColor = unClick.getAttribute("default");
        unClick.setAttribute("class", "color "+defaultColor);
    }
    //클릭시 빨간색으로 변함
    event.target.setAttribute("class", "color red");
    unClick = event.target;
});


function getDom(id){
  return document.getElementById(id);
}

function createDom(id){
  return document.createElement(id);
}
