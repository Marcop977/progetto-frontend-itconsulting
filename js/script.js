new Swiper("#swiper-1", {
    effect: "fade",
    autoplay: {
        delay: 2500
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    }
});

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }