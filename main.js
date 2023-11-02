const frm = document.getElementById("form");
const inWeigth = document.querySelector("#weight");
const inHeigth = document.querySelector("#height");

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("h2.title"),
  btnClose: document.getElementById("close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

frm.onsubmit = (event) => {
  event.preventDefault();

  const weight = inWeigth.value;
  const height = inHeigth.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

Modal.btnClose.onclick = () => {
  Modal.close();
  weight.value = "";
  height.value = "";
};

const IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
};
