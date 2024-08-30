

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("#login");
    const registerButton = document.querySelector("#register");

    loginButton.addEventListener("click", function () {
        const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
        loginModal.show();
    });

    registerButton.addEventListener("click", function () {
        const registerModal = new bootstrap.Modal(document.getElementById("registerModal"));
        registerModal.show();
    });
});