module.exports = {
  xivdb: function() {
    var http = require('http');
    const chalk = require('chalk');

    var options = {
      host: 'api.xivdb.com'
    };

    var pool = [];

    for(var x=1; x<5; x++)
    {
        pool.push('/item/'+x); 
    }

    //console.log(pool);

    var index = 0;
    //request(100).setInterval(2000);
    var refreshIntervalId = setInterval(function request() {
      options.path = pool[index++];
      http.get(options, function(res){
        var body = '';
        res.on('data', function(chunk){
           //console.log(x++);
           body += chunk;
           //console.log(chalk.green(options.path));
           //console.log(chunk.toString('utf8'));
        });

        res.on('end', function(){
               var fbResponse = JSON.parse(body);
               console.log(chalk.green("Fetched: "), fbResponse.name);
               if(index >= pool.length)
                {
                  clearInterval(refreshIntervalId);
                  console.log(chalk.blue("Done. Fetched "+index+" items."));
                }
           });

      }).on("error", function(e){
        console.log("Got error: " + e.message);
      });
    }
    , 2000);
  }
}