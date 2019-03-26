let i = 50;

$("#one").click(function() {
  if (i !== 100) {
    $(".rectangle").css('width', '+=10').css('height', '+=10');
    i+=10;
  } else {
    $(".rectangle").css("width", "50px").css("height", "30px");
  }
});
$("#two").click(function() {
  $(".rectangle").css("background-color", "green");
});
$("#three").click(function() {
  $(".rectangle").css("background-color", "lightgrey");
});
$("#four").click(function() {
  $(".rectangle").hide();
});
$("#five").click(function() {
  $(".rectangle").show();
});
