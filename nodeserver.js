var http = require('http');
var sys = require('sys')
var exec = require('child_process').exec;
var child;


http.createServer(function(req, res){
	child = exec("mplayer -x 720 -y 480 /home/pi/Desktop/test.mov", function(error, stdout, stderr) {
		sys.print('stdout: ' + stdout);
		sys.print('stderr: ' + stderr);
		if (error != null) {
			console.log('exec error: ' + error);
		}		
	});

	res.end('<h1> Holy shit video playback!!!!</h1>');
}).listen(80, function() {
  console.log("Listening on at 128.122.151.50:80");
});