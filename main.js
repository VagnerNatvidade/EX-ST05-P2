const frm = document.getElementById("form");
const inWeigth = document.getElementById("weight");
const inHeigth = document.getElementById("height");

frm.onsubmit = (event) => {
  event.preventDefault();

  const weight = inWeigth.value;
  const height = inHeigth.value;
};
