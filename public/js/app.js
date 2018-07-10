var Crawl;

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    $("#response").append( "<br>"+t );
    //document.getElementById("response").innerHTML = t;
} 

function BeginLoop() {
	Crawl = setInterval(myTimer, 1000);
}

function EndLoop() {
    clearInterval(Crawl);
} 