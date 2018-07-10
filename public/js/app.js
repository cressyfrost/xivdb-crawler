var Crawl;

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var elem = document.getElementById('responses');
    elem.scrollHeight = elem.scrollHeight+5;
    $("#responses").append( '<div>'+t+'</div>' );
    var elem = document.getElementById('responses');
  	elem.scrollTop = elem.scrollHeight;
    console.log(elem);
    //document.getElementById("response").innerHTML = t;
} 

function BeginLoop() {
	Crawl = setInterval(myTimer, 100);
}

function EndLoop() {
    clearInterval(Crawl);
} 