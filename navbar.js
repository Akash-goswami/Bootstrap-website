var Bars = document.querySelector('#bars');
var Navbar = document.querySelector('#navbar');


Bars.addEventListener("click",function(e){
    e.stopPropagation();
    Navbar.classList.toggle('pos-show');
})
Navbar.addEventListener('click',function(e){
    e.stopPropagation();
})
document.addEventListener('click',function(){
    Navbar.classList.remove('pos-show');
})