$("button").click(function() {
  let name = document.getElementById('name').value;
  let first = document.getElementById('first').value;
  let birth = document.getElementById('birth').value;
  let work = document.getElementById('work').value;
  let company = document.getElementById('company').value;
  $("h1").html(name +" " +first +", Born " +birth +", currently a " +work +" at " +company +".");
});
