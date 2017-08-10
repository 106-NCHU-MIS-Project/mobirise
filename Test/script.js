$.ajax({
  url: "http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx",
  type: "GET",
  dataType: "json",
  success: function(Jdata) {
    alert("SUCCESS!!!");
  },

  error: function() {
    alert("ERROR!!!");
  }
});
