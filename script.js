document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.container2 img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            
            // Close button
            const close = document.createElement('span');
            close.innerHTML = '&times;';
            close.className = 'lightbox-close';
            lightbox.appendChild(close);
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.style.display = 'none';
    });
});
