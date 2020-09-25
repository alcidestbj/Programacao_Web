let somaValores = (valor1, valor2) => {
    return valor1 + valor2;
}

$(function() {
    $("#somar").click(function() {
        var n1, n2;
        n1 = Number($("#valor1").val());
        n2 = Number($("#valor2").val());
        $("#resul").html(`Resultado: ${somaValores(n1, n2)}`);
    })
})
