// Saves options to localStorage.
function save_options() {
  var radios = document.getElementsByName('campus');

  for ( var i = 0; i < radios.length; i++ ) {
    var radio = radios[i];

    if ( radio.checked ) {
      localStorage['campus'] = radio.value;

      break;
    }
  }

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var campus = localStorage['campus']
    , radios = document.getElementsByName('campus')
    ;

  for ( var i = 0; i < radios.length; i++ ) {
    var radio = radios[i];

    if ( radio.value === campus ) {
      radio.checked = true;
      return;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options)