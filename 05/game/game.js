
var box = document.querySelectorAll('.box')[0];
var x = 10;
var y = 10;



function moveBox(){

  var valueX = Math.random() * 800 ;
  var valueY =  Math.random() * 800;
  box.style.left = valueX + 'px';
  box.style.top = valueY + 'px';

  x = valueX;
  y = valueY;

  if (x === 800 && y === 800){
    x = 10;
    y = 10;
  }
}


var body = document.getElementById("body");
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', startMove);

function startMove(){ window.setInterval(moveBox, 1000); };

var oneClickScore = 0;
var box = document.getElementById('box');
box.addEventListener('click', function(){
  var score = document.getElementById('score');
  
  oneClickScore = parseInt(oneClickScore);
  oneClickScore += 1;
  score.innerHTML = '점수 : '+oneClickScore;
   
});