(function($, app){


  var $memo = $('#memo');
  var $menu = $('.header .menu');
  var storage = app.util.storage;
  
  var $i = $('#myimage');

  bindEvent();

  function bindEvent(){

   
    $menu.on('click', 'a', function(event){

      var $btn = $(event.currentTarget);
      var action = $btn.data('action');

      app.ButtonAction[action]();

      return false;
    });

    $(app).on('newNote', function(){
      $memo.val('');
      $('.note-editable').html('');
   
    });


    $(app).on('fileSaver', function(){
     
      var blob = new Blob([storage.load()], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "fileSaver.html");

    });

  }


})(jQuery, NoteApp);
