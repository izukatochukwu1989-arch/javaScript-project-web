// ===========================
// TRAIN DATABASE
// ===========================


const trains = [

    {
        from: "LT1",
        to: "IB1",

        trainNo: "MRC101",

        trainName: "MRC Express",

        departure: "08:00 AM",

        arrival: "10:30 AM",

        seats: 120,

        price: 6500
    },

    {
        from: "LT1",
        to: "IB2",

        trainNo: "MRC102",

        trainName: "MRC Premium",

        departure: "10:00 AM",

        arrival: "12:30 PM",

        seats: 90,

        price: 7000
    },

    {
        from: "LT2",
        to: "IB1",

        trainNo: "MRC103",

        trainName: "MRC Comfort",

        departure: "01:00 PM",

        arrival: "03:30 PM",

        seats: 100,

        price: 6000
    },

    {
        from: "LT2",
        to: "IB2",

        trainNo: "MRC104",

        trainName: "MRC Business",

        departure: "04:00 PM",

        arrival: "06:30 PM",

        seats: 110,

        price: 6800
    }

];



// ===========================
// READ USER SELECTION
// ===========================

const from = localStorage.getItem("from");
const to = localStorage.getItem("to");
const date = localStorage.getItem("date");

// ===========================
// TERMINAL NAMES
// ===========================

const terminalNames = {

    LT1: "Terminal 1 (Lagos)",

    LT2: "Terminal 2 (Lagos)",

    IB1: "Terminal 1 (Ibadan)",

    IB2: "Terminal 2 (Ibadan)"

};

// ===========================
// SHOW JOURNEY SUMMARY
// ===========================

document.getElementById("departureTerminal").textContent =
    terminalNames[from];

document.getElementById("destinationTerminal").textContent =
    terminalNames[to];

document.getElementById("travelDateText").textContent = date;

// ===========================
// FILTER TRAINS
// ===========================

const available = trains.filter(train =>
    train.from === from &&
    train.to === to
);

document.getElementById("trainCount").textContent =
    available.length;

// ===========================
// DISPLAY TRAINS
// ===========================

const container = document.getElementById("trainContainer");

if (available.length === 0) {

    container.innerHTML = `
        <div class="train-card">

            <div class="train-header">
                <h2>No Train Available</h2>
            </div>

            <div style="padding:40px;text-align:center;">
                Sorry, there are no trains for this route.
            </div>

        </div>
    `;

} else {

    available.forEach(train => {

        container.innerHTML += `

<div class="ticket-class">

<h3>Standard Class</h3>

<p>

<span>Adult Fare</span>

<strong>₦${train.price.toLocaleString()}</strong>

</p>

<p>

<span>Child Fare</span>

<strong>₦${Math.round(train.price * 0.5).toLocaleString()}</strong>

</p>

<p>

<span>Seats Available</span>

<strong>${train.seats}</strong>

</p>

<button
class="book-btn"
data-train="${train.trainNo}"
data-class="Standard Class">

Book Now

</button>

</div>

`;

    });

}

// ===========================
// BOOK BUTTON
// ===========================

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("book-btn")) {

        localStorage.setItem("selectedTrain", e.target.dataset.train);

        localStorage.setItem("selectedClass", e.target.dataset.class);

        window.location.href = "passenger-details.html";

    }

});