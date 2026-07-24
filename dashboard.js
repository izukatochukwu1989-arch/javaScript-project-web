// ==========================
// BOOKING FORM
// ==========================

const fromStation = document.getElementById("fromStation");

const toStation = document.getElementById("toStation");

const travelDate = document.getElementById("travelDate");

const findTrainBtn = document.getElementById("findTrainBtn");



// Today's Date

const today = new Date().toISOString().split("T")[0];

travelDate.min = today;

travelDate.value = today;


// Greeting

const greeting = document.querySelector(".user-welcome span");

const hour = new Date().getHours();

if(hour < 12){

    greeting.textContent = "Good Morning,";

}
else if(hour < 18){

    greeting.textContent = "Good Afternoon,";

}
else{

    greeting.textContent = "Good Evening,";

}




// Travel Tips

const tips=[

"Arrive at least 30 minutes before departure.",

"Carry a valid means of identification.",

"Online booking is available 24/7.",

"Please keep your ticket until the end of your journey.",

"Enjoy a safe and comfortable ride with MARC Railway."

];

let index=0;

const travelTip=document.getElementById("travelTip");

travelTip.textContent=tips[0];

setInterval(()=>{

    index++;

    if(index>=tips.length){

        index=0;

    }

    travelTip.textContent=tips[index];

},4000);


// Booking

findTrainBtn.addEventListener("click",()=>{

    if(

        fromStation.value==="" ||

        toStation.value==="" ||

        travelDate.value===""

    ){

        alert("Please complete all booking information.");

        return;

    }

    if(fromStation.value===toStation.value){

        alert("Departure and destination cannot be the same.");

        return;

    }

    localStorage.setItem("from",fromStation.value);

    localStorage.setItem("to",toStation.value);

    localStorage.setItem("date",travelDate.value);

    findTrainBtn.innerHTML="Searching...";

    findTrainBtn.disabled=true;

    setTimeout(()=>{

        window.location.href="available-trains.html";

    },2000);

});