const oneBlock = document.querySelectorAll('.techical__li')
const twoBlock = document.querySelectorAll('.techical__all')
oneBlock.forEach((a, i) => {
    a.addEventListener('click', () => {
        oneBlock.forEach((a) => a.classList.remove('active'));
        twoBlock.forEach((b) => b.classList.remove('opacity'))

    a.classList.add('active')
    twoBlock[i].classList.add('active')
    twoBlock[1 - i].classList.add('opacity')
    })
})