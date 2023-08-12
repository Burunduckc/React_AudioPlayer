const oneBlock = document.querySelectorAll('.techical__li')
const twoBlock = document.querySelectorAll('.techical__all')
oneBlock.forEach((a, i) => {
    a.addEventListener('click', () => {
        if(a.classList.contains('active')) return
        oneBlock.forEach((a) => a.classList.remove('active'));
        twoBlock.forEach((b) => b.classList.remove('opacity'))

    a.classList.add('active')
    twoBlock[1 - i].classList.add('opacity')
    })
})