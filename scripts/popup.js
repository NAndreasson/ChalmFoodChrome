var lunchRetriever = {

  requestDishes: function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:5000/lunch', true);
    req.onload = this.showDishes.bind(this);
    req.send(null);
  },

  showDishes: function (e) {
    var dishesObj = JSON.parse(e.target.responseText);

    for (var restaurantProp in dishesObj) {
      var restaurant = dishesObj[restaurantProp]
        ;

      $('#cartridge').append( Handlebars.templates.restaurant( restaurant ) );

    }
  }

};

document.addEventListener('DOMContentLoaded', function () {
  lunchRetriever.requestDishes();
});

(function() {
  var animationDelay = 350
    , menuWidth = 320
    , nrOfRestaurants = 2
    , currentIndex = 0;

  $('#linsen').on('click', function(e) {
    e.preventDefault();
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
    $('#cartridge').animate({
      left: -menuWidth
    }, animationDelay);


    // resize?

  });

  $('#karen').on('click', function(e) {
    e.preventDefault();
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
    $('#cartridge').animate({
      left: 0
    }, animationDelay);
  });

})();