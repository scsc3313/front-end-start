//실행할 function 정의하기
function addTodo(event) {

  console.log('todoStringField keyup!');


  var $field = $(event.currentTarget);
  var fieldValue = $field.val();

  if (event.keyCode !== 13 || fieldValue === "") {

    console.log('event stop')
    return false;
  }


  $field.val('');
//key값은 현재 시간으로 정해줌!
  var id = new Date().getTime();

  var todo  = $.extend({}, Todo.model, {
    id: id,
    title: fieldValue
  });

  console.log('new​ todo.model:', todo);



  collection.add( todo );

  // renderTodos(todos);
  // saveData( todos );
}

