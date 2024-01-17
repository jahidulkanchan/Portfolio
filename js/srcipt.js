//nav toggle
var navToggler = document.getElementById("nav-toggle");
var mainMenu = document.getElementById('main-menu');

navToggler.addEventListener('click', ()=>{
    navToggler.classList.toggle("active");
  mainMenu.classList.toggle("active");
})
document.addEventListener('click', function(e){
    if (e.target.id !== "menu" && e.target.id !== "nav-toggle") {
        navToggler.classList.remove("active");
        mainMenu.classList.remove("active");
      }
});

//Sticky Nav
let navSlide = document.getElementById("header");
let prevPos = window.scrollY;
window.addEventListener('scroll', ()=>{
  let newPos = window.scrollY;
  if(newPos > prevPos){
 
    navSlide.classList.add('hide');
  }
  else{
    navSlide.classList.remove('hide');
  }
   prevPos = newPos;
})

//TopScroll
window.addEventListener("scroll" , function(){
//TopScroll
  var topScroll = document.getElementById("top-scroll");
  topScroll.classList.toggle("visible", window.scrollY > 400 );
  topScroll.addEventListener('click', function(){
      $(window).scrollTop(0);
  });
})

//active menu
// $(document).on('click', 'ul.menu li a', function(){
//   $(this).addClass('active').siblings().removeClass('active');
// })

//Smooth-scroll js
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");  
      $('.scroll-to-section a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
      var target = this.hash,
      menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
          scrollTop: (target.offset().top) + 1
      }, 100, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.menu li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


//owl carousel
$('.slide1').owlCarousel({
  loop: true,
  margin: 20,
  stagePadding: 10,
  autoplay: true,
  nav: false,
  smartSpeed: 300,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
// progress bar
var skillSection = document.getElementById('skill-section');
var progressBar = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll',() =>{
var sectionPos = skillSection.getBoundingClientRect().top;
var screenPos = window.innerHeight /1.2;

function showProgress(){
    progressBar.forEach(progressBar =>{
        var value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBar.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
    if( sectionPos < screenPos){
        showProgress();
    }
    // else{
    //     hideProgress();
    // }
});
//counter
$('.counterup').counterUp({
  delay: 10,
  time: 1000
});
