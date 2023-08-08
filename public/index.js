const oneBlock = document.querySelectorAll('.techical__li')
const twoBlock = document.querySelectorAll('.techical__all')
oneBlock[0].addEventListener('click', (e) => {
    if(oneBlock[1].classList.contains('active')){
        oneBlock[1].classList.toggle('active')
        oneBlock[0].classList.toggle('active')
        if(twoBlock[0].classList.contains('opacity')){
            twoBlock[0].classList.toggle('opacity')     
            twoBlock[1].classList.toggle('opacity')
    }
    }
})
oneBlock[1].addEventListener('click', (e) => {
    if(oneBlock[0].classList.contains('active')){
        oneBlock[0].classList.toggle('active')
        oneBlock[1].classList.toggle('active')
        if(twoBlock[1].classList.contains('opacity')){
            twoBlock[1].classList.toggle('opacity')     
            twoBlock[0].classList.toggle('opacity')
    }
}
})

console.log(twoBlock)