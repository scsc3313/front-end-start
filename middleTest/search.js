(function(){


var nowPage = 1;
var searchText = '';
var API;  
var searchButton = $('searchButton');
var searchBar = $('searchBar');
//더보기 버튼 생성
var moreButton = document.createElement("button");
moreButton.innerHTML = '더보기';
moreButton.setAttribute("type", "button");
moreButton.setAttribute("class", "btn btn-default btn-block");

//검색 방법을 정해주는 checking 생성
var checking = 'board';

//리스트들을 불러온다.
var unActiveList = document.getElementsByName("unactive");

//클릭했을 경우 list가 활성화 되고 그 API가 선택되도록 한다.
function setList(i){
  for(var j = 0; j <unActiveList.length ; j++){ unActiveList[j%6].setAttribute("class", "unactive"); }
  unActiveList[i].setAttribute("class", "active");
  checking = unActiveList[i].getAttribute("id");
}

//검색했을 경우 나오는 목록표시
function search(){
    if(searchText !== ''){
    nowPage =1;
    API = 'https://apis.daum.net/search/'+checking+'?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
    $('more').appendChild(moreButton);
    searchjsonp();
  }
}
//검색값을 받고 검색바의 값을 지워줌
function searchTextInsert(){
  searchText = searchBar.value;
  searchBar.value = '';
}
//게시판, 팁, 블로그, 카페에서 사용되는 템플릿
function makeTemplate(){
  var listTemplate = $('listTemplate');
  listTemplate.innerHTML = '<% for(var i=0; i<list.length; i++) { %>\
                            <li><a href = " <%= list[i].link %>"><%= list[i].title %></a></li>\
                            <%} %>';
}
//이미지, 동영상에서 사용되는 템플릿
function makeImageTemplate(){
  var listTemplate = $('listTemplate');
  listTemplate.innerHTML = '<% for(var i=0; i<list.length; i++) { %>\
      <li>\
        <img src= <%= list[i].thumbnail %> width="100" alt="" class="img-thumbnail">\
        <a href = <%= list[i].link %>><%= list[i].title %></a></li>\
      <%} %>';
}
//로딩을 사용하는것, '1' 일경우 로딩 이미지 , '0' 일경우 로딩 이미지 삭제
function loading(value){
  if(value === 1){ //value가 1이면 로딩화면 띄우고 
    $('loading').innerHTML = "<img src='ajax-loader.gif' align = 'center'>"
  }
  else if(value === 0){ //value가 0이면 로딩화면 삭제
    $('loading').innerHTML = ""
  }

}
//각각 리스트에 기능을 추가한다.
unActiveList[0].addEventListener("click",function(){makeTemplate(); setList(0); search();});
unActiveList[1].addEventListener("click",function(){makeImageTemplate(); setList(1); search();});
unActiveList[2].addEventListener("click",function(){makeImageTemplate(); setList(2); search();});
unActiveList[3].addEventListener("click",function(){makeTemplate(); setList(3); search();});
unActiveList[4].addEventListener("click",function(){makeTemplate(); setList(4); search();});
unActiveList[5].addEventListener("click",function(){makeTemplate(); setList(5); search();});

//엔터를 쳐서 검색할수 있도록함
searchBar.addEventListener('keyup', function(event){
  if(event.keyCode === 13)
  {
    if(searchBar.value == ''){window.alert("검색값을 입력하세요.")}
    else
    { if($('image').className === 'active' || $('vclip').className === 'active' ){makeImageTemplate();}
      else{makeTemplate();}
      searchTextInsert();
      search();
      unClick = false;
    }
  }
});
//검색버튼을 눌러서 검색할수 있도록 함
searchButton.addEventListener('click', function(ev){
    if(searchBar.value == ''){window.alert("검색값을 입력하세요.")}
    else
    { if($('image').className === 'active' || $('vclip').className === 'active' ){makeImageTemplate();}
      else{makeTemplate();}
      searchTextInsert();
      search();
      unClick = false;
    }
  
});
//더보기 기능을 추가
moreButton.addEventListener('click', function(){
    nowPage++;
    API = 'http://apis.daum.net/search/'+checking+'?apikey=e519ec54d7e9852d7b3c5acfdafe9475&q='+searchText+'&output=json&pageno='+ nowPage;
    morejsonp();
});
//일반 검색을 위한 jsnop
function searchjsonp(){
  loading(1);
  var listTemplate = $('listTemplate').innerHTML;
  console.log(listTemplate);
  getJSON(API, function(searchData){
      var result = searchData.channel.result;
      if(result < 10) moreButton.remove();
    // 템플릿 가져와서 parse
    var html = tmpl(listTemplate, {list:searchData.channel.item});
     html = html.replace(/&lt;/gi,"<");
     html = html.replace(/&gt;/gi,">");
    loading(0);
    //parse한 html을 $wrap 넣어주기
    $('table').innerHTML = html;
  });
};
//더보기를 위한 jsnop
function morejsonp(){
    loading(1);
    var listTemplate = $('listTemplate').innerHTML;
    console.log(listTemplate);
    getJSON(API, function(searchData){
      var result = searchData.channel.result;
      if(result < 10) moreButton.remove();
      // 템플릿 가져와서 parse
      var html = tmpl(listTemplate, {list:searchData.channel.item});
       html = html.replace(/&lt;/gi,"<");
       html = html.replace(/&gt;/gi,">");
      //parse한 html을 $wrap 넣어주기
      loading(0);
      $('table').innerHTML += html;
  });
};

})();



