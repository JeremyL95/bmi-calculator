const male = document.querySelector(".male");
const female = document.querySelector(".female");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const age = document.querySelector(".age");
const slider = document.querySelector("#slider");
const btnWeightDecrease = document.querySelector(".btnWeightDecrease");
const btnWeightIncrease = document.querySelector(".btnWeightIncrease");
const btnAgeDecrease = document.querySelector(".btnAgeDecrease");
const btnAgeIncrease = document.querySelector(".btnAgeIncrease");
const btnCalculate = document.querySelector("#btn-calculate");
const btnBack = document.querySelector("#btn-back");
const bmiStatus = document.querySelector("#status");
const bmiResult = document.querySelector("#result");
const bmiRange = document.querySelector("#range");
const bmiMessage = document.querySelector("#message");
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".result-container");

let gender;
let user_age = 20;
let user_weight = 50;
let user_height = 150;
let bmio;

let canCalculate = false;

function addUnit(measurement, unit) {
  const element = document.createElement("span");
  const node = document.createTextNode(unit);
  element.appendChild(node);
  measurement.appendChild(element);
  element.classList.add("units");
}

function weightInput() {
  weight.innerText = user_weight;
  addUnit(weight, "kg");
}

function genderSelection(user_option) {
  gender = user_option;
  canCalculate = true;
  btnCalculate.style.opacity = 1;
}

function calculateBMI() {
  let countingHeight = user_height ** 2 / 10000;
  let bmi = user_weight / countingHeight;
  bmio = bmi.toFixed(1);
  result.innerText = bmio;
  checkStatus();

  resultContainer.style.display = "block";
  container.style.display = "none";
}

function checkStatus() {
  if (bmio < 18.5) {
    bmiStatus.innerText = "Underweight";
    bmiStatus.style.color = "#5dc8f2";
    bmiMessage.innerHTML = "<b>You are underweight.</b>";
  } else if (bmio >= 18.5 && bmio < 25) {
    bmiStatus.innerText = "Healthy weight";
    bmiStatus.style.color = "#9BB33B";
    bmiMessage.innerHTML = "<b>You are at healthy weight.</b>";
  } else if (bmio >= 25 && bmio <= 29.9) {
    bmiStatus.innerText = "Overweight";
    bmiStatus.style.color = "#fbc80d";
    bmiMessage.innerHTML = "<b>You are Overweight.</b>";
  } else if (bmio > 30 && bmio < 35) {
    bmiStatus.innerText = "Obese";
    bmiStatus.style.color = "#f18930";
    bmiMessage.innerHTML = "<b>You are obese.<b>";
  } else {
    bmiStatus.innerText = "Extremely Obese";
    bmiStatus.style.color = "#ec2127";
    bmiMessage.innerHTML = "<b>You are extremely obese.<b>";
  }
}

function resetBMI() {
  location.reload();
}

male.addEventListener("click", () => {
  genderSelection("male");
});

female.addEventListener("click", () => {
  genderSelection("female");
});

slider.addEventListener("input", () => {
  height.innerText = slider.value;
  user_height = slider.value;
  addUnit(height, "cm");
});

btnWeightDecrease.addEventListener("click", () => {
  if (user_weight > 0) {
    user_weight--;
    weightInput();
  }
});

btnWeightIncrease.addEventListener("click", () => {
  user_weight++;
  weightInput();
});

btnAgeDecrease.addEventListener("click", () => {
  if (user_age > 0) {
    user_age--;
    age.innerText = user_age;
  }
});

btnAgeIncrease.addEventListener("click", () => {
  if (user_age < 150) {
    user_age++;
    age.innerText = user_age;
  }
});

btnCalculate.addEventListener("click", () => {
  if (canCalculate) {
    calculateBMI();
  } else {
    alert("gender selection is required");
  }
});

btnBack.addEventListener("click", resetBMI);
