Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });

  let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let latestNewsSwiper = new Swiper(".myNewsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.6686, lng: -73.8999},
      zoom: 13.5,
      mapId: '2f084b4895741534',
    });

    const marker = new google.maps.Marker({
      position: { lat: 40.6781, lng: -73.8981},
      map: map,
      title: 'Monticello',
      icon: {
        url: 'https://i.postimg.cc/30jd33nS/Pin.png',
        scaledSize: new google.maps.Size(100, 100),
      },
    });
  }

  window.initMap = initMap;