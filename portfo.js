  
// Decclaration section
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    // const navbarLinks2 = document.getElementsByClassName('navbar-link-2')[0]
    const home = document.querySelectorAll(".home");
    let myBtn = document.querySelector("#myBtn");
    const viewMore = document.querySelector(".viewmore");
    const viewLess = document.querySelector(".viewless");
    // const removeBtn = document.querySelector(".remove-btn");
    const sectionTwo = document.querySelector(".section-two");




    viewMore.addEventListener("click",function(){
        sectionTwo.style.display = 'block';
        viewMore.style.display = "none";
        viewLess.style.display = "block";
    });
    viewLess.addEventListener("click",function(){
        sectionTwo.style.display = 'none';
        viewMore.style.display = "block";
        viewLess.style.display = "none";
    });


    

// function displayViewMore(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         viewMore.style.display = 'block';
//     }else{
//         viewMore.style.display = "none";
//     }
// }

    // home toggle on click
    home.forEach(function(eachhome){
        eachhome.addEventListener("click",function(){
            navbarLinks.classList.toggle('active');
        })
    })
            toggleButton.addEventListener('click', ()=>{
                navbarLinks.classList.toggle('active');
        });



    window.onscroll = ()=>{
        topbtnDisplay();
        displayViewMore();
        }


const topbtnDisplay = ()=>{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            myBtn.style.display = 'block';
        }else{
            myBtn.style.display = 'none';
        }
    }
        const topFunction = ()=>{document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }







































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

































 

