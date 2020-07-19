<script>
var spawn = require('child_process').spawn,
var ls  = spawn('ls', ['-l']);
ls.stdout.on('data', function (data) {
   console.log(data);
   alert(data);
});
</script>
