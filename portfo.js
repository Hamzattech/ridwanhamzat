const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
})
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollDown()};
const scrollDown = ()=>(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? 
  mybutton.style.display = "inline" : mybutton.style.display = "none");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
