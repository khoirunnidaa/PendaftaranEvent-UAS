const form = document.getElementById('formDaftar');
const message = document.getElementById('message');
const listPeserta = document.getElementById('listPeserta');
const jumlahSpan = document.getElementById('jumlah');

const MAX_KUOTA = 50;
let jumlahPeserta = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const hp = document.getElementById('hp').value.trim();
  const kategori = document.getElementById('kategori').value;

  if (!nama || !email || !hp || !kategori) {
    message.textContent = 'Semua input wajib diisi';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Email harus mengandung @';
    message.style.color = 'red';
    return;
  }

  if (isNaN(hp)) {
    message.textContent = 'Nomor HP hanya boleh angka';
    message.style.color = 'red';
    return;
  }

  if (jumlahPeserta >= MAX_KUOTA) {
    message.textContent = 'Pendaftaran ditutup, kuota sudah penuh';
    message.style.color = 'red';
    return;
  }

  const li = document.createElement('li');
  li.textContent = `${nama} - ${email} - ${kategori}`;
  listPeserta.appendChild(li);

  jumlahPeserta++;
  jumlahSpan.textContent = jumlahPeserta;

  message.textContent = 'Pendaftaran berhasil!';
  message.style.color = 'green';

  form.reset();
});