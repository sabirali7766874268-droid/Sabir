// ELEMENTS
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

const loginBox = document.getElementById("loginBox");
const container = document.getElementById("mainApp");

// SIDEBAR
menuBtn.onclick = () => {
    sideMenu.style.display = "block";
}

closeBtn.onclick = () => {
    sideMenu.style.display = "none";
}

// THEME (ONLY ONE TIME)
themeToggler.onclick = () => {
    document.body.classList.toggle('dark-theme');
}

// PAGE LOAD LOGIN CHECK
window.onload = function () {
    if (localStorage.getItem("login") === "true") {
        loginBox.style.display = "none";
        container.style.display = "grid"; // ✅ FIXED
    } else {
        loginBox.style.display = "flex";
        container.style.display = "none";
    }
}

// LOGIN
function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user === "sabir" && pass === "1234") {
        localStorage.setItem("login", "true");
        location.reload();
    } else {
        alert("Wrong Username or Password ❌");
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("login");
    location.reload();
}