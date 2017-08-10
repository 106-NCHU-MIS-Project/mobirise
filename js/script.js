var APIURL = 'http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx?callback=hello';

var xhr = new XMLHttpRequest();
xhr.open("GET", APIURL, true);
// xhr.setRequestHeader();
xhr.send();

xhr.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200){
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
}

function hello(data){
  console.log(data);
}
