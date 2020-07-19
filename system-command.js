var spawn = require('child_process').spawn
var ls  = spawn('ls', ['-l'])
alert(ls)   

