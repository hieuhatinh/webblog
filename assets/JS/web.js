// show Image: Always Makes Me Smile
let listImg = document.querySelectorAll('.alway-img-list li img');
let modalImg = document.querySelector('.modal-list');
let closeModal = document.querySelector('.modal-close');
let prev = document.querySelector('.modal-arrow.prev');
let next = document.querySelector('.modal-arrow.next');
let inner = document.querySelector('.modal-list-inner img');
let innerDiv = document.querySelector('.modal-list-inner');

let currentIndex = 0;

listImg.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openModalImg();
    });
});

function openModalImg() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    }
    else {
        prev.classList.remove('hide');
    }
    if (currentIndex == listImg.length - 1) {
        next.classList.add('hide');
    }
    else {
        next.classList.remove('hide');
    }
    modalImg.classList.add('open');
    inner.src = listImg[currentIndex].src;
}

function hideModalImg() {
    modalImg.classList.remove('open');
}

closeModal.addEventListener('click', hideModalImg);
// modalImg.addEventListener('click', (e) => {
//     if (e.target == innerDiv) {
//         hideModalImg();
//     }
// });

function nextImage() {
    if (currentIndex != listImg.length - 1) {
        currentIndex++;
    }
    else {
        undefined;
    }
    openModalImg();
}

function prevImage() {
    if (currentIndex != 0) {
        currentIndex--;
    }
    else {
        undefined;
    }
    openModalImg();
}

prev.addEventListener('click', prevImage);

next.addEventListener('click', nextImage);

document.addEventListener('keydown', (e) => {
    if (modalImg.className == 'modal-list open') {
        if (e.which == 37) {
            prevImage();
        }
        if (e.which == 39) {
            nextImage();
        }
        if (e.which == 27) {
            hideModalImg();
        }
    }
})