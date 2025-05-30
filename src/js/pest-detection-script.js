// src/js/pest-detection-script.js

// import axios from 'axios'; // Baris ini dikomentari atau dihapus karena tidak ada backend API yang digunakan

document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewImg = imagePreview.querySelector('img');
    const uploadButtonLabel = document.querySelector('.upload-button-new');
    const detectPestBtn = document.getElementById('detectPestBtn');
    const detectionResultsBox = document.querySelector('.detection-results');
    const pestTypeSpan = document.getElementById('pestType');
    const severityLevelSpan = document.getElementById('severityLevel');
    const pestDescriptionSpan = document.getElementById('pestDescription');
    const pestSolutionP = document.getElementById('pestSolution');
    const featuresShowcaseSection = document.querySelector('.pest-detection-features-showcase-section');

    // Fungsi untuk mereset tampilan ke awal
    function resetDetectionPage() {
        imageUpload.value = ''; // Mengosongkan input file
        imagePreview.style.display = 'none'; // Sembunyikan preview gambar
        imagePreviewImg.classList.add('hidden'); // Sembunyikan gambar di preview
        uploadButtonLabel.style.display = 'flex'; // Tampilkan kembali label upload

        detectPestBtn.classList.add('hidden'); // Sembunyikan tombol "Detect Pest"
        detectPestBtn.textContent = 'Detect Pest'; // Reset teks tombol

        detectionResultsBox.classList.add('hidden'); // Sembunyikan hasil deteksi
        if (featuresShowcaseSection) {
            featuresShowcaseSection.classList.remove('hidden'); // Tampilkan kembali fitur showcase
        }
    }

    // Handle image upload and preview
    imageUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreviewImg.src = e.target.result;
                imagePreview.style.display = 'block';
                imagePreviewImg.classList.remove('hidden');
                uploadButtonLabel.style.display = 'none';
                detectPestBtn.classList.remove('hidden');
                detectPestBtn.textContent = 'Detect Pest'; // Pastikan tombol adalah "Detect Pest" saat gambar diunggah
                detectionResultsBox.classList.add('hidden'); // Sembunyikan hasil sebelumnya
                if (featuresShowcaseSection) {
                    featuresShowcaseSection.classList.remove('hidden'); // Tampilkan kembali fitur showcase
                }
            };
            reader.readAsDataURL(file);
        } else {
            resetDetectionPage(); // Panggil fungsi reset jika tidak ada file
        }
    });

    // Simulate pest detection logic
    detectPestBtn.addEventListener('click', () => {
        if (detectPestBtn.textContent === 'Detect Pest') {
            const file = imageUpload.files[0];
            if (!file) {
                alert('Please upload an image first.');
                return;
            }

            alert('Detecting pest... (simulated)');

            // Simulasi hasil deteksi dalam bahasa Inggris
            const simulatedPestType = 'Aphids';
            const simulatedSeverityLevel = 'Moderate to High';
            const simulatedDetailInformation = `Aphids are small sap-sucking insects, and members of the superfamily Aphidoidea. Common symptoms of aphid infestation include curled, yellowed, or stunted leaves. They often leave behind a sticky substance called "honeydew" which can lead to sooty mold growth. Aphids typically congregate on the undersides of leaves and on new growth.`;
            const simulatedTreatmentRecommendation = `**1. Manual Removal:** For small infestations, wipe or spray aphids off leaves with a strong stream of water.
**2. Insecticidal Soap:** Apply insecticidal soap directly to the aphids. Ensure thorough coverage, especially on the undersides of leaves. Repeat every 5-7 days until the infestation is under control.
**3. Neem Oil:** Mix neem oil with water according to package instructions and spray on affected plants. Neem oil acts as an antifeedant and growth disruptor.
**4. Introduce Natural Predators:** Encourage beneficial insects like ladybugs, lacewings, and hoverflies, which prey on aphids.
**5. Pruning:** Remove heavily infested leaves or stems to reduce aphid populations.
**6. Maintain Plant Health:** Healthy plants are less susceptible to pests. Ensure proper watering, fertilization, and light conditions.`;

            // Update the HTML elements
            pestTypeSpan.textContent = simulatedPestType;
            if (severityLevelSpan) {
                severityLevelSpan.textContent = simulatedSeverityLevel;
            }
            pestDescriptionSpan.textContent = simulatedDetailInformation;
            pestSolutionP.innerHTML = simulatedTreatmentRecommendation; // Gunakan innerHTML untuk memungkinkan formatting seperti bold

            detectionResultsBox.classList.remove('hidden'); // Tampilkan hasil
            if (featuresShowcaseSection) {
                featuresShowcaseSection.classList.add('hidden'); // Sembunyikan fitur showcase
            }
            detectPestBtn.textContent = 'Back'; // Ubah teks tombol menjadi "Back"
            alert('Detection complete! (simulated)');

        } else if (detectPestBtn.textContent === 'Back') {
            // Jika tombol adalah "Back", reset halaman
            resetDetectionPage();
        }
    });
});