/* ==========================================
   NOSTRA BOOKS
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // MOBILE MENU
    // ===============================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // Close menu after clicking a link
        document.querySelectorAll("#navLinks a").forEach(link => {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });

        });

    }

    // ===============================
    // SEARCH BOOKS
    // ===============================

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        const bookCards = document.querySelectorAll(".book-card");
        const noResults = document.getElementById("noResults");

        searchInput.addEventListener("keyup", function () {

            const search = this.value.toLowerCase();

            let found = false;

            bookCards.forEach(card => {

                const text = card.innerText.toLowerCase();

                if (text.includes(search)) {

                    card.style.display = "block";
                    found = true;

                } else {

                    card.style.display = "none";

                }

            });

            if (noResults) {

                noResults.style.display = found ? "none" : "block";

            }

        });

    }

});
