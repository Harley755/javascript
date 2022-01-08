document
    .getElementById("code")
    .addEventListener("input", function onInput(e) {
        let result = document.getElementById("code-validation");
        let button = document.getElementById("submit-btn");
        if (/^CODE-/.test(e.target.value)) {
            result.innerHTML = "Code valide";
            button.disabled = false;
        } else {
            result.innerHTML = "Code invalide";
            button.disabled = true;
        }
    })