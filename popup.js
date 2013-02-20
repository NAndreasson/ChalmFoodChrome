var lunchRetriever = {

  requestDishes: function() {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:5000/aa', true);
    req.onload = this.showDishes.bind(this);
    req.send(null);
  },

  showDishes: function (e) {
    var dishesObj = JSON.parse(e.target.responseText);

    // create documentFragment

    for (var restaurantProp in dishesObj) {
      var restaurant = dishesObj[restaurantProp]
        , title = restaurant.title
        , dishes = restaurant.dishes;

      var menu = 
            $('<div></div>').addClass('menu')
              .append('<header></header>').append('<h2></h2>').text(title);

      // append the dishes as well        

      $('#cartridge').append(menu);
    }

      // var header = document.createElement('header')
      //   , h2 = document.createElement
      // var list = document.createElement('ul');

      // // create new menu
      // // get title as the header and such

      // for (var i = 0; i < dishes.length; i++) {
      //   var dish = dishes[i];
      //   var listItem = document.createElement('li')
      //     , listData = document.createTextNode(dish.title + ' ' + dish.desc);
      //     listItem.appendChild(listData);
      //     list.appendChild(listItem);
      // }

      // document.body.appendChild(list);
      // console.log('restaurant', restaurant);
    }

};

document.addEventListener('DOMContentLoaded', function () {
  lunchRetriever.requestDishes();
});

(function() {
  var animationDelay = 350
    , menuWidth = 300
    , nrOfRestaurants = 2
    , currentIndex = 0;

  $('#linsen').on('click', function(e) {
    e.preventDefault();
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
    $('#cartridge').animate({
      left: -menuWidth
    }, animationDelay);
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