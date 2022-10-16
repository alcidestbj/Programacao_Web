$("#btn").click(function() {
    $("#ex1").html("<strong>Função html do JQuery</strong>");
});

$("#btn2").click(function() {
    $("#ex1").text("<br>Função text, sem elemento html");
});

$("#btn3").click(function() {
    $("#ex1").append("<br>Função append do JQuery");
});

$("#btn4").click(function() {
    $("#ex1").prepend("Função prepend do JQuery<br>");
});

$("#btn5").click(function() {
    $("#ex1").empty();
});

$("#btn6").click(function() {
    $("#ex1").remove();
});
