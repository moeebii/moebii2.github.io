document.addEventListener('DOMContentLoaded', function() {
    var shopAtSoho = document.querySelector('.shopatsoho');

    shopAtSoho.addEventListener('mouseover', function() {
        this.style.fontVariationSettings = '"wght" 700, "CNTR" 300';
    });

    shopAtSoho.addEventListener('mouseout', function() {
        this.style.fontVariationSettings = '"wght" 900, "CNTR" 900';
    });
});

let imageCounter = 0;

function showImage() {
    const images = ['docmartins.png', 'uniqlo.png', 'apc.png', 'miffy.png', 'acnestudios.png', 'miumiu.png', 'one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];
    const randomImage = getRandomImage(images);

    const imgElement = document.createElement('img');
    imgElement.src = randomImage;
    imgElement.alt = 'Random Image';
    imgElement.classList.add('random-image');
    imgElement.style.maxWidth = '160px';

    const randomPositionX = Math.random() * window.innerWidth;
    const randomPositionY = Math.random() * window.innerHeight;

    imgElement.style.position = 'absolute';
    imgElement.style.left = `${randomPositionX}px`;
    imgElement.style.top = `${randomPositionY}px`;

    document.body.appendChild(imgElement);

    imageCounter++;

    if (imageCounter % 50 === 0) {
        removeOldImages();
    }
}

function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function removeOldImages() {
    const oldImages = document.querySelectorAll('.random-image');
    oldImages.forEach(img => img.remove());
}

document.getElementById('buyButton').addEventListener('click', function() {
    showImage();
    console.log(`Image ${imageCounter} added.`);
});

// Adding DONE button functionality
document.getElementById('doneButton').addEventListener('click', function() {
    alert('Thank you for shopping!');
});
