// Mendapatkan tanggal hari ini
const today = new Date();

// Daftar nama bulan
const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

// Format tanggal
const day = today.getDate(); // Tanggal
const month = months[today.getMonth()]; // Nama bulan
const year = today.getFullYear(); // Tahun

// Gabungkan format
export const formattedDate = `${day} ${month} ${year}`;
