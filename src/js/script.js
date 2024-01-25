function convertImage() {
    const input = document.getElementById('imageInput');
    const format = document.getElementById('formatSelect').value;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const downloadLink = document.getElementById('downloadLink');
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = '25%'; 

    if (input.files && input.files[0]) {
        let img = new Image();
        img.onload = function() {
                // Update progress
            progressBar.style.width = '50%';
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(function(blob) {
                progressBar.style.width = '100%';
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = 'converted-image.' + format.split('/')[1];
                downloadLink.classList.remove('hidden');
                setTimeout(() => progressBar.style.width = '0%', 500);
            }, format);
        };
        img.src = URL.createObjectURL(input.files[0]);
    }
}

// Hide the download link after it's clicked
const downloadLink = document.getElementById('downloadLink');
downloadLink.addEventListener('click', () => {
    downloadLink.classList.add('hidden');
});

// Set up event listener for the Convert button
document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convertButton');
    convertButton.addEventListener('click', convertImage);
});
