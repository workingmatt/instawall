//helpers.js
var fs = require('fs');

module.exports = {

	sendFileList: function(res){
		var path = "./public/turnercontemporary";
		fs.readdir(path,'utf8',function(err,files){
			if(err){
				console.log("getFileList error: ");
				console.log(err);
				console.log("*** End of Error");
				return err;
			}
			console.log('Sending file list');
			res.send(files);
			return;
		})
	}




}