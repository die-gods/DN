const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

envelope.addEventListener("click", () => {
  flap.classList.toggle("open");

  setTimeout(() => {
    letter.classList.toggle("open");
  }, 500); // surat keluar lebih cepat agar smooth
});
