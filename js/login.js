function root() {

    const CREDENTIALS = { USERNAME: "Cesar4280", PASSWORD: "WebDesign2020" };

    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username || password) {
        if (!username) alert("Complete el campo usuario");
        if (!password) alert("Complete el campo contraseña");
    } else {
        if (username === CREDENTIALS.USERNAME && password === CREDENTIALS.PASSWORD)
            document.getElementById("enlace").href = "./principal.html";
        else
            alert("Nombre de Usuario o Contraseña Incorrecta");
    }
}