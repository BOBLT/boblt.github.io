// dragdrop.js

document.addEventListener('DOMContentLoaded', function() {
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const icon = document.getElementById('icon');

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                icon.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    dropzone.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropzone.classList.add('dropzone-hover');
    });

    dropzone.addEventListener('dragleave', function(event) {
        dropzone.classList.remove('dropzone-hover');
    });

    dropzone.addEventListener('drop', function(event) {
        event.preventDefault();
        dropzone.classList.remove('dropzone-hover');
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                icon.src = e.target.result;
            }
            reader.
