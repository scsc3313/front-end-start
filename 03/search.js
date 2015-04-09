//박스 오피스 데이터 가져오기

(function(){

var searchAPI;
var nowPage = 1;
var moreButton = $('moreButton');
var searchText ;

moreButton.addEventListener('click', moreShow);

function moreShow(){
	nowPage++;
	searchAPI = 'http://apis.daum.net/search/web?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
	jsonp2();
};

function search(){
	searchText = searchBar.value;
	searchBar.value = '';
	searchAPI = 'http://apis.daum.net/search/web?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
	jsonp();
};

searchButton.addEventListener('click', search);



function jsonp(){

var listTemplate = $('listTemplate').innerHTML;
var searchBar = $('searchBar');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(searchAPI, function(searchData){
  console.log(searchData);

  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:searchData.channel.item});

  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;

});

};


function jsonp2(){

var listTemplate = $('listTemplate').innerHTML;
var searchBar = $('searchBar');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(searchAPI, function(searchData){
  console.log(searchData);

  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:searchData.channel.item});

  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML += html;

});

};

})();



