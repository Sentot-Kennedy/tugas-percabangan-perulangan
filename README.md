# Tugas Pertemuan 5 - Pemrograman Web

**Nama:** Sandy Viandito<br>
**NIM:** 25533974<br>
**Kelas:** D3 Teknik Informatika

## Tentang Program

Program ini buat ngitung nilai mahasiswa. Jadi user tinggal masukin nama dan 3 nilai (Tugas, UTS, UAS), terus nanti keluar rata-ratanya, grade, bintang, dan pesan semangat.

Grade-nya ada:

- **A** — rata-rata 85 ke atas
- **B** — rata-rata 75 sampai 84
- **C** — rata-rata 65 sampai 74
- **D** — rata-rata 50 sampai 64
- **E** — rata-rata di bawah 50

## File yang ada

| File | Keterangan |
|---|---|
| index.html | Halaman utama, ada form input nama dan nilai sama tombol Hitung |
| style.css | Buat styling tampilannya biar rapi |
| script.js | Logika percabangan, perulangan, sama fungsi hitung nilai |

## Cara Pakai

1. Buka file `index.html` di browser
2. Masukin nama dan nilai Tugas, UTS, UAS (0 - 100)
3. Klik tombol **Hitung**
4. Hasilnya muncul di bawah tombol
5. Klik **Reset** kalau mau ngosongin form

## Penjelasan Kode

Di `script.js` ada fungsi `tentukanGrade()` yang pakai **if else if** buat nentuin grade berdasarkan rata-rata nilai. Percabangannya ada 5 kondisi sesuai grade A sampai E.

Ada juga fungsi `ambilPesan()` yang pakai **switch case** buat milih pesan semangat sesuai grade, jadi tiap grade pesannya beda.

Terus ada fungsi `hitungNilai()` yang dipanggil waktu tombol diklik. Fungsi ini ngambil nilai dari input, terus manggil `tentukanGrade()` dan `ambilPesan()`, lalu nampilin hasilnya di halaman. Di dalamnya ada perulangan:

- **for** — buat ngecek 3 nilai satu-satu (harus angka 0 - 100) sekaligus ngejumlahin totalnya
- **while** — buat bikin 5 bintang (★ kalau terisi, ☆ kalau kosong)
- **for** — buat nampilin rincian nilai Tugas, UTS, UAS satu per satu

Terakhir ada fungsi `resetForm()` yang pakai **for** buat ngosongin semua kolom nilai.
