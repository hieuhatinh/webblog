// Login / Sign up
// const btnLogins = document.querySelectorAll('.blog__header-btn');
// const loginBlock = document.getElementById('Login');

// btnLogins.forEach((btnLogin) => {
//     btnLogin.addEventListener('click', (e) => {
//         loginBlock.classList.remove('hide');
//     });
// })

// share post
const shareBtns = document.querySelectorAll('.dot-more > i');
const dotMores = document.querySelectorAll('.dot-more');
const shareBlockOpens = document.querySelectorAll('.share.js-demo-btn')

shareBtns.forEach((shareBtn, index) => {
    shareBtn.onclick = (e) => {
        const nextElement = shareBtn.nextElementSibling;
        shareBlockOpens.forEach((shareBlockOpen) => {
            shareBlockOpen.classList.add('hide');
        });

        nextElement.classList.toggle('hide');

    };
});

shareBlockOpens.forEach((shareBlockOpen) => {
    shareBlockOpen.onclick = (e) => {
        const sharePost = document.getElementById('share-post');
        sharePost.classList.toggle('hide');
    };
})

document.onclick = function (e) {
    if (!e.target.closest('.dot-more')) {
        shareBlockOpens.forEach((shareBlockOpen) => {
            shareBlockOpen.classList.add('hide');
        });
    }
}

// link
const link = document.querySelector('.js-link');
const linkOverlay = document.getElementById('link-overlay');
const linkInput = document.querySelector('.demo__share-input');

link.addEventListener('click', (e) => {
    linkOverlay.classList.remove('hide');
    linkInput.value = location.href;
});

// close overlay
const overlays = document.querySelectorAll('.demo__overlay');
const closeBtns = document.querySelectorAll('.js-close');
overlays.forEach((overlay, index) => {
    overlay.addEventListener('click', (e) => {
        if (e.currentTarget == e.target) {
            overlay.classList.toggle('hide');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.which === 27) {
            overlay.classList.add('hide');
        }
    })
});

closeBtns.forEach((btnClose, index) => {
    btnClose.addEventListener('click', (e) => {
        overlays.forEach((overlay, index) => {
            overlay.classList.add('hide');
        });
    });
});

