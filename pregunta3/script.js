function sumarNumeros() {
    var Numero1 = document.getElementById("Num1").value;
    var Numero2 = document.getElementById("Num2").value;

    if (isNaN(Numero1) || isNaN(Numero2)) {

    } else {
        //si no ponemos parseFloat concatenaría x con y  
        var suma = parseFloat(Numero1) + parseFloat(Numero2);
    }

    if (suma < 10) {
        var status = "10-"
    } else if (suma === 10) {
        var status = "10="
    } else if (suma > 10) {
        var status = "10+"
    }

    document.getElementById("tabla").insertRow(-1).innerHTML = '<tr><td>' + Numero1 + '<tr><td>' + Numero2 + '<tr><td>' + suma + '<tr><td>' + status + '<tr><td>'
}

function Total() {


}