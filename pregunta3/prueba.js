function guardar() {

    var _nom = document.getElementById("nom").value;
    var _ape = document.getElementById("ape").value;
    var _ced = document.getElementById("ced").value;

    var fila = "<tr><td>" + _nom + "</td><td>" + _ape + "</td><td>" + _ced + "</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML = fila;
    document.getElementById("tablita").appendChild(btn);
}


Nombre: <input id="nom" style="margin:10px" type="text"><br><br>
    Apellido:<input id="ape" style="margin:4px" type="text"><br><br>
        Cedula: <input id="ced" style="margin:20px" type="text"><br><br>
            <button id="btn_guardar" onclick="guardar()">Guardar</button><br><br>

                <table >
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cedula</th>
                        </tr>
                    </thead>
                    <tbody id="tablita">

                    </tbody>
                </table>