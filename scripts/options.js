// Saves options to localStorage.
function saveOption(el) {
  var $this = $(this)
    , campus = $this.data('campus')
    ;

  localStorage['campus'] = campus;

  $('.campus').removeClass('active');
  $this.addClass('active');
}

// Restores select box state to saved value from localStorage.
function restoreOptions() {
  var campus = localStorage['campus']
    , $campusEls = $('.campus')
    ;

  $campusEls.each(function(index) {
    var $this = $(this);

    if ( $this.data('campus') === campus) {
      $this.addClass('active')
      return;
    }
  });

}
document.addEventListener('DOMContentLoaded', restoreOptions);

$('.campus').on('click', saveOption);

