var namekey = document.getElementsByName("username")[0].value;
if (namekey.length == 0) {
    documnet.getElementByTagName('label')[0].style.color = "red";
}