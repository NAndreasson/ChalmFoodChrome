var lunchRetriever = {

  requestDishes: function() {
    $.get('http://localhost:5000/lunch', this.showDishes);
  },

  showDishes: function (data) {
    var restaurants = data
      , $restaurantsNav = $('#restaurants-nav')
      , $cartridge = $('#cartridge')
      ;

    for (var restaurantProp in restaurants) {
      var restaurant = restaurants[restaurantProp]
        ;

      $restaurantsNav.append( Handlebars.templates.restaurantNav( restaurant ) );
      $cartridge.append( Handlebars.templates.restaurant( restaurant ) );
    }
    // Not zen to have this here
    $('restaurant-nav').eq(0).addClass('active');
  }

};

document.addEventListener('DOMContentLoaded', function () {
  lunchRetriever.requestDishes();
});

(function() {
  var $restaurantsNav = $('#restaurants-nav')
    , animationDelay = 350
    , menuWidth = 320
    , activeIndex = 0
    ;

  $restaurantsNav.on('click', 'a', function(e) {
    e.preventDefault();

    var $this = $(this)
      , $thisIndex = $this.parent().index()
      ;

    if ($thisIndex === activeIndex) return;

    $('.restaurant-nav').removeClass('active');
    $this.addClass('active');

    // need to take the current left into consideration
    $('#cartridge').animate({
      left: menuWidth * ($thisIndex > activeIndex ? -1 : 1)
    }, animationDelay);

    activeIndex = $thisIndex;
  });

})();