module.exports = {
  getItem: function(id,callback) {
    var http = require('http');
    const chalk = require('chalk');
    let itemId = id;

    var options = {
      host: 'api.xivdb.com'
    };

    options.path = '/item/'+itemId;
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
             return callback(fbResponse, false);
         });

    }).on("error", function(e){
      console.log("Got error: " + e.message);
      return callback(null, error);;
    });
    

  }
}