let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const coords ={x:0,y:0};
const circles=document.querySelectorAll(".circle");

const colors=["#590000", "#5a0002", "#5f0210", "#6a0d2f", "#772869", "#655ec2", "#00b8df", "#00ea9e", "#b0f65b", "#e9f72a", "#fcf708", "#fff700"];

circles.forEach(function (circle){
    circle.x=0;
    circle.y=0;
    // circle.style.backgroundColor=colors[index % colors.length];
});

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;

    
});

function animateCircles(){
    let x=coords.x;
    let y=coords.y;

    circles.forEach(function(circle,index){
        circle.style.left=x - 12 + "px";
        circle.style.top=y - 12 + "px";

        circle.style.scale=(circles.length-index)/10;
        // circle.style.backgroundColor=colors[index % colors.length];

        circle.x=x;
        circle.y=y;
        
        const nextCircle=circles[index+1]||circles[0];
        x+=(nextCircle.x-x)*0.4;
        y+=(nextCircle.y-y)*0.4;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();