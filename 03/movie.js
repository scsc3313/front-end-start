//박스 오피스 데이터 가져오기
(function(){
  
var boxOfiiceAPI = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=';
var listTemplate = $('listTemplate').innerHTML;

console.log(listTemplate);
getJSON(boxOfiiceAPI, function(boxOfficeData){
  console.log(boxOfficeData);



  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:boxOfficeData.data});


  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;

});

})();





