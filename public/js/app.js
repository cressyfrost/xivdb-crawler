var Crawl;
var itemID = 1;

/*
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var elem = document.getElementById('responses');
    elem.scrollHeight = elem.scrollHeight+5;
    $("#responses").append( '<div>'+itemID+'</div>' );
    itemID++;
    var elem = document.getElementById('responses');
  	elem.scrollTop = elem.scrollHeight;
    console.log(elem);
    //document.getElementById("response").innerHTML = t;
} 
*/

function myTimer() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        let datatext = '['+ myObj.name_en+ '] '+myObj.help; 
        var elem = document.getElementById('responses');
        elem.scrollHeight = elem.scrollHeight+5;
        $("#responses").append( '<div>'+datatext+'</div>' );
        var elem = document.getElementById('responses');
        elem.scrollTop = elem.scrollHeight;
      console.log(datatext);
    }
  };
  xhttp.open("GET", "/item/"+itemID++, true);
  xhttp.send();
}

function BeginLoop() {
	Crawl = setInterval(myTimer, 1000);
}

function EndLoop() {
    clearInterval(Crawl);
} 