import { pressShift, toUpperCase, toLowerCase } from './arrKeys.js'
import { drowKeyboaard } from './index.js'
import { onPressAction } from './keyClass.js'

let capslock=false
let shift = false
let alt = false


export function keyHandler(event) {

    if (shift && alt) {

        if (event.type === "keydown") {
            addStule(16);
            addStule(18);
        }
        if (event.type === "keyup") {
            shift = false;
            alt = false;
            removeStule();
        }
    }else
     if (event.key === 'Shift') {
        if (!event.repeat) {
            pressShift();


            typeCase(shift,capslock) ? toUpperCase() : toLowerCase();
            
            drowKeyboaard();
            if (event.type === "keydown") {
                shift = true;
                drowKeyboaard();
                addStule(event.keyCode);
            }
            if (event.type === "keyup") {
                shift = false;
                drowKeyboaard();
                removeStule();
            }

        }
    } else if (event.key === 'Alt') {
        if (!event.repeat) {
            if (event.type === "keydown") {
                // alt = true;
                addStule(event.keyCode);
            }
            if (event.type === "keyup") {
                // alt = false;
                removeStule();
            }

        }
    } else if (event.key === 'CapsLock') {
        if (!event.repeat && event.type === "keydown") {
            typeCase(shift,capslock) ? toUpperCase() : toLowerCase();
            capslock = !capslock
            drowKeyboaard();
            addStule(event.keyCode)
        }
        if (event.type === "keyup") {
            removeStule()
        }
    }
    else {

        if (event.type === "keydown") {
            onPressAction(event.key)
            drowKeyboaard();
            addStule(event.keyCode)
        }
        if (event.type === "keyup") {
            removeStule()
        }
    }
}

function removeStule() {
    const KEYS = document.querySelectorAll('.key');
    KEYS.forEach(e => e.classList.remove('press'))
}
function addStule(keyCode) {
    const KEY = document.querySelector(`.key[data-code="${keyCode}"]`);
    KEY.classList.add('press')
}

function typeCase(shift,capsLock){
    if (capsLock){
        return shift
    }else{
        return !shift
    }

}