//Haz tú validación en javascript acá
const boton = document.querySelector('.btn-enviar');
const formulario = document.querySelectorAll ('.formcontato__input');
const campo = document.querySelector('.formcontato__textarea');


function downloadPDF(){
    alert("Descargando...")
}


//---------------------------------------------------------

const campoNombre = document.getElementById('formularioNombre')
const campoMail = document.getElementById ('formularioMail')
const campoAsunto = document.getElementById ('formularioAsunto')
const accederBoton = document.querySelector ('#accederbtn')

function validarCampos (){

    if(campoNombre.value != "" && campoMail.value != "" && campoAsunto.value != "") {
        accederBoton.classList.remove('hide-element')
    }
    else{
        accederBoton.classList.add('hide-element')
    }
}


campoNombre.addEventListener("blur", (event) => {
    validarCampos();
});

campoMail.addEventListener("blur", (event) => {
    validarCampos();
});

campoAsunto.addEventListener("blur", (event) => {
    validarCampos();
});