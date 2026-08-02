const train = JSON.parse(localStorage.getItem("selectedTrain"));
const passenger = JSON.parse(localStorage.getItem("bookingData"));


document.getElementById("seatNumber").textContent = passenger.seatNumber;
document.getElementById("passengerType").textContent = passenger.passengerType;
document.getElementById("fullName").textContent = passenger.fullName;
document.getElementById("nin").textContent = passenger.nin;
document.getElementById("email").textContent = passenger.email;
document.getElementById("phone").textContent = passenger.phone;

document.getElementById("fromStation").textContent = train.from;
document.getElementById("toStation").textContent = train.to;
document.getElementById("travelDate").textContent = train.date;
document.getElementById("departureTime").textContent = train.departure;
document.getElementById("arrivalTime").textContent = train.arrival;
document.getElementById("trainName").textContent = train.trainName;
document.getElementById("coach").textContent = train.coach;

document.getElementById("ticketPrice").textContent = "₦6,500";
document.getElementById("vat").textContent = "₦325";
document.getElementById("serviceCharge").textContent = "₦175";
document.getElementById("totalFare").textContent = "₦7,000";



const paymentBtn = document.getElementById("paymentBtn");

paymentBtn.addEventListener("click", () => {

    if (!document.getElementById("agree").checked) {

        alert("Please confirm your booking details.");

        return;
    }

    window.location.href = "payment.html";

});



const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});