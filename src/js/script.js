// js/script.js

// import axios from 'axios'; // Baris ini dikomentari atau dihapus karena tidak ada backend API yang digunakan

document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menampilkan/menyembunyikan password
    const passwordToggles = document.querySelectorAll('.toggle-password');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const passwordInput = toggle.previousElementSibling; // Input field sebelum ikon
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Ganti ikon Font Awesome sesuai tipe input
            if (type === 'password') {
                // Jika input menjadi password (tersembunyi), tampilkan ikon mata tertutup
                toggle.classList.remove('fa-eye');
                toggle.classList.add('fa-eye-slash');
            } else {
                // Jika input menjadi teks (terlihat), tampilkan ikon mata terbuka
                toggle.classList.remove('fa-eye-slash');
                toggle.classList.add('fa-eye');
            }
        });
    });

    // Simulasi redirect setelah register (untuk demo saja)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => { // 'async' dihapus
            e.preventDefault(); // Mencegah form submit default

            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            if (fullName && email && password) {
                alert('Registrasi berhasil untuk ' + fullName + '! Anda akan diarahkan ke halaman login.');
                window.location.href = 'login.html'; // Arahkan ke halaman login
            } else {
                alert('Mohon lengkapi semua data.');
            }
        });
    }

    // Tambahkan simulasi redirect setelah login berhasil
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => { // 'async' dihapus
            e.preventDefault(); // Mencegah form submit default

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Untuk demo, kita anggap login berhasil jika email dan password tidak kosong
            if (email && password) {
                alert('Login berhasil! Anda akan diarahkan ke Dashboard.');
                window.location.href = 'dashboard.html'; // Arahkan ke halaman dashboard
            } else {
                alert('Mohon masukkan email dan password.');
            }
        });
    }
});