const booking = JSON.parse(localStorage.getItem("bookingData"));
const train = JSON.parse(localStorage.getItem("selectedTrain"));

if (!booking || !train) {
    alert("Booking information not found.");
    window.location.href = "dashboard.html";
}

const terminalNames = {
    LT1: "Terminal 1 (Lagos)",
    LT2: "Terminal 2 (Lagos)",
    IB1: "Terminal 1 (Ibadan)",
    IB2: "Terminal 2 (Ibadan)"
};

document.getElementById("fullName").textContent = booking.fullName;
document.getElementById("email").textContent = booking.email;
document.getElementById("passengerType").textContent = booking.passengerType;
document.getElementById("seatNumber").textContent = booking.seatNumber;


document.getElementById("travelDate").textContent = train.date;
document.getElementById("trainName").textContent = train.trainName;

document.getElementById("departure").textContent =
    terminalNames[train.from];

document.getElementById("arrival").textContent =
    terminalNames[train.to];


document.getElementById("amount").textContent =
    "₦" + Number(train.price).toLocaleString();

document.getElementById("payBtn").addEventListener("click", payNow);

function payNow() {

    let handler = PaystackPop.setup({

        key: "pk_test_94683c5d49beff1fcf866a6bc3be04f573deb9c9",

        email: booking.email,

        amount: train.price * 100,

        currency: "NGN",

        ref: "MRC" + Date.now(),

        callback: function(response) {

            alert("Payment Successful!");

            localStorage.setItem("paymentReference", response.reference);

            window.location.href = "ticket.html";

        },

        onClose: function() {

            alert("Transaction cancelled");

        }

    });

    handler.openIframe();
}