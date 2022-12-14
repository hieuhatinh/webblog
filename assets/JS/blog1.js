// // Login / Sign up
// const btnLogins = document.querySelectorAll('.blog__header-btn');
// const loginBlock = document.getElementById('Login');

// btnLogins.forEach((btnLogin) => {
//     btnLogin.addEventListener('click', (e) => {
//         loginBlock.classList.remove('hide');
//     });
// })

// share post
const shareBtn = document.querySelector('.dot-more > i');
const dotMore = document.querySelector('.dot-more');
const shareBlockOpen = document.querySelector('.share.js-demo-btn')

shareBtn.onclick = (e) => {
    e.stopPropagation();
    const nextElement = shareBtn.nextElementSibling;
    nextElement.classList.toggle('hide');
};

shareBlockOpen.onclick = (e) => {
    e.stopPropagation();
    const sharePost = document.getElementById('share-post');
    sharePost.classList.toggle('hide');
};

window.onclick = (e) => {
    shareBlockOpen.classList.add('hide');
}


// link
const links = document.querySelectorAll('.js-link');
const linkOverlay = document.getElementById('link-overlay');
const linkInput = document.querySelector('.demo__share-input');

links.forEach((link, index) => {
    link.onclick = (e) => {
        linkOverlay.classList.remove('hide');
        linkInput.value = location.href;
    };
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




// btn__modal
const btnDisabled = document.querySelector('.btn--disabled');
const inputComment = document.getElementById('blog__comments-input');

inputComment.oninput = () => {
    btnDisabled.classList.remove('btn--disabled');
    if (!(inputComment.value.trim() === '')) {
        btnDisabled.classList.remove('btn--disabled');
    } else {
        btnDisabled.classList.add('btn--disabled');
    }
}


// comments
const commentsAdd = document.querySelector('.comment__add-open');
const commentsBtn = document.querySelector('.comments__block-mb');

commentsBtn.onclick = (e) => {
    commentsAdd.classList.toggle('hide');
}

document.onclick = (e) => {
    if (!e.target.closest('.comment__add-open') && !e.target.closest('.comments__block-mb')) {
        commentsAdd.classList.add('hide');
    }
}