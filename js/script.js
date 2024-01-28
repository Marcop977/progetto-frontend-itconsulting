new Swiper("#swiper-1", {
  // autoplay: {
  //   delay: 2500,
  // },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
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
  // autoplay: {
  //   delay: 2900,
  // },
  loop: true,
});

let countDownDate = new Date("5 Feb, 2024 00:00:00").getTime();
let x = setInterval(function () {
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

const bordoColorato = document.querySelectorAll(".bordo-colorato");

bordoColorato.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.classList.add("border-success");
  });
  element.addEventListener("mouseout", function () {
    element.classList.remove("border-success");
  });
});
