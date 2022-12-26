const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");
const btn = document.getElementById("light-btn");

const trafficLight = { red: 0, yellow: 1, green: 2 };
let currentLight = trafficLight.red;

btn.addEventListener("click", switchLight);

function switchLight() {
  clear();
  switch (currentLight) {
    case trafficLight.red:
      {
        redLight.className = "light red-light";
        currentLight = trafficLight.yellow;
      }
      break;
    case trafficLight.yellow:
      {
        yellowLight.className = "light yellow-light";
        currentLight = trafficLight.green;
      }
      break;
    case trafficLight.green:
      {
        greenLight.className = "light green-light";
        currentLight = trafficLight.red;
      }
      break;
  }
}

function clear() {
  redLight.className = "light not-active";
  yellowLight.className = "light not-active";
  greenLight.className = "light not-active";
}
