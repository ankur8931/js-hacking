<script>
 var xhr = new XMLHttpRequest();
 var xhr1 = new XMLHttpRequest();

 xhr1.onreadystatechange = function() {
   if(xhr1.readyState == 4 && xhr1.status == 200) {
	var resp1 = JSON.parse(xhr1.responseText);
        var q1 = resp1["q1"];
	var q2 = resp1["q2"];
	var q3 = resp1["q3"];
	document.getElementById("result").innerHTML = 
        '<ul><li>'+q1+'</li><li>'+q2+'</li><li>'+q3+ 
	'</li></ul>';	   
   }
 };

 xhr.onreadystatechange = function() {
   if(xhr.readyState == 4 && xhr.status == 200) {
	var resp = xhr.responseXML;
	endpoint = resp.getElementsByTagName('endpoint')[0].childNodes[0].nodeValue;
	uid = resp.getElementsByTagName('uid-param-value')[0].childNodes[0].nodeValue;
	token = resp.getElementsByTagName('token-param-value')[0].childNodes[0].nodeValue;
	xhr1.open('GET', endpoint+'?uid='+uid+'&token='+token, true);
	xhr1.send('');
   }
 };

 var link = document.getElementById('settings');
 xhr.open('GET', link.href, true);
 xhr.send('');
</script>
