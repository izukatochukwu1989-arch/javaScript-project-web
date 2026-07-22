const menuIcon = document.querySelector(".menu-icon");
        const navMenu = document.getElementById("navMenu");

        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });