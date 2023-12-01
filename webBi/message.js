var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

const scriptURL = "https://script.google.com/macros/s/AKfycbwO_5PfSTWsNtH1vXiCo2rfbZfXI5fL8FEQ6dbRBDD09-NSfA41fqNTBSX8bMM3E97yFQ/exec";
const form = document.forms["my-contact-form"];
const btnKirim = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading ");
const alert = document.querySelector(".alert");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // when send button has been click
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      alert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
