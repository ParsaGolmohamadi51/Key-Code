let getBody = document.getElementById('get-body')

let BGcolorBody1 = document.getElementById('bgcolor-body1')
let BGcolorBody2 = document.getElementById('bgcolor-body2')

BGcolorBody1.addEventListener('click', function () {
    if (BGcolorBody1.value === 'Dark theme') {
        getBody.style.backgroundColor = 'rgb(47, 48, 65)';
        getKeyCode.style.color = 'rgb(226, 226, 226)'
        BGcolorBody1.value = 'Light theme'
        BGcolorBody1.classList.add('customize_color')
        BGcolorBody2.classList.add('customize_color')
    } else if (BGcolorBody1.value === 'Light theme') {
        getBody.style.backgroundColor = 'rgb(239, 239, 239)';
        getKeyCode.style.color = 'rgb(95, 158, 160)'
        BGcolorBody1.value = 'Dark theme'
        BGcolorBody1.classList.remove('customize_color')
        BGcolorBody2.classList.remove('customize_color')
    }
})

let overtAndHidden = document.querySelectorAll('.text')
let getKeyCode = document.getElementById('get-key-code')
let getKey = document.getElementById('get-key')
let getLocation = document.getElementById('get-location')
let getWhich = document.getElementById('get-which')
let getCode = document.getElementById('get-code')

addEventListener('keydown', function (event) {
    for (let i = 0; i < overtAndHidden.length; i++) {
        overtAndHidden[i].style.display = 'inline-block';
    }
    getKeyCode.setAttribute('class', 'size')
    getKeyCode.innerHTML = event.keyCode
    getKey.innerHTML = event.key
    getLocation.innerHTML = event.location
    getWhich.innerHTML = event.which
    getCode.innerHTML = event.code
})
