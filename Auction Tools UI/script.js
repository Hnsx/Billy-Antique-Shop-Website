let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};


function clockTick() {
  var currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
  // here we get the element with the id of "date" and change the content to the text variable we made above
  document.getElementById("date").innerHTML = text;
}

// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);


// Get the modals//
var iceboxModal = document.getElementById("iceboxModal");
var tableModal = document.getElementById("tableModal");

//Get Confirmation text
var confirmationShow = document.getElementsByClassName("confirmation-show")[0];
var confirmationShow2 = document.getElementsByClassName("confirmation-show")[1];


// Get the button that opens the modal
var icebox = document.getElementById("icebox");
var table = document.getElementById("table");


// Get the bid button element that shows the confirmation text
var bid = document.getElementsByClassName("bid")[0];
var bid2 = document.getElementsByClassName("bid")[1];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];


// When the user clicks the button, open the modal 
icebox.onclick = function() {
  iceboxModal.style.display = "block";
}

table.onclick = function() {
    tableModal.style.display = "block";
  }

// When user clicks the bid button, confirmation text shows
bid.onclick = function ()
{
    confirmationShow.style.display = "block";
}

bid2.onclick = function ()
{
    confirmationShow2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function()
{
  iceboxModal.style.display = "none";
  confirmationShow.style.display = "none";
}

span2.onclick = function()
{
    tableModal.style.display = "none";
    confirmationShow2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1000;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 100;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}



function add(max) {
  document.getElementById("number").value = parseInt(document.getElementById("number").value) + 1000;
  if (document.getElementById("number").value >= parseInt(max)) {
      document.getElementById("number").value = max;
  }
}
function minus(min) {
  document.getElementById("number").value = parseInt(document.getElementById("number").value) - 100;
  if (document.getElementById("number").value <= parseInt(min)) {
      document.getElementById("number").value = min;
  }
}



document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

document.querySelectorAll('.featured-image-4').forEach(image_4 =>{
  image_4.addEventListener('click', () =>{
    var src = image_4.getAttribute('src');
    document.querySelector('.big-image-4').src = src;
  });
});

document.querySelectorAll('.featured-image-5').forEach(image_5 =>{
  image_5.addEventListener('click', () =>{
    var src = image_5.getAttribute('src');
    document.querySelector('.big-image-5').src = src;
  });
});

document.querySelectorAll('.featured-image-6').forEach(image_6 =>{
  image_6.addEventListener('click', () =>{
    var src = image_6.getAttribute('src');
    document.querySelector('.big-image-6').src = src;
  });
});
