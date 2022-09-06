function setFormMsg(formElement, type, msg) {
    const msgElement = formElement.querySelector(".form_msg");
    msgElement.textContent = msg;
    msgElement.classList.remove("form_msg_success", "form_msg_error");
    msgElement.classList.add(`form_msg_${type}`);

}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const resetPasswordForm = document.querySelector("#resetPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden")
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden")
    });

    document.querySelector("#forgetPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        resetPasswordForm.classList.remove("form-hidden")
    });

    document.querySelector("#resetPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        resetPasswordForm.classList.add("form-hidden")
    });


    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        //perform your AJAX/Fetch login
        setFormMsg(loginForm, "error", "Invalid username/password");

    })


});