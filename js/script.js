// Daftar gambar untuk background autoslide
const images = [
  'url("images/1.jpg")',  // Gambar pertama
  'url("images/21.jpg")',  // Gambar kedua
  'url("images/22.jpg")',  // Gambar ketiga
];

// Fungsi untuk mengganti background image secara otomatis
let currentImageIndex = 0;

function changeBackgroundImage() {
  const header = document.getElementById('home');
  currentImageIndex = (currentImageIndex + 1) % images.length; 
  header.style.backgroundImage = images[currentImageIndex]; 
}

// Jalankan fungsi setiap 5 detik (5000ms)
setInterval(changeBackgroundImage, 5000);

// Fungsi untuk menampilkan sambutan ketika klik submit
function showWelcome() {
  const name = document.getElementById("nameInput").value.trim();
  if (name !== "") {
    const upperName = name.toUpperCase();
    document.getElementById("greeting").innerText = `HI ${upperName}, WELCOME TO MY LITTLE WEB SPACE!`;

    // Menyembunyikan form input, menampilkan sambutan
    document.getElementById("inputBox").style.display = "none";
    const welcomeBox = document.getElementById("welcomeBox");
    welcomeBox.style.display = "block";
    welcomeBox.classList.add("fade-in");
  } else {
    alert("Silakan masukkan nama kamu dulu, yaa!");
  }
}

// Fungsi untuk menampilkan sambutan
function showWelcome() {
  const name = document.getElementById("nameInput").value.trim();

  if (name !== "") {
    const upperName = name.toUpperCase();
    document.getElementById("greeting").innerText = `HI ${upperName}, WELCOME TO MY LITTLE WEB SPACE!`;

    // Sembunyikan form, tampilkan sambutan
    document.getElementById("inputBox").style.display = "none";
    const welcomeBox = document.getElementById("welcomeBox");
    welcomeBox.style.display = "block";
    welcomeBox.classList.add("fade-in");
  } else {
    alert("Silakan masukkan nama kamu dulu, yaa!");
  }
}

// Jalankan fungsi saat tekan Submit & toggle menu
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("nameInput");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      showWelcome();
    }
  });

  // Toggle menu untuk tampilan mobile
  hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  });

  // Menutup menu saat link di dalam menu diklik (khusus untuk tampilan mobile)
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
  });
});

// message
// Fungsi untuk menampilkan modal
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  // Validasi form
  if (nama === "" || email === "" || pesan === "") {
    alert("Semua kolom harus diisi!");
    return;
  }

  // Tampilkan di dalam popup
  const content = `
    <strong>Nama:</strong> ${nama}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Pesan:</strong> ${pesan}
  `;
  document.getElementById("popupContent").innerHTML = content;

  // Tampilkan popup
  const modal = document.getElementById("popupModal");
  modal.style.display = "flex"; 

  // Reset form
  this.reset();
});

// Tutup popup saat klik tombol X
document.querySelector(".close").onclick = function () {
  const modal = document.getElementById("popupModal");
  modal.classList.add("fade-out");
  setTimeout(function () {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300); 
};

// Tutup popup saat klik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById("popupModal");
  if (event.target == modal) {
    modal.classList.add("fade-out");
    setTimeout(function () {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 300);
  }
};

});
