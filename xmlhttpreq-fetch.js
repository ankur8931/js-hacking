<script>
 var xhr = new XMLHttpRequest();

 xhr.onreadystatechange = function () {
  if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById('result').innerHTML = xhr.responseText;
  }
 };

 xhr.open('GET', '/lab/webapp/jfp/14/email?name=john', true);
 xhr.send('');
</script>
