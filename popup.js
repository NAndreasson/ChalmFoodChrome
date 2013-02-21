var lunchRetriever = {

  requestDishes: function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:5000/aa', true);
    req.onload = this.showDishes.bind(this);
    req.send(null);
  },

  showDishes: function (e) {
    var dishesObj = JSON.parse(e.target.responseText);

    // TODO create documentFragment?

    for (var restaurantProp in dishesObj) {
      var restaurant = dishesObj[restaurantProp]
        , title = restaurant.title
        , dishes = restaurant.dishes;

      var menu = document.createElement('div')
        , h2 = document.createElement('h2')
        , titleNode = document.createTextNode(title);

      h2.appendChild(titleNode);
      menu.appendChild(h2);
      menu.classList.add('menu');

      // create the list for all the dishes served in this restaurant
      var dl = document.createElement('dl');

      for (var i = 0; i < dishes.length; i++) {
        var dish = dishes[i];
        // create dt and varl
        var dt = document.createElement('dt')
          , dtTitle = document.createTextNode(dish.title);
        dt.appendChild(dtTitle);

        var dd = document.createElement('dd')
          , ddDesc = document.createTextNode(dish.desc);
        dd.appendChild(ddDesc);

        dl.appendChild(dt);
        dl.appendChild(dd);
      }
      menu.appendChild(dl);
      document.getElementById('cartridge').appendChild(menu);
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