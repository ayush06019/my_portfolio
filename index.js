//naviagtion bar effect on scroll
gsap.to(".nav-bar",{
    backgroundColor: "#27cf8c90",
    height: "70px",
    duration: 1,
    scrollTrigger:{
        trigger:".nav-bar",
        scroller:"body",
        /*markers:true,*/
        start:"top -10%",
        end:"top -11%",
        scrub: 0.5
    }

});
//cursor
const cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    cursor.animate({
        left: `${mouseX}px`,
        top: `${mouseY}px`
    }, { duration: 500, fill: "forwards"});
});
//services section modal
const projectModals = document.querySelectorAll(".project-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick) {
    projectModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click" , () =>{
        modal(i);
    });
});
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        projectModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});
//portfolio section modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click" , () =>{
        portfolioModal(i);
    });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});
//website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("save-theme", getCurrentTheme());
    localStorage.setItem("save-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon")

if(savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//scroll to top button
const scrollToTop = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollToTop.classList.toggle("active", window.scrollY > 500);
});

scrollToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//navigation menu active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });

});
//responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
navItems.forEach((navItem) => {
    navItem.addEventListener("click",() => {
        navigation.classList.remove("active");
    });
});
//scroll reveal animation
const phone = document.querySelectorAll('.phone');
function activelink() {
    phone.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
phone.forEach((item) => 
item.addEventListener('click', activelink))
//sound
var homeone= $("#home-sound")[0];
$(".nav-items #one")
.mouseenter(function() {
    homeone.play();
});
var aboutone= $("#about-sound")[0];
$(".nav-items .two")
.mouseenter(function() {
    aboutone.play();
});
var skillsone= $("#skills-sound")[0];
$(".nav-items .three")
.mouseenter(function() {
    skillsone.play();
});
var projectone= $("#projects-sound")[0];
$(".nav-items .four")
.mouseenter(function() {
    projectone.play();
});
var portfolioone= $("#portfolio-sound")[0];
$(".nav-items .five")
.mouseenter(function() {
    portfolioone.play();
});
var contactone= $("#contact-sound")[0];
$(".nav-items .six")
.mouseenter(function() {
    contactone.play();
});
const audio1 = new Audio();
const audio2 = new Audio();
const audio3 = new Audio();
const audio4 = new Audio();
const audio5 = new Audio();
const audio6 = new Audio();
const audio7 = new Audio();
const audio8 = new Audio();
const audio9 = new Audio();
audio1.src =  "sound/HOMECLICK.mp3";
audio2.src =  "sound/ABOUTCLICK.mp3";
audio3.src =  "sound/SKILLSCLICK.mp3";
audio4.src =  "sound/PROJECTSCLICK.mp3";
audio5.src =  "sound/PORTFOLIOCLICK.mp3";
audio6.src =  "sound/CONTACTCLICK.mp3";
audio7.src =  "sound/top.mp3";
audio8.src =  "sound/dark.mp3";
audio9.src =  "sound/light.mp3";
//comman reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '20px',
    duration: 2500,
    delay: 100,
});
//target elements , and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2 , .about-info h3', { delay: 300, origin: 'left'});
ScrollReveal().reveal('.section-title-02', { delay: 100, origin: 'left'});
ScrollReveal().reveal('.section-title-01', { delay: 100, origin: 'right'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info p, .about-info .btn', { delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn, .about-info h4', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.icons, .contact-left li', { delay: 300, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', { delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.about .discription, .contact-right', { delay: 500, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', { delay: 300, origin: 'right', interval: 200});
ScrollReveal().reveal('.skills-discription, .project-description, .contact-left h2, .projects-discription h3', { delay: 500, origin: 'left'});
ScrollReveal().reveal(' .project-card, .education, .img-card', { delay: 600, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer, .group, .contact-card', { delay: 300, origin: 'top', interval:200});

//sound
//phonemenu
