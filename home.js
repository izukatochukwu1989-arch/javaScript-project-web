const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});



document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    window.location.href = "dashboard.html";

});
