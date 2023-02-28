const navMenu = document.getElementById ('nav__menu'),

      navToggle = document.getElementById ('nav__toggle')


      if (navToggle){

        navToggle.addEventListener ('click', () =>{

            navMenu.style.visibility = "visible";   
 
        })


      }

const contactMe = document.getElementsByClassName ('contactMe__section')


// ==============================================Animation section=======================================================================

document.addEventListener("DOMContentLoaded", function(event) {
  //Removing article link when on mobiforge
  console.log(document.referrer);
  if (parent !== window && document.referrer.indexOf('https://mobiforge.com') === 0 && document.referrer.indexOf('http://mobiforge.com') === 0)
  {  
    console.log(document.referrer);
    document.getElementById('article-link').className = "fade-out";
  }

});

// ==============================================Form================================================================================

document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});
