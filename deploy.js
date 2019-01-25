var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	user: "honestgram",                   
    password: "^^eazLink313",           // optional, prompted if none given
	host: "honestgram.com",
	port: 21,
	localRoot: __dirname + '/build/',
	remoteRoot: '/public_html/',
	// include: ['*', '**/*'],      // this would upload everything except dot files
	include: ['*', '**/*'],
    exclude: ['**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false              // delete existing files at destination before uploading
}


//use with callback
ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});
