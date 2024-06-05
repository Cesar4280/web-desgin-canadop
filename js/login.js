function root() {

    user = "Cesar4280"; pass = "123";

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email == "" || password == "") {
        
        if (email == "") {
            alert("Complete el campo usuario");
        } 
        if (password == "") {
            alert("Complete el campo contraseña");
        }

    } else {

        if (email === user && password === pass) {
            document.getElementById("enlace").href = "principal.html";
        } else if (email !== user && password !== pass) {
            alert("Nombre de Usuario y Contraseña Incorrectas");
        } else if (password === pass) {
            alert("Nombre de Usuario Incorrecto");
        } else {
            alert("Contraseña Incorrecta");
        }
    }
}