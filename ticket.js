// ==========================
// LOAD SAVED DATA
// ==========================

const booking = JSON.parse(localStorage.getItem("bookingData"));
const train = JSON.parse(localStorage.getItem("selectedTrain"));
const ticket = JSON.parse(localStorage.getItem("ticketData"));

if (!booking || !train || !ticket) {
    alert("No ticket found.");
    window.location.href = "dashboard.html";
}

// ==========================
// TERMINAL NAMES
// ==========================

const terminalNames = {
    LT1: "Terminal 1 (Lagos)",
    LT2: "Terminal 2 (Lagos)",
    IB1: "Terminal 1 (Ibadan)",
    IB2: "Terminal 2 (Ibadan)"
};

// ==========================
// BOOKING DETAILS
// ==========================

document.getElementById("bookingId").textContent = ticket.bookingId;
document.getElementById("ticketNumber").textContent = ticket.ticketNumber;

// ==========================
// PASSENGER INFORMATION
// ==========================

document.getElementById("fullName").textContent = booking.fullName;
document.getElementById("passengerType").textContent = booking.passengerType;
document.getElementById("seatNumber").textContent = booking.seatNumber;

// ==========================
// JOURNEY INFORMATION
// ==========================

document.getElementById("from").textContent =
    terminalNames[train.from];

document.getElementById("to").textContent =
    terminalNames[train.to];

document.getElementById("travelDate").textContent =
    train.date;

document.getElementById("departureTime").textContent =
    train.departure;

document.getElementById("arrivalTime").textContent =
    train.arrival;

document.getElementById("trainNo").textContent =
    train.trainNo;

document.getElementById("trainName").textContent =
    train.trainName;

document.getElementById("coach").textContent =
    train.coach;

document.getElementById("seatNumber").textContent =
    booking.seatNumber;

// ==========================
// PAYMENT INFORMATION
// ==========================

document.getElementById("amountPaid").textContent =
    "₦" + Number(train.price).toLocaleString();

document.getElementById("paymentReference").textContent =
    ticket.paymentReference;

document.getElementById("paymentStatus").textContent =
    ticket.paymentStatus;

// ==========================
// PRINT BUTTON
// ==========================

document.getElementById("printTicket").addEventListener("click", () => {
    window.print();
});

// ==========================
// DOWNLOAD BUTTON
// ==========================

document.getElementById("downloadTicket").addEventListener("click", () => {
    window.print();
});