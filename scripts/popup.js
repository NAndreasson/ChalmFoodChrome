(function() {
  var lunchRetriever = {

    requestDishes: function() {
      var campus = localStorage['campus'] || 'johanneberg';

      $.get('http://localhost:5000/' + campus, this.showDishes);
    },

    showDishes: function (data) {
      var restaurants = data
        , $restaurantsNav = $('#restaurants-nav')
        , $cartridge = $('#cartridge')
        ;

      restaurants.forEach(function(restaurant) {
        $restaurantsNav.append( Handlebars.templates.restaurantNav( restaurant ) );
        $cartridge.append( Handlebars.templates.restaurant( restaurant ) );
      });

      // Not zen to have this here
      $('.restaurant-nav').eq(0).addClass('active');
    }

  };

  lunchRetriever.requestDishes();

  var $restaurantsNav = $('#restaurants-nav')
    , $cartridge = $('#cartridge')
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

    var cartridgeLeftPos = $cartridge.css('left');
    if ( cartridgeLeftPos === 'auto' ) cartridgeLeftPos = 0;


    var newLeft = parseInt(cartridgeLeftPos, 10) + menuWidth * ($thisIndex > activeIndex ? -1 : 1) + 'px';
    // need to take the current left into consideration
    $cartridge.animate({
      left: newLeft
    }, animationDelay);

    activeIndex = $thisIndex;
  });

})();