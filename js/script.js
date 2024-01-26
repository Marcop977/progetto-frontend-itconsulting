new Swiper("#swiper-1", {
    effect: "cube",
    autoplay: {
        delay: 2500
    },
    // pagination: {
    //     el: "#swiper-1 .swiper-pagination",
    //     clickable: true
    // }
});

const map = L.map('map').setView([45.4615149,9.1828855], 15);

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleStreets.addTo(map);

let myIcon = L.icon({
    iconUrl: './img/marker.png',
    iconSize: [68, 65]
});

L.marker([45.4615149,9.1828855], { icon: myIcon }).addTo(map);



// 2 swiper
const swiper = new Swiper('#swiper-2', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    virtual: {
      slides: (function () {
        const slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push(`<a href=""><img class="" src="./img/slide2-${(i + 1)}.jpeg" alt=""></a>`);
        }
        return slides;
      })(),
    },
});
  