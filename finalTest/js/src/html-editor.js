(function($, app){
    
  var storage = app.util.storage;

  var $summernote = $('#summernote');

   $summernote.summernote({
      height: 300,
      onInit: loadData,
      onKeyup: saveData
    });


    function saveData(event){

      var value = $summernote.code();
      // console.log(html);
      storage.save(event, value);
    }

     function loadData(){
      var html = storage.load();
      $summernote.code(html);
    }



})(jQuery, NoteApp);



