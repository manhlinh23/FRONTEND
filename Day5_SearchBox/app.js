var btnSearch = document.querySelector('.search-btn')

btnSearch.addEventListener('click', function() { // *error function k co this
    console.log(this.parentElement)
    this.parentElement.classList.toggle('open') // parentElement:search-box
    console.log(this.previousElementSibling)
    this.previousElementSibling.focus() //previousElementSibling:search-input
})