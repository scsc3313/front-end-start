/*! finalTest 2015-06-23 */
var NoteApp={storageKey:"note"};!function(a){a.util={storage:{load:function(){return console.log("storage.load()"),localStorage.getItem(a.storageKey)},save:function(b,c){console.log("storage.save()"),localStorage.setItem(a.storageKey,c)}}}}(NoteApp),function(a,b){function c(a){var b=f.code();e.save(a,b)}function d(){var a=e.load();f.code(a)}var e=b.util.storage,f=a("#summernote");f.summernote({height:300,onInit:d,onKeyup:c})}(jQuery,NoteApp),function(a){var b={newNote:function(b){var c=a.util.storage,d=$("#memo");c.save(b,""),d.innerHTML="",$(a).trigger("newNote")},about:function(){var a=$("#about");a.attr("style",""),console.log("about")},fullScreen:function(){var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullScreen?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.msRequestFullscreen&&a.msRequestFullscreen()},fileSaver:function(){$(a).trigger("fileSaver")}};a.ButtonAction=b}(NoteApp),function(a,b){function c(){e.on("click","a",function(c){var d=a(c.currentTarget),e=d.data("action");return b.ButtonAction[e](),!1}),a(b).on("newNote",function(){d.val(""),a(".note-editable").html("")}),a(b).on("fileSaver",function(){var a=new Blob([f.load()],{type:"text/plain;charset=utf-8"});saveAs(a,"fileSaver.html")})}var d=a("#memo"),e=a(".header .menu"),f=b.util.storage;a("#myimage");c()}(jQuery,NoteApp);