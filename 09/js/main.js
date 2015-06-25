(function($, app){


  var $memo = $('#memo');
  var $menu = $('.header .menu');
  var storage = app.util.stoage;

  bindEvent();
  loadMemo();

  function bindEvent(){

    $memo.on('keyup', function(event){

      // console.log(event.keyCode)
      var value = $memo.val();
      // console.log(value)
      storage.save(event, value);

    });

    $menu.on('click', 'a', function(event){

      var $btn = $(event.currentTarget);
      var action = $btn.data('action');

      app.BtnAction[action]();

      return false;
    });

    $(app).on('newNote', function(){
      $memo.val('');
    });
  
  }
  function loadMemo(){
   $memo.val ( storage.load() );
  }


})(jQuery);