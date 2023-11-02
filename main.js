const frm = document.getElementById("form");
const inWeigth = document.querySelector("#weight");
const inHeigth = document.querySelector("#height");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector("h2.title");
const modalBtnClose = document.getElementById("close");

frm.onsubmit = (event) => {
  event.preventDefault();

  const weight = inWeigth.value;
  const height = inHeigth.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  modalMessage.innerText = message;
  modalWrapper.classList.add("open");
};

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove("open");
  weight.value = "";
  height.value = "";
};

const IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};
