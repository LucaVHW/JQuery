let count = 0;

$("#plus").click(function() {
    count++;
    $("input").val(count);
});
$("#minus").click(function() {
    count--;
    $("input").val(count);
});
