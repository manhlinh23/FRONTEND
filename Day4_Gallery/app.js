var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery_inner img')
var gallery = document.querySelector('.gallery')

let currentIndex = 0

function showGallery() {
    currentIndex == images.length - 1 ? next.classList.add('hide') : next.classList.remove('hide')

    currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')

    gallery.classList.remove('hide')
    galleryImg.src = images[currentIndex].src
}

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', () => {
    gallery.classList.add('hide')
})

next.addEventListener('click', () => {
    currentIndex != images.length - 1 ? currentIndex++ : undefined
    showGallery()
})

prev.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined
    showGallery()
})
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) gallery.classList.add('hide')
})


