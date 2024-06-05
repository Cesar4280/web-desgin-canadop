const EMPTY_STRING = "";
const CREDENTIALS = Object.freeze({ USERNAME: "ces", PASSWORD: "123" });

const loginForm = document.forms.namedItem("login");
const loginInputs = [...loginForm.elements].toSpliced(2, 1);
const loginButtonLink = loginForm.querySelector("a");
console.log(loginInputs, loginButtonLink);

loginButtonLink.addEventListener("click", handleClickSignIn);

function handleClickSignIn(event) {

    if (loginInputs.some(({ value }) => value.trim() === EMPTY_STRING)) {
        loginInputs.forEach(input => input.value.trim() === EMPTY_STRING &&
            alert(`Complete el campo ${input.id === "username" ? "usuario" : "contraseña"}`)
        );
        event.preventDefault();
    }
    else if (loginInputs.some(input => input.value !== CREDENTIALS[input.id.toUpperCase()])) {
        alert("Nombre de Usuario o Contraseña Incorrectas");
        event.preventDefault();
    }
}