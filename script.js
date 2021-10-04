const minutes = document.querySelector("#minute");
const seconds = document.querySelector("#second");
const tens = document.querySelector("#tens");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#restart");
const submitBtn = document.querySelector(".btn-submit");
const welcome = document.querySelector(".wel");
const inputText = document.querySelector(".input-text");
const closebtn = document.querySelector(".textone");
const overlay = document.querySelector(".overlay");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  welcome.innerHTML = inputText.value;
  inputText.value = "";
  if (welcome.innerHTML) {
    startBtn.addEventListener("click", function (e) {
      e.preventDefault();
      Interval = setInterval(startTimer, 10);
    });
  } else {
    startBtn.removeEventListener("click", function (e) {
      e.preventDefault();
      Interval = setInterval(startTimer, 10);
    });
  }
});

startBtn.addEventListener("click", function () {
  if (!welcome.innerHTML) {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("hidden");
  }
});

closebtn.addEventListener("click", function () {
  overlay.classList.add("hidden");
});

let minutesSet = 00;
let secondsSet = 00;
let tensSet = 00;
let Interval;

// startBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     Interval = setInterval(startTimer, 10);
// });

// Stop Button
stopBtn.addEventListener("click", function () {
  clearInterval(Interval);

  const lap = document.querySelector("#laps");
  const li = document.createElement("li");
  li.innerHTML = `<span>${minutes.innerHTML}:${seconds.innerHTML}.${tens.innerHTML}</span>`;
  lap.appendChild(li);
});

// Reset Button

resetBtn.addEventListener("click", function () {
  clearInterval(Interval);
  minutesSet = "00";
  secondsSet = "00";
  tensSet = "00";
  minutes.innerHTML = minutesSet;
  seconds.innerHTML = secondsSet;
  tens.innerHTML = tensSet;

  document.querySelector("#laps").innerHTML = "";
});

// Create Start Timer Function

function startTimer() {
  tensSet++;
  if (tensSet < 9) {
    tens.innerHTML = "0" + tensSet;
  }
  if (tensSet > 9) tens.innerHTML = tensSet;

  if (tensSet > 99) {
    secondsSet++;
    seconds.innerHTML = "0" + secondsSet;
    tensSet = 0;
    tens.innerHTML = "0" + 0;
  }

  if (secondsSet > 9) {
    seconds.innerHTML = secondsSet;
  }

  if (secondsSet == 60) {
    minutesSet++;
    minutes.innerHTML = "0" + minutesSet;
    secondsSet = 0;
  }

  if (minutesSet > 9) {
    minutes.innerHTML = minutesSet;
  }
}
