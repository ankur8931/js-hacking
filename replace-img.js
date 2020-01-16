<script>
 var img = document.createElement('img');
 img.src = 'http://kali.attackdefense.com/logo.png';
 imgold = document.images[0];
 imgold.parentNode.appendChild(img);
 imgold.parentNode.removeChild(imgold);
</script>
