//저장하기 위한 storage 객체 생성
var storage = {
  //로드를 하기위함
  load: function(){
    console.log('storage.load()');
    return JSON.parse( localStorage.getItem('todos') || "[]"); //"[]"는 맨처음 로드될때 에러가 나는 것을 방지하기 위해
  },
  //저장을 하기위함
  save: function(){
    console.log('storage.save()');
    localStorage.setItem('todos', JSON.stringify(todos) );

  }
}

$(document.body).on('addCollection', storage.save);
$(document.body).on('removeCollection', storage.save);
