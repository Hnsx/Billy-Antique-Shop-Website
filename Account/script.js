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

let adminbtn = document.getElementById("admin");
let userbtn = document.getElementById("user");

function getselectValue()
{
   var list = document.getElementById("list").value;
   if (list =="admin")
   {
      adminbtn.style.display = "block";
      userbtn.style.display = "none";
   }

   if (list == "USER")
   {
      userbtn.style.display = "block";
      adminbtn.style.display = "none";
   }
}


