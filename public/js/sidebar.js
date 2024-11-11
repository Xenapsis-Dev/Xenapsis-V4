

const hidesidebar = () => {
    const chevron = document.getElementById('chevron')
    document.getElementById('sidebar').classList.toggle('hide')
    document.getElementById('nav-title').classList.toggle('gap')
    var on = true

    if (on === true) {
        chevron.src = "../imgs/chevron.png"
        on = false
    } else {
        chevron.src = "../imgs/chevronright.png"
        on = true
    }
};