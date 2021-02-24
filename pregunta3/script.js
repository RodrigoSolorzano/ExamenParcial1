function sumarNumeros() {
    var N1, N2, suma, text;

    Numero1 = document.getElementById("Num1").value;
    Numero2 = document.getElementById("Num2").value;

    if (isNaN(Numero1) || isNaN(Numero2)) {

    } else {
        //si no ponemos parseFloat concatenaría x con y  
        suma = parseFloat(Numero1) + parseFloat(Numero2);
        text = suma;
    }

    var fila = "<tr><td>" + numero1 + "</td><td>" + numero2 + "</td><td>" + text + "</td></tr>" + "</td><td>" + 1 + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    return document.getElementById("tablita").appendChild(btn);

}
