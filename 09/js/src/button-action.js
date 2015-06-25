(function(app){

var BtnAction = {

    newNote: function(event){

      //console.log('newNote')
  	 var storage = app.util.stoage;

     storage.save(event, "");

     $(app).trigger("newNote");
    },
    about: function(){

      console.log('about')
    }

  };

  app.ButtonAction = BtnAciton;

 })(NoteApp);
