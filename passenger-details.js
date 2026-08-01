// ================================
// Generate Seat Numbers (1 - 4)
// ================================

const seatNumber = document.getElementById("seatNumber");

for (let i = 1; i <= 4; i++) {

    const option = document.createElement("option");

    option.value = i;
    option.textContent = `${i}`;

    seatNumber.appendChild(option);

}



const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});



const passengerForm = document.getElementById("passengerForm");

passengerForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal form submission

    // You can save the passenger details here later

    window.location.href = "confirm-booking.html";
});