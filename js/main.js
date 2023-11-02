import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const frm = document.getElementById("form");
const inWeigth = document.querySelector("#weight");
const inHeigth = document.querySelector("#height");

frm.onsubmit = (event) => {
  event.preventDefault();

  const weight = inWeigth.value;
  const height = inHeigth.value;

  const showAlertError = notANumber(weight) || notANumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

const IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};

const notANumber = (value) => {
  return isNaN(value) || value == "";
};
