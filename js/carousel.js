var cur = 0

function toRight() {
    let carousel = document.querySelector(".carousel .images")
    cur = (cur+1)%carousel.children.length
    carousel.style.transform = "translateX(-"+(100/3*cur)+"%)"
}

function toLeft() {
    let carousel = document.querySelector(".carousel .images")
    cur = (cur+2)%carousel.children.length
    carousel.style.transform = "translateX(-"+(100/3*cur)+"%)"
}