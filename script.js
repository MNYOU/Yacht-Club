body = document.body
let darkButton = document.querySelector('.theme-button-dark')
let lightButton = document.querySelector('.theme-button-light')
darkButton.onclick = function () {
    body.classList.add('dark')
    lightButton.classList.remove('active')
    darkButton.classList.add('active')
}

lightButton.onclick = function () {
    body.classList.remove('dark')
    lightButton.classList.add('active')
    darkButton.classList.remove('active')
}

let sansSerif = document.querySelector('.font-button-sans-serif')
let serif = document.querySelector('.font-button-serif')
sansSerif.onclick = function () {
    body.classList.remove('serif')
    serif.classList.remove(`active`)
    sansSerif.classList.add('active')
}
serif.onclick = function () {
    body.classList.add('serif')
    serif.classList.add('active')
    sansSerif.classList.remove('active')
}


let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = function () {
        articleSection.classList.remove('short');
    };
}


let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');
gridViewButton.onclick = function () {
    cardsList.classList.remove('list');
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
};
listViewButton.onclick = function () {
    cardsList.classList.add('list');
    gridViewButton.classList.remove('active');
    listViewButton.classList.add('active');
};


let mainImage = document.querySelector('.active-photo');
let images = document.querySelectorAll('.preview-list li a');
for (let activeImage of images) {
    activeImage.onclick = function (evt) {
        evt.preventDefault();
        mainImage.src = activeImage.href;
        let currentActive = document.querySelector('.preview-list .active-item');
        currentActive.classList.remove('active-item');
        activeImage.classList.add('active-item');
    };
}


