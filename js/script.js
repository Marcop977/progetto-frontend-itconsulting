new Swiper("#swiper-1", {
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const map = L.map("map").setView([45.4615149, 9.1828855], 15);

const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

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

// 2 swiper
// const swiper = new Swiper('#swiper-2', {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     virtual: {
//       slides: (function () {
//         const slides = [];
//         for (var i = 0; i < 600; i += 1) {
//           slides.push(`<a href=""><img class="" src="./img/slide2-${(i + 1)}.jpeg" alt=""></a>`);
//         }
//         return slides;
//       })(),
//     },
// });
new Swiper("#swiper-2", {
  slidesPerView: 6,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4700,
  },
  loop: true,
});

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

let countDownDate2 = new Date("6 Feb, 2024 00:00:00").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days2").innerHTML = days;
  document.querySelector("#hours2").innerHTML = hours;
  document.querySelector("#minutes2").innerHTML = minutes;
  document.querySelector("#seconds2").innerHTML = seconds;
}, 1000);

let countDownDate3 = new Date("7 Feb, 2024 00:00:00").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days3").innerHTML = days;
  document.querySelector("#hours3").innerHTML = hours;
  document.querySelector("#minutes3").innerHTML = minutes;
  document.querySelector("#seconds3").innerHTML = seconds;
}, 1000);

const bordoColorato = document.querySelectorAll(".bordo-colorato");

bordoColorato.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("border-success");
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("border-success");
  });
});

const bordoColorato2 = document.querySelectorAll(".bordo-colorato2");

bordoColorato2.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("border-success");
    element.classList.add("overlay");
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("border-success");
    element.classList.remove("overlay");
  });
});
