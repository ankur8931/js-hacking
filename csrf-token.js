<script>
  xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () { 
     if(chr.readyState == 4 && xhr.status == 200) {
	   document.getElementById('result').innerHTML = xhr.responseText;
     }
  };

  var token =  window.location.search.split('&')[1];
  xhr.open('GET','/lab/webapp/jfp/16/email?name=john&'+token, true);
  xhr.send('');

</script>
