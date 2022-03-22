window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

})

let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu-bar');
    menu_bar.addEventListener('click', function(){
         menu.classList.toggle('menu-toggle');
})

var typed = new Typed(".typing",{
    strings:["", "Freelance", "Web Desinger", "Web Developer"],
    typeSpeed:150,
    BackSpeed:60,
    loop:true
})