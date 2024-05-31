//EN ESTA PRIMERA PARTE, LE DIGO QUE ESCUCHE HASTA CARGARSE EL DOM, LUEGO LE PIDO, A TRAVES DE LA FUNCION FLECHA, QUE ME TRAIGA EL ELEMENTO DE ID=LOGINFORM Y QUE SIGA ESCUCHANDO A LA ESPERA DE QUE ALGUIEN LE DE ENVIAR A TRAVES DE SUBMIT.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login").addEventListener("submit", (event) => {
        event.preventDefault();//NO LO ENVIES AUTOMATICAMENTE, POR ESO NO SE USA EL ATRIBUTO ACTION EN LOS FORMULARIOS
        validarCampos();//FINALMENTE EJECUTAR LA FUNCION validarCampos
    });
//OPERACION DEL TAB PARA EL AVANCE POR LOS CAMPOS COMPLETADOS CADA VEZ
    document.querySelectorAll(".form-control").forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Tab" || event.key === "Enter") {
                event.preventDefault();
                validarCampos();
            }
        });
    });
});
//LLAMAR CON UNA FUNCION LOS ELEMENTOS DEL FORMULARIO A COMPLETAR
const validarCampos = () => {
    resetErrorMessages();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;

    
//VERIFICACION DE DATOS INGRESADOS EN EL CAMPO DE EMAIL
    if (!isValidEmail(email)) {
        displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("email").classList.add("is-valid");
    }
//VERIFICACION DE DATOS INGRESADOS EL CAMPO DE CONTRASEÑA
    if (password.length < 8) {
        displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
        document.getElementById("password").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
        
    }
//SI TODO ESTA OK, DEVUELVE:
    if (isValid) {
        alert("¡Formulario enviado correctamente!");
    }
};
//CONFORMACION DE UN EMAIL (ALGO@ALGO.COM)
const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
//SI EL EMAIL NO ES CORRECTO, ARROJA ERROR
const displayErrorMessage = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
};

const resetErrorMessages = () => {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
};