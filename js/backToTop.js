// function to show / hide the button should be hidden by default on css
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// scroll to top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// get the button
const toTopButton = document.getElementById("scroll__top");

// call the function to hide / show button
window.onscroll = function() {scrollFunction()};