import { pressShift, toUpperCase, toLowerCase, language } from './arrKeys.js'
import { drowKeyboaard } from './index.js'
import { onPressAction } from './onPressAction.js'
import { languageDefinition } from './language.js'

let capslock = false
let shift = false
let alt = false

export function keyHandler(event) {

    if (event.key === 'Tab') {
        if (!event.repeat && event.type === "keydown") {
            onPressAction(event.key)
            drowKeyboaard();
            addStule(event.code)
        }
        if (event.type === "keyup") {
            removeStule()
        }
    }
    else if (event.key === 'CapsLock') {
        if (!event.repeat && event.type === "keydown") {
            capslock = !capslock
            typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
            drowKeyboaard();
            addStule(event.code)
        }
        if (event.type === "keyup") {
            removeStule()
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
                addStule(event.code);
            }
            if (event.type === "keyup") {
                shift = false;
                typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
                drowKeyboaard();
                removeStule();
            }
        }
    }
    else if (event.code === 'Alt') {
        if (!event.repeat) {
            if (event.type === "keydown") {
                alt = true;
                addStule(event.code);
            }
            if (event.type === "keyup") {
                alt = false;
                removeStule();
            }
        }
    }

    else {
        if (event.type === "keydown") {
            const TEXTAREA = document.querySelector('#textarea');
            TEXTAREA.focus()
            languageDefinition(event) === 'ru' && language('ru');
            languageDefinition(event) === 'eng' && language('eng');
            typeCase(shift, capslock) ? toUpperCase() : toLowerCase();
            drowKeyboaard();
            addStule(event.code)
        }
        if (event.type === "keyup") {
            removeStule()
        }
    }
}

function addStule(code) {
    const KEY = document.querySelector(`.key[data-code="${code}"]`);
    KEY?.classList.add('press')
}
function removeStule() {
    const KEYS = document.querySelectorAll('.key');
    KEYS.forEach(e => e.classList.remove('press'))
}

function typeCase(shift, capsLock) {return capsLock?!shift:shift}