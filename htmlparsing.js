<script>
 xhr = new XMLHttpRequest();
 
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
    parser = new DOMParser();
    htmlRes = parser.parseFromString(text,'text/html');
    document.getElementById('result').innerHTML = htmlRes.getElementById('address').innerHTML;
  }
}

 xhr.open('GET','/lab/webapp/jfp/18/',true);
 xhr.send('');
</script>
