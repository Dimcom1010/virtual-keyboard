import { pressShift, toUpperCase, toLowerCase, language } from './arrKeys.js'
import { drowKeyboaard } from './index.js'
import { onPressAction } from './onPressAction.js'
import { languageDefinition } from './language.js'

let capslock = false
let shift = false
let arrPressKes = new Set()

export function keyHandler(event) {

    event.type === "keydown" && (addStule(event.code))
    event.type === "keyup" && (removeStule(event.code))

    if (event.key === 'Tab') {
        if (!event.repeat && event.type === "keydown") {
            onPressAction(event.key)
            drowKeyboaard();
        }
    }
    else if (event.key === 'CapsLock') {
        if (!event.repeat && event.type === "keydown") {
            capslock = !capslock
            typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
            drowKeyboaard();
        }
    }
    else if (event.code === 'ShiftLeft') {
        if (!event.repeat) {
            pressShift();
            drowKeyboaard();
            if (event.type === "keydown") {
                shift = true;
                typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
                drowKeyboaard();
            }
            if (event.type === "keyup") {
                shift = false;
                typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
                drowKeyboaard();
            }
        }
    } else {
        if (event.type === "keydown") {
            const TEXTAREA = document.querySelector('#textarea');
            TEXTAREA.focus()
            languageDefinition(event) === 'ru' && language('ru');
            languageDefinition(event) === 'eng' && language('eng');
            typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
            drowKeyboaard();
        }
    }

    applyingStyles()
}


function addStule(code) {
    arrPressKes.add(code)
}

function removeStule(code) {
    arrPressKes = new Set([...arrPressKes].filter(e => e !== code))
}

function applyingStyles() {
    const arr = [...arrPressKes]
    if (arr.length) {
        arr.forEach(e => {
            const KEY = document.querySelector(`.key[data-code="${e}"]`);
            KEY?.classList.add('press')
        })
    } else {
        const KEYS = document.querySelectorAll('.key');
        KEYS.forEach(e => e.classList.remove('press'))
    }
}

function typeCase(shift, capsLock) { return capsLock ? !shift : shift }