
const contactLink = document.querySelector('.button');
const contactSection = document.querySelector('#contact');

contactLink.addEventListener('click', function() {

  if (contact.style.visibility === "hidden" && contact.style.display === "none") {
    contact.style.visibility = "visible";
    contact.style.display = "flex";
  } else {
    contact.style.visibility = "hidden";
    contact.style.display = "none";
  }
  
});
// ==============================================Ajout d'un évenement sur le numéro de bouton================================================================================


const numberElements = document.querySelectorAll('.next .number');
const imagePaths = ['image/image1.png', 'image/image2.jpg', 'image/image3.png', 'image/image4.png', 'image/image5.png', 'image/image6.png', 'image/image7.png', 'image/image8.png', 'image/image9.png', 'image/image10.png'];
const titles = ["Une landing page joue un role très important dans le cadre d'une campagne marketing Elle sert donc à informer les internautes sur un aspect précis votre  entreprise et à les inciter à effectuer une manipulation spécifique", 
"Nous réalisons des applications à fonctionner sur mac, apple",
"Le Wireframe pour le restaurant", 
" Le formulaire de contacts permet à nos clients d'ahouter un contact le modifier ou le supprimer du carnet",
" Happy new funder pour la consultation en communication", 
"Notre page happy funders, Un site pour la vente de montre rolex", 
"ce site a été conçu pour le centre d'anglais oxford à Lubumbashi ", 
"La page d'inscription au Centre d'anglais au Oxford ", 
"Le wireframe du site crundfunder",
"Notre projet à venir très bientot",
"Nouveau projet encours"];


numberElements.forEach((numberElement, index) => {
  numberElement.addEventListener('click', () => {
    const imagePath = imagePaths[index];
    const landingPage = document.querySelector('.project__container img');
    const titleElement = document.querySelector('.project__container .project_title');
    
    landingPage.src = imagePath;
    titleElement.textContent = titles[index];
  });
});


// ==============================================Form================================================================================

document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});
