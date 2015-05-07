var todos = [ ];

//TodoModel을 받기 위한 colletion 생성
var collection = {

  //collection에 todo 추가하기
  add: function(todo) {

    todos.push(todo);

    $(document.body).trigger( "addCollection"); //addCollection을 실행

  },
  //collection에 있는 todo를 삭제하기
  remove: function(id){

    for(var i=0; i <todos.length; i++){

      if(todos[i].id === id){
        console.log('find', i)
        //todos에서  todo를 지워야해
        todos.splice(i, 1);
        break;
      }

    }//end for

    $(document.body).trigger( "removeCollection"); //removeCollection을 실행


  },

  checked: function(id){

    for(var i=0; i <todos.length; i++){

      if(todos[i].checked === 'unchecked'){
        console.log('find', i)
        //todos에서  todo를 지워야해
        todos.splice(i, 1);
        break;
      }

    }//end for

    $(document.body).trigger( "checkedCollection"); //removeCollection을 실행
  }


}
