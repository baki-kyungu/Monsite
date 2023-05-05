const contactLink = document.querySelector(".button");
const contactSection = document.querySelector("#contact");

contactLink.addEventListener("click", function () {
  if (
    contact.style.visibility === "hidden" &&
    contact.style.display === "none"
  ) {
    contact.style.visibility = "visible";
    contact.style.display = "flex";
  } else {
    contact.style.visibility = "hidden";
    contact.style.display = "none";
  }
});
// ==============================================Ajout d'un évenement sur le numéro de bouton================================================================================

const numberElements = document.querySelectorAll(".next .number");
const imagePaths = [
  "image/image1.png",
  "image/image2.png",
  "image/image3.png",
  "image/image4.png",
  "image/image5.png",
  "image/image6.png",
  "image/image7.png",
  "image/image8.png",
  "image/image9.png",
  "image/image10.png",
];
const titles = [
  "Une landing page joue un role très important dans le cadre d'une campagne marketing Elle sert donc à informer les internautes sur un aspect précis votre  entreprise et à les inciter à effectuer une manipulation spécifique",
  "Nous sommes en train de réaliser notre site d'apprentissage en ligne de la langue anglaise",
  "Le Wireframe pour le restaurant",
  " Le formulaire de contacts permet à nos clients d'ahouter un contact le modifier ou le supprimer du carnet",
  " Happy new funder pour la consultation en communication",
  "Notre page happy funders, Un site pour la vente de montre rolex",
  "ce site a été conçu pour le centre d'anglais oxford à Lubumbashi ",
  "La page d'inscription au Centre d'anglais au Oxford ",
  "Le wireframe du site crundfunder",
  "Notre projet à venir très bientot",
  "Nouveau projet encours",
];

numberElements.forEach((numberElement, index) => {
  numberElement.addEventListener("click", () => {
    const imagePath = imagePaths[index];
    const landingPage = document.querySelector(".project__container img");
    const titleElement = document.querySelector(
      ".project__container .project_title"
    );

    landingPage.src = imagePath;
    titleElement.textContent = titles[index];
  });
});

// ==============================================Form================================================================================

document.getElementById("form").addEventListener("click", function (event) {
  event.preventDefault();
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  sendMail();
});

function sendMail() {
  const parameters = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#mail").value,
    phone: document.querySelector("#phone").value,
    site: document.querySelector("#site").value,
    message: document.querySelector("#msg").value,
  };
  const serviceID = "i85zlC88Uk9rvSmkD";
  const templateID = "template_m0pf8v8";

  emailjs.send(serviceID, templateID, parameters).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

let texte = document.getElementsByClassName("home__subtitle")[0].innerText;
let nouveauTexte = "";
let index = texte.length - 1;
let sens = "inverse";

function supprimerCaractere() {
  if (index >= 0 && sens === "inverse") {
    nouveauTexte = texte.substring(0, index);
    index--;
  } else if (index === -1 && sens === "inverse") {
    sens = "normal";
    index = 0;
  } else if (index < texte.length && sens === "normal") {
    nouveauTexte = texte.substring(0, index + 1);
    index++;
  } else if (index === texte.length && sens === "normal") {
    sens = "inverse";
    index = texte.length - 1;
  }
  document.getElementsByClassName("home__subtitle")[0].innerText = nouveauTexte;
}

let intervalId = setInterval(supprimerCaractere, 120);

const downloadBtn = document.getElementById("btn");
downloadBtn.addEventListener("click", function () {
  const link = document.createElement("a");
  link.setAttribute("download", "bakiResume.pdf");
  link.setAttribute("href", "src/bakiResume.pdf");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// ==============================================skl=======================================================
const sklDiv = document.querySelector(".skl");
const sklDivs = sklDiv.querySelectorAll("div");

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "gray",
  "pink",
  "brown",
  "teal",
  "black",
  "navy",
  "olive",
  "maroon",
  "lime",
  "fuchsia",
];

sklDivs.forEach((div, index) => {
  div.classList.add(`skl-${index + 1}`);
  div.style.backgroundColor = colors[index % colors.length];
});
