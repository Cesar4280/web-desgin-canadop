// CONSTANTS
const CREDENTIALS = Object.freeze({ USERNAME: "Cesar4280", PASSWORD: "WebDesign2020" });
// DOM Elements
const loginForm = document.forms.namedItem("login");
const loginInputs = [...loginForm.elements].slice(0, 2);
const loginButtonLink = loginForm.querySelector("a");
console.log(loginInputs, loginButtonLink);
// UTILS
const isBlankOrEmptyText = ({ value }) => !value.trim(); // "" => true o "xxx" => false
const showInputErrorMessage = ({ id }) => alert(`Complete el campo ${id === "username" ? "usuario" : "contraseña"}`);
const isFailedCredential = input => input.value !== CREDENTIALS[input.id.toUpperCase()];
const reportInvalidFields = inputs => inputs.forEach(input => isBlankOrEmptyText(input) && showInputErrorMessage(input));
// EVENT HANDLERS
const handleClickSignIn = event => checkLoginForm(loginInputs) || event.preventDefault();
// LISTEN EVENTS
loginButtonLink.addEventListener("click", handleClickSignIn);
// VALIDATION FUNCTION
function checkLoginForm(inputs) {
    let canNavigate = true;
    if (inputs.some(isBlankOrEmptyText)) {
        reportInvalidFields(inputs);
        canNavigate = false;
    } else if (inputs.some(isFailedCredential)) {
        alert("Nombre de Usuario o Contraseña Incorrectas");
        canNavigate = false;
    }
    return canNavigate;
}