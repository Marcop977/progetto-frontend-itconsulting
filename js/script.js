// primo swiper
new Swiper("#swiper-1", {
  // autoplay: {
  //   delay: 4000,
  // },
  loop: true,
});

//mappa
const map = L.map("map").setView([45.4615149, 9.1828855], 15);

googleStreets = L.tileLayer(
  "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);
googleStreets.addTo(map);

let myIcon = L.icon({
  iconUrl: "./img/marker.png",
  iconSize: [68, 65],
});

L.marker([45.4615149, 9.1828855], { icon: myIcon }).addTo(map);

// secondo swiper
new Swiper("#swiper-2", {
  slidesPerView: 6,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 4700,
  // },
  loop: true,
});

// countdown
let countDownDate = new Date("5 Feb, 2024 00:00:00").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}, 1000);

let countDownDate2 = new Date("10 Feb, 2024 23:30:20").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate2 - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days2").innerHTML = days;
  document.querySelector("#hours2").innerHTML = hours;
  document.querySelector("#minutes2").innerHTML = minutes;
  document.querySelector("#seconds2").innerHTML = seconds;
}, 1000);

let countDownDate3 = new Date("7 Feb, 2024 16:40:35").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate3 - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days3").innerHTML = days;
  document.querySelector("#hours3").innerHTML = hours;
  document.querySelector("#minutes3").innerHTML = minutes;
  document.querySelector("#seconds3").innerHTML = seconds;
}, 1000);

// bordo colorato
const coloredBorder = document.querySelectorAll(".colored-border");

coloredBorder.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("border-success");
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("border-success");
  });
});

// overlay sconti
const scuro = document.querySelectorAll(".scuro");

scuro.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("overlay");
    element.style.cursor = "pointer";
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("overlay");
    element.style.cursor = "auto";
  });
});

// button add
const btnAdd = document.querySelectorAll("#btn-add");

let i = 1;
btnAdd.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    document.querySelector("#icon-add").style.display = "block";
    document.querySelector("#icon-add").textContent = i;
    i++;
  });
});

// icon heart
document.querySelectorAll(".card-favorite").forEach((card) => {
  card.addEventListener("mouseover", function (event) {
    event.currentTarget.querySelector("#icon-heart").style.display = "block";
  });
});

document.querySelectorAll(".card-favorite").forEach((card) => {
  card.addEventListener("mouseout", function (event) {
    event.currentTarget.querySelector("#icon-heart").style.display = "none";
  });
});

document.querySelectorAll("#icon-heart").forEach((icon) => {
  icon.addEventListener("mouseover", function (event) {
    event.currentTarget.className = "bi bi-heart-fill fs-4 position-absolute";
  });

  icon.addEventListener("mouseout", function (event) {
    event.currentTarget.className = "bi bi-heart fs-4 position-absolute";
  });
});

let j = 1;
document.querySelectorAll("#icon-heart").forEach((icon) => {
  icon.addEventListener("click", function () {
    document.querySelector("#icon-favorite").style.display = "block";
    document.querySelector("#icon-favorite").textContent = j;
    j++;
  });
});

document.querySelectorAll(".card-favorite").forEach((card) => {
  card.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// login
document.getElementById("login").addEventListener("click", verifyAccount);

function verifyAccount(e) {
  const email = document.querySelector("#modal-email");
  const password = document.querySelector("#modal-password");

  const user = JSON.parse(localStorage.getItem("utenteRegistrato"));

  if (email.value == user.email && password.value == user.password) {
    document.querySelector("#alertLogin").style.display = "block";
    setTimeout(() => {
      document.querySelector("#alertLogin").style.display = "none";
    }, 3000);
  } else {
    document.querySelector("#alertError").style.display = "block";
    setTimeout(() => {
      document.querySelector("#alertError").style.display = "none";
    }, 3000);
    e.stopPropagation();
  }
}

const userPassword = document.querySelector("#modal-password");
const hiddenEye = document.querySelector("#hiddenEye");

hiddenEye.addEventListener("click", function (event) {
  event.stopPropagation();
  const type =
    userPassword.getAttribute("type") === "password" ? "text" : "password";
  hiddenEye.classList.toggle("bi-eye");
  userPassword.setAttribute("type", type);
});

document.getElementById("login").addEventListener("click", function (e) {
  const modalEmail = document.querySelector("#modal-email");
  const modalPassword = document.querySelector("#modal-password");

  if (modalEmail.value == "" || modalPassword.value == "") {
    document.querySelector("#campiFeedback").style.display = "block";
    document.querySelector("#campiFeedback").textContent =
      "Compila tutti i campi";
    e.preventDefault();
    e.stopPropagation();
  }
});
