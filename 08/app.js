var cards = [1,2,3,4,5,1,2,3,4,5];



function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

shuffle(cards);

var doms = [];
for(var i = 0; i < cards.length ; i++){

	doms.push('<div class = "card" data-value = ' + cards[i] + '>'+cards[i]+'</div>');

}

$('#board').html(doms.join(''));

var cardStatus = 'closed';

$('#board').on('click', '.card', function(event){
	
	if(cardStatus === 'closed'){
		var card = $(event.currentTarget);
		card.addClass('open');
		cardStatus = 'open1';
	}
	
	else if(cardStatus === 'open1'){

		var openCard = $('.card.open');
		var card = $(event.currentTarget);
		card.addClass('open');
		cardStatus = 'closed';

		if(card.data('value') === openCard.data('value'))
		{
			card.addClass('success');
			openCard.addClass('success');
			
		}

		else{
			setTimeout(function(event){
			var card = $('.card');
			card.removeClass('open');
			}, 1000);

		}
			
	
}
	

function findCard(){


}



});

