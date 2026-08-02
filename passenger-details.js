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

    e.preventDefault();

    const bookingData = {
        seatNumber: document.getElementById("seatNumber").value,
        passengerType: document.getElementById("passengerType").value,
        fullName: document.getElementById("fullName").value,
        nin: document.getElementById("nin").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));

    window.location.href = "confirm-booking.html";

});