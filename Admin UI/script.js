// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById ("KenModal");
var modal3 = document.getElementById ("StephModal");
var modal4 = document.getElementById ("KurtModal");
var auctModal = document.getElementById("IceboxModal");
var auctModal2 = document.getElementById("TableModal");
var auctModal3 = document.getElementById("SingerModal");
var auctModal4 = document.getElementById("ColaModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn1");
var btn2 = document.getElementById("modalBtn2");
var btn3 = document.getElementById ("modalBtn3");
var btn4 = document.getElementById ("modalBtn4");
var auctbtn = document.getElementById ("auctBtn1")
var auctbtn2 = document.getElementById ("auctBtn2")
var auctbtn3 = document.getElementById ("auctBtn3")
var auctbtn4 = document.getElementById ("auctBtn4")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

var span5 = document.getElementsByClassName ("close")[4];
var span6 = document.getElementsByClassName ("close")[5];
var span7 = document.getElementsByClassName ("close")[6];
var span8 = document.getElementsByClassName ("close")[7];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function ()
{
  modal2.style.display = "block";
}

btn3.onclick = function ()
{
  modal3.style.display = "block";
}

btn4.onclick = function ()
{
  modal4.style.display = "block";
}

auctbtn.onclick = function ()
{
  auctModal.style.display = "block";
}

auctbtn2.onclick = function ()
{
  auctModal2.style.display = "block";
}
auctbtn3.onclick = function ()
{
  auctModal3.style.display = "block";
}
auctbtn4.onclick = function ()
{
  auctModal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function ()
{
  modal2.style.display = "none";
}

span3.onclick = function ()
{
  modal3.style.display = "none";
}

span4.onclick = function ()
{
  modal4.style.display = "none";
}

span5.onclick = function ()
{
  auctModal.style.display = "none";
}

span6.onclick = function ()
{
  auctModal2.style.display = "none";
}

span7.onclick = function ()
{
  auctModal3.style.display = "none";
}

span8.onclick = function ()
{
  auctModal4.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}