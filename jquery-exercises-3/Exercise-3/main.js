let gnumber = 1 + Math.floor(Math.random() * 100);

$("button").click(function() {
  let number = 1 + Math.floor(Math.random() * 100);
  if (number === gnumber) {
      $("input").val("Right");
  } else if (number > gnumber) {
    $("input").val("Less");
  } else {
    $("input").val("More");
  };
});
