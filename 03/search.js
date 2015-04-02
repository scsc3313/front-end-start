//박스 오피스 데이터 가져오기

(function(){

var boxOfficeAPI;

searchButton.onclick = function(){
	var searchText = searchBar.value;
	searchBar.value = '';
	boxOfficeAPI = 'http://apis.daum.net/search/web?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json';
	jsonp();
};


function jsonp(){

var listTemplate = $('listTemplate').innerHTML;
var searchBar = $('searchBar');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(boxOfficeAPI, function(boxOfficeData){
  console.log(boxOfficeData);

  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:boxOfficeData.channel.item});

  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;

});

};

})();



