const panels = document.querySelectorAll(".panel")

//Adding Events on the panels
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        removeActiveClasses() // this will remove previous panels flex 5
        panel.classList.add('active') // activing current event on the panels
    })
})

//function for remove active classes 
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}