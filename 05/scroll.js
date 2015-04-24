


var body = $('#body');

for(var i = 0 ; i < 50; i++){body.append('안녕<br>');}


var makeButton = $('<div>')
            .attr('class', 'top')
            .click(function(){
      body.animate({scrollTop:0})})
            .appendTo(body);


$(document).ready(function(){
  $(window).scroll(function(){
    console.log('scroll function');

    var y = $(this).scrollTop();

    if(y >= 100){
      makeButton.fadeIn();
    }
    else{
      makeButton.fadeOut();
    }
    
  });
});

