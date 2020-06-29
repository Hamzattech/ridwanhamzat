const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    
});
//get the button from html
myButton = document.getElementById("myBtn");

//window.onscroll function to call the scroll function as soon as the user scroll down 20px from top
window.onscroll=()=>{scroll()};

//the scrolldown function
const scroll = ()=>{document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? myButton.style.display = 'block':
   myButton.style.display = 'none';}

   //topfunction
const topFunction = ()=>{document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
}

































 

