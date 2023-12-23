// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
}

// Klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// Modal Box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButton = document.querySelector('.item-detail-button');

// itemDetailButton.onclick = () => {
//     itemDetailModal.style.display = 'flex';
// };

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = () => {
        itemDetailModal.style.display = 'flex';
    };
});

// Klik tombol close modal
document.querySelector('.modal .close-icon').onclick = () => {
    itemDetailModal.style.display = 'none';
};

// Klik diluar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};