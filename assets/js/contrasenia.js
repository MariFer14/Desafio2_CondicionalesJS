document.getElementById("ingresar").addEventListener("click", function () {
    let seleccion1 = document.getElementById('seleccion1').value;
    let seleccion2 = document.getElementById('seleccion2').value;
    let seleccion3 = document.getElementById('seleccion3').value;
    let result = document.getElementById('password-result');

    if (seleccion1 == '9' && seleccion2 == '1' && seleccion3 == '1') {
        result.innerHTML = "El password 1 ingresado es correcto";
    } else if (seleccion1 == '7' && seleccion2 == '1' && seleccion3 == '4') {
        result.innerHTML = "El password 2 ingresado es correcto";
    } else {
        result.innerHTML = "El password ingresado es incorrecto";
    }
    


});
