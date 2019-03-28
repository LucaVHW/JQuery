$("#fnamebutton").on("click", function() {
  if ( $("#fname").val().match('^[a-zA-Z]{3,16}$') ) {
      alert( "Valid name" );
  } else {
      alert("Invalid name");
  }
});

$("#namebutton").on("click", function() {
  if ( $("#name").val().match('^[a-zA-Z]{3,16}$') ) {
      alert( "Valid name" );
  } else {
      alert("Invalid name");
  }
});


$("#phone").on("keypress keyup blur", function (event) {
  $(this).val($(this).val().replace(/[^\d].+/, ""));
  if ((event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});


$(document).ready(function (e) {
  $('#emailbutton').click(function () {
    var sEmail = $('#email').val();
    if ($.trim(sEmail).length == 0) {
      alert('Please enter valid email address');
      e.preventDefault();
    }
    if (validateEmail(sEmail)) {
      alert('Email is valid');
    }
    else {
      alert('Invalid Email Address');
      e.preventDefault();
    }
  });
});

function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}
