const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active');
    
});
let myBtn = document.querySelector("#myBtn");

window.onscroll = ()=>{scrol()}

//top function


//function to take button up

const scrol = function(){
 if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myBtn.style.display = 'block';
    }else{
        myBtn.style.display = 'none';
    }
}
const topFunction = ()=>{document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0}












































// //get the button from html
// myButton = document.getElementById("myBtn");

// //window.onscroll function to call the scroll function as soon as the user scroll down 20px from top
// window.onscroll=()=>{scroll()};

// //the scrolldown function
// const scroll = ()=>{document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? myButton.style.display = 'block':
//    myButton.style.display = 'none';}

//    //topfunction
// const topFunction = ()=>{document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
$("document").ready(function(){
    $("#myBtn").click(function(){
        $("#myBtn").fadeOut(500);
    })
})

































 

