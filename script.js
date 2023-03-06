
const contactLink = document.querySelector('.button');
const contactSection = document.querySelector('#contact');

contactLink.addEventListener('click', function() {
  // contactSection.classList.add('visible');

  if (contact.style.visibility === "hidden" && contact.style.display === "none") {
    contact.style.visibility = "visible";
    contact.style.display = "flex";
  } else {
    contact.style.visibility = "hidden";
    contact.style.display = "none";
  }
  
});



// ==============================================Form================================================================================

document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});
