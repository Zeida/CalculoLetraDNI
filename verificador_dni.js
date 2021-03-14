//no me funciona si en lugar de () pongo []
var letrasDNI = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E');
var patronletra = /[A-Za-z]{1}/i;

function validar_dni() {
  var numerodni = document.getElementById("dninumero").value;
  var letradni = document.getElementById("dniletra").value;
  const divinfo = document.querySelector(".info");
  const divletra = document.querySelector(".letra");
  document.getElementById("formulariodni").reset();
  divletra.innerHTML = "&nbsp;";
  divinfo.innerHTML = "&nbsp;";

  if (numerodni.length != 8 || isNaN(numerodni)) {
    alert("Debe introducir 8 números");
    document.getElementById("formulariodni").reset();
  }

  if (letradni.length != 1 || !patronletra.test(letradni)) {
    alert("Debe introducir la letra de su DNI");
    document.getElementById("formulariodni").reset();
  }

  if (!isNaN(numerodni) && patronletra.test(letradni)) {
    letradni = letradni.toUpperCase();
    var resto = numerodni % 23;
    if (letradni == letrasDNI[resto]) {
      alert("La letra de su DNI se corresponde con el número");
      divletra.innerHTML = "<h1> La letra correcta es: " + letrasDNI[resto]; + "</h1>";
      divinfo.innerHTML = "<h3 style='color: green;'><strong>La letra ("+ letradni +") de su DNI se corresponde con el número ("+ numerodni +").</strong></h3>";

    } else {
      alert("La letra de su DNI no se corresponde con el número");
      divletra.innerHTML = "<h1> La letra correcta es: " + letrasDNI[resto]; + "</h1>";
      divinfo.innerHTML = "<h3 style='color: red;'><strong>La letra ("+ letradni +") de su DNI no se corresponde con el número ("+ numerodni +").</strong></h3>";

    }

  }
}
