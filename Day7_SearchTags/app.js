var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btn = document.querySelector('.remove')

let tags = ['manh', 'linh']

render()

function render() { //ham xuat ra 
    content.innerHTML = '' //gan noi dung
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=
            `
             <li>
             ${tag}
                <i class="fas fa-times" onClick='removeTag(${i})'></i>
            </li>
        `
    }
    content.appendChild(input) //gan content(da co noi dung) vao o^ input
    input.focus() //con nhay luon o~ o^ input
}

input.addEventListener('keydown', function (e) {
    //neu an enter va gtri nhap vao khac rong va khac nhung gtr da co
    if (e.key == 'Enter' && input.value != '' && !tags.includes(input.value)) {
        tags.push(input.value.trim()) // gan gtri vao mang tags
        render() // chay lay ham xuat ra
        input.value = '' // set lai o^ inpu
    }

})

function removeTag(index) {
    tags.splice(index, 1) //tai vi tri i xoa 1 phan tu
    render() // chay lai 
}

btn.addEventListener('click', function () {
    tags = [],
        render()
})

