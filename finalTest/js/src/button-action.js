(function(app){


  var BtnAction = {

    newNote: function(event){

      // console.log('newNote')
      var storage = app.util.storage;

      storage.save(event, "");
      
      $(app).trigger("newNote");

    },

    about: function(){
      var board = $('#about');

      board.attr("style", "");
      console.log('about');
    },

    fullScreen: function(){

      var fullScreen = document.documentElement;

      if (fullScreen.requestFullscreen) {
         fullScreen.requestFullscreen();
      }
      else if (fullScreen.mozRequestFullScreen) {
         fullScreen.mozRequestFullScreen();
      }
      else if (fullScreen.webkitRequestFullScreen) {
         fullScreen.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
      else if (fullScreen.msRequestFullscreen) {
         fullScreen.msRequestFullscreen();
      }

    },

    fileSaver: function(){

       $(app).trigger("fileSaver");

    }

  };

  app.ButtonAction = BtnAction;

})(NoteApp);
