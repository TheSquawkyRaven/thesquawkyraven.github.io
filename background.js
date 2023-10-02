
const background = document.querySelector("#background")

addEventListener('resize', () => {
    updateBackgroundScale()
})

function updateBackgroundScale() {
    let w = window.innerWidth
    let h = window.innerHeight

    let diagonal = Math.sqrt(w ** 2 + h ** 2)

    let yScale = diagonal / h
    background.style.setProperty("--scale-y", yScale)

    let xScale = diagonal / w
    background.style.setProperty("--scale-x", xScale)
}

updateBackgroundScale()