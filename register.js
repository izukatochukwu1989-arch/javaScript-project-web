const menuIcon = document.getElementById("menuIcon");
        const navMenu = document.getElementById("navMenu");

        menuIcon.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });


        function togglePassword(id, icon) {

            const input = document.getElementById(id);

            if (input.type === "password") {

                input.type = "text";
                icon.textContent = "visibility_on";

            } else {

                input.type = "password";
                icon.textContent = "visibility";

            }

        }


        document.getElementById("registerForm").addEventListener("submit", function (e) {

            e.preventDefault();

            let password = document.getElementById("password").value;

            let confirm = document.getElementById("confirmPassword").value;

            if (password !== confirm) {

                alert("Passwords do not match!");

                return;

            }

            alert("Registration Successful!");

            window.location.href = "home.html";

        });