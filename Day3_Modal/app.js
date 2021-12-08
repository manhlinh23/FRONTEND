// var btnOpen = document.querySelector('.open-modal-button')
// var modal = document.querySelector('.modal')
// var btnClose = document.querySelector('.modal_footer button')
// var iconClose = document.querySelector('.modal_header span')

// function showModal(e) {
//     console.log('open', e.target)
//     modal.classList.remove('hide')
// }

// function hideModal(e) {
//     console.log('hide')
//     modal.classList.add('hide')
// }

// btnOpen.addEventListener('click', showModal)
// btnClose.addEventListener('click', hideModal)
// iconClose.addEventListener('click', hideModal)
// modal.addEventListener('click', function (e) {
//     if (e.target == e.currentTarget) {
//         showModal()
//     }
// })

const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal-button')
const iconCloseModal = document.querySelector('.modal_header span')
const buttonCloseModal = document.querySelector('.modal_footer button')

function toggleModal() {
    modal.classList.toggle('hide')
}

openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
buttonCloseModal.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) toggleModal()
})

