// src/js/dashboard-entry.js
import '../css/style.css';
import '../css/dashboard.css';
import './script.js';

// Import gambar-gambar yang digunakan di halaman DASHBOARD (landing page utama)
import logoAgrosentry from '../images/logo-agrosentry.png';
import userIcon from '../images/user.png';
import logoutIcon from '../images/logout.png';
import heroPlant from '../images/plant1.png';
import computerIcon from '../images/computer.png';
import pictureIcon from '../images/picture.png';
import searchIcon from '../images/search.png';
import fileUploadIcon from '../images/file-upload.png';
import goodFeedbackIcon from '../images/good-feedback.png';
import aboutUsImage from '../images/about-us.png';

// Daftarkan Service Worker
if ('serviceWorker' in navigator) { //
    window.addEventListener('load', () => { //
        navigator.serviceWorker.register('/service-worker.js') //
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope); //
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error); //
            });
    });
}

console.log('Dashboard page loaded!');