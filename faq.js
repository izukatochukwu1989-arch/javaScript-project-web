const menuIcon = document.querySelector(".menu-icon");
        const navMenu = document.getElementById("navMenu");

        menuIcon.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });




        const faqs = document.querySelectorAll(".faq-item");

        faqs.forEach(faq => {
            const question = faq.querySelector(".faq-question");

            question.addEventListener("click", () => {

                faqs.forEach(item => {
                    if (item !== faq) {
                        item.classList.remove("active");
                    }
                });

                faq.classList.toggle("active");
            });
        });