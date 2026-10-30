// Ambil elemen dari HTML
const inputNama = document.getElementById("nama");
const daftarInput = [
  document.getElementById("tugas"),
  document.getElementById("uts"),
  document.getElementById("uas")
];
const namaNilai = ["Tugas", "UTS", "UAS"];

const pesanError = document.getElementById("pesanError");
const boxHasil = document.getElementById("hasil");

// Fungsi menentukan grade (PERCABANGAN: 5 kondisi)
function tentukanGrade(rata) {
  let grade;
  let keterangan;

  if (rata >= 85) {
    grade = "A";
    keterangan = "Sangat Baik";
  } else if (rata >= 75) {
    grade = "B";
    keterangan = "Baik";
  } else if (rata >= 65) {
    grade = "C";
    keterangan = "Cukup";
  } else if (rata >= 50) {
    grade = "D";
    keterangan = "Kurang";
  } else {
    grade = "E";
    keterangan = "Sangat Kurang";
  }

  return { grade: grade, keterangan: keterangan };
}

// Fungsi pesan motivasi berdasarkan grade (PERCABANGAN: switch)
function ambilPesan(grade) {
  switch (grade) {
    case "A":
      return "Luar biasa! Pertahankan prestasimu!";
    case "B":
      return "Bagus! Sedikit lagi menuju nilai A.";
    case "C":
      return "Lumayan, ayo belajar lebih giat lagi.";
    case "D":
      return "Jangan menyerah, perbanyak latihan ya.";
    default:
      return "Tetap semangat, ayo coba lagi!";
  }
}

// Fungsi utama saat tombol Hitung diklik
function hitungNilai() {
  pesanError.textContent = "";

  const nama = inputNama.value.trim();

  // Validasi nama
  if (nama === "") {
    pesanError.textContent = "Nama tidak boleh kosong!";
    return;
  }

  // PERULANGAN FOR: validasi & menjumlahkan semua nilai
  let total = 0;
  const nilaiList = [];

  for (let i = 0; i < daftarInput.length; i++) {
    const nilai = parseFloat(daftarInput[i].value);

    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
      pesanError.textContent = "Nilai " + namaNilai[i] + " harus berupa angka 0 - 100!";
      return;
    }

    nilaiList.push(nilai);
    total += nilai;
  }

  const rata = total / daftarInput.length;
  const hasilGrade = tentukanGrade(rata);

  // PERULANGAN WHILE: membuat bintang (maksimal 5)
  const jumlahBintang = Math.round(rata / 20);
  let bintang = "";
  let j = 0;
  while (j < 5) {
    if (j < jumlahBintang) {
      bintang += "★";
    } else {
      bintang += "☆";
    }
    j++;
  }

  // Tampilkan hasil ke halaman
  document.getElementById("judulHasil").textContent = "Hasil untuk " + nama;
  document.getElementById("grade").textContent = hasilGrade.grade;
  document.getElementById("keterangan").textContent = hasilGrade.keterangan;
  document.getElementById("bintang").textContent = bintang;
  document.getElementById("rataRata").textContent = "Rata-rata: " + rata.toFixed(2);
  document.getElementById("pesan").textContent = ambilPesan(hasilGrade.grade);

  // PERULANGAN FOR: menampilkan rincian nilai satu per satu
  const listRincian = document.getElementById("rincian");
  listRincian.innerHTML = "";
  for (let k = 0; k < nilaiList.length; k++) {
    const li = document.createElement("li");
    li.textContent = namaNilai[k] + ": " + nilaiList[k];
    listRincian.appendChild(li);
  }

  boxHasil.classList.remove("hidden");
}

// Fungsi reset form
function resetForm() {
  inputNama.value = "";
  for (let i = 0; i < daftarInput.length; i++) {
    daftarInput[i].value = "";
  }
  pesanError.textContent = "";
  boxHasil.classList.add("hidden");
}

// Pasang event ke tombol
document.getElementById("btnHitung").addEventListener("click", hitungNilai);
document.getElementById("btnReset").addEventListener("click", resetForm);