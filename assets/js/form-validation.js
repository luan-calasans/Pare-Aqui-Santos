const registerForm = document.getElementById("register-form");
const nomeInput = document.getElementsByName("nome")[0];
const passwordInputs = document.getElementsByName("password");

registerForm.addEventListener("submit", function (event) {
    if (!validateName(nomeInput.value)) {
        alert("Por favor, insira um nome válido.");
        event.preventDefault();
    } else if (passwordInputs[0].value !== passwordInputs[1].value) {
        alert("As senhas não correspondem.");
        event.preventDefault();
    }
});

function validateName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;
    return nameRegex.test(name);
}
