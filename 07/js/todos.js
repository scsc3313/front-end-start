//todo 시작

(function($, global){


  var $todoStringField = $('#todoString');
  var $listDom = $('#todoList');

  $todoStringField.on('keyup', addTodo );


  //List를 클릭했을 경우 클래스가 delete이면 삭제!
  $listDom.on('click', '.delete', function(event){

    var $deleteBtn = $(event.target);
    var id = $deleteBtn.parent().data('id');

    collection.remove( id );

  });

    //List를 클릭했을 경우 클래스가 delete이면 삭제!
  $listDom.on('click', '.toggle-checked', function(event){

    var $deleteBtn = $(event.target);
    var id = $deleteBtn.parent().data('id');

    collection.remove( id );

  });

  // 처음 켜질때 로드실행!
  todos = storage.load();

  view.render();



})(jQuery, window);
