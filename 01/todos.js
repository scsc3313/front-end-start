
function getDom(id){
  return document.getElementById(id);
}

var todoStringField = getDom('todoString');

todoStringField.addEventListener('keyup', function(event){

  console.log(todoStringField.value);
  if(event.keyCode === 13){

      var newTodo = todoStringField.value;
      todoStringField.value = "";
      var listDom = getDom('todoList');

      listDom.innerHTML += '\
      <li>\
          <button class="delete">×</button>\
          <input type="checkbox" class="toggle-checked">\
          <span class="text">'+ newTodo + '</span>\
      </li>';

  }

});
