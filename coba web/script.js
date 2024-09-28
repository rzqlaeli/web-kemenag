

const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    nav.classList.add('not-sticky');
  } else {
    nav.classList.remove('not-sticky');
    nav.classList.add('sticky');
  }
  lastScrollY = currentScrollY;
});
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const threshold = 100; // Sesuaikan nilai ambang sesuai kebutuhan

  if (scrollPosition >= threshold) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
  } else {
    navbar.style.position = 'static'; // Atau nilai awal lainnya
  }
});

//buat jam
  function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  setInterval(updateTime, 1000);  // Memperbarui jam setiap 1 detik
  updateTime();  // Menampilkan jam saat halaman pertama kali dimuat




document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk mengambil hari dalam bahasa Indonesia
    function getDayName(dayIndex) {
      const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      return days[dayIndex];
    }

    // Fungsi untuk mengambil bulan dalam bahasa Indonesia
    function getMonthName(monthIndex) {
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      return months[monthIndex];
    }

    // Ambil waktu saat ini
    const today = new Date();

    // Ambil hari dan tanggal
    const dayName = getDayName(today.getDay());
    const day = today.getDate();
    const month = getMonthName(today.getMonth());
    const year = today.getFullYear();

    // Format tanggal yang akan ditampilkan
    const formattedDate = `${dayName}, ${day} ${month} ${year}`;

    // Tampilkan tanggal di elemen dengan id "currentDate"
    document.getElementById("currentDate").textContent = formattedDate;
  });

  //buat dispay fungsi

    document.getElementById("dropdown-item").addEventListener("click", function(){
    var section = document.getElementById("sejarah");
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
});

//buat galeri utama
document.querySelectorAll('.toggle-caption').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const cardText = this.previousElementSibling;
      cardText.classList.toggle('expanded');
      this.textContent = cardText.classList.contains('expanded') ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya';
      let card = this.closest('.card');
    card.classList.toggle('enlarged');

    // Periksa apakah card telah diperbesar
    if (card.classList.contains('enlarged')) {
      // Ubah tombol menjadi "Sembunyikan"
      this.textContent = "Sembunyikan";
    } else {
      // Ubah tombol kembali ke "Lihat Selengkapnya"
      this.textContent = "Lihat Selengkapnya";
    }
  });
});
function toggleContent(element) {
  // Tutup semua additionalContent yang lain
  var allContent = document.querySelectorAll('.additionalContent');
  allContent.forEach(function(content) {
    if (content !== element.nextElementSibling) {
      content.style.display = 'none';
    }
  });

  // Sembunyikan "Lihat Selengkapnya" di card lain dan reset ukurannya
  var allCards = document.querySelectorAll('.card');
  allCards.forEach(function(card) {
    if (card !== element.closest('.card')) {
      card.classList.remove('enlarged');
      var button = card.querySelector('.toggle-caption');
      if (button) button.textContent = 'Lihat Selengkapnya';
    }
  });

  // Tampilkan atau sembunyikan konten tambahan dari elemen yang diklik
  var content = element.nextElementSibling;
  content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';

  // Tambahkan atau hapus kelas 'enlarged' hanya pada kartu yang diklik
  var card = element.closest('.card');
  card.classList.toggle('enlarged');

  // Ubah teks tombol sesuai kondisi
  element.textContent = content.style.display === 'block' ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya';
}




