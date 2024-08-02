document.addEventListener('DOMContentLoaded', function() {
    var portfolio = document.getElementById('portfolio');
    var carousel = document.getElementById('portfoliocarousel');
    var carouselItems = carousel.querySelectorAll('.carousel-item img');

    carousel.addEventListener('slide.bs.carousel', function(event) {
      var newIndex = event.to;
      var newImageSrc = carouselItems[newIndex].src;
      portfolio.style.backgroundImage = 'url(' + newImageSrc + ')';
    });

    // Set the initial background image
    portfolio.style.backgroundImage = 'url(' + carouselItems[0].src + ')';
  });