//scroll to top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '100');
});

AOS.init();

// Contact : PNG illustration
let el = document.querySelector('.avatar')

el.addEventListener('mousemove', (e) => {
    let thisPX = el.getBoundingClientRect().left
    let thisPY = el.getBoundingClientRect().top
    let boxWidth = el.getBoundingClientRect().width
    let boxHeight = el.getBoundingClientRect().height
    let scrollTop = document.documentElement.scrollTop + document.body.scrollTop

    let mouseX = e.pageX - thisPX
    let mouseY = e.pageY - scrollTop - thisPY
    let X
    let Y

    X = mouseX - boxWidth / 2
    Y = boxHeight / 2 - mouseY

    el.style.transform = `perspective(300px) rotateY(${X / 10}deg) rotateX(${Y / 10}deg)`
    el.style.boxShadow = `${-X / 20}px ${Y / 20}px 50px rgba(0, 0, 0, 0.3)`
        })


el.addEventListener('mouseleave', () => {
    el.style.transform = `perspective(300px) rotateY(0deg) rotateX(0deg`
    el.style.boxShadow = ''
})

// Carousel 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// contact
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });