function popupvaloracion() {
    var elemento = document.getElementById("rango_valoracion").value;
    alert("Has valorado con " + elemento + " puntos");
}

function popupcuenta() {
    var pais = document.getElementById("pais").value;
    var iban = document.getElementById("IBAN").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("DC").value;
    var cuenta = document.getElementById("cuenta").value;

    alert("Le informamos que su cuenta bancaria es: " + pais + iban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta);
}

var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

function popupdia() {
    var x = document.getElementById("fecha");
    let date = new Date(x.value);
    alert("La fecha seleccionada en el elemento de fecha es un: " + diasSemana[date.getDay()])

}