function validateATM() {
  const name = document.getElementById("atmName").value.trim();
  const code = document.getElementById("atmCode").value.trim();
  const password = document.getElementById("atmPassword").value.trim();
  const statusMessage = document.getElementById("statusMessage");
  const atmCard = document.getElementById("atmCard");
  const scanLine = document.getElementById("scanLine");
  const scannerContainer = document.getElementById("scannerContainer");

  // syarat khusus
  const validName = "Marllodie Universe";
  const validCode = "25225";
  const validPassword = "25225";

  if (name === validName && code === validCode && password === validPassword) {
    statusMessage.innerText = "Memulai pemindaian...";
    statusMessage.style.color = "#c4f2c4";

    scannerContainer.style.display = "flex";
    scanLine.style.opacity = 1;

    // scan depan
    setTimeout(() => {
      statusMessage.innerText = "Memindai Card Depan...";
    }, 500);

    // flip ke belakang
    setTimeout(() => {
      atmCard.style.transform = "rotateY(180deg)";
      statusMessage.innerText = "Memindai Card Belakang...";
    }, 3000);

    // selesai
    setTimeout(() => {
      scanLine.style.opacity = 0;
      statusMessage.innerText = "Verifikasi berhasil — Selamat datang, Marllodie Universe";
    }, 6000);

    // redirect ke folder 3/love.html setelah selesai scanning
    setTimeout(() => {
    document.getElementById("nextPage").click(); 
}, 7000);


  } else {
    statusMessage.innerText = "Data tidak valid!";
    statusMessage.style.color = "#f5a6a6";
  }
}

// preview upload gambar
function previewImage(input, previewId, faceId) {
  const preview = document.getElementById(previewId);
  const face = document.getElementById(faceId);
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
      face.style.backgroundImage = `url('${e.target.result}')`;
    }
    reader.readAsDataURL(file);
  }
}

// listener upload
document.getElementById("atmFrontInput").addEventListener("change", function() {
  previewImage(this, "frontPreview", "scanFront");
});

document.getElementById("atmBackInput").addEventListener("change", function() {
  previewImage(this, "backPreview", "scanBack");
});
