import { keyHandler } from './keyHandler.js'
import { getCaretPosition } from './getCaretPosition.js'

//the function of processing pressed keys
export function onPressAction(value) {
    const TEXTAREA = document.querySelector('#textarea');
    const positionCaret = getCaretPosition(TEXTAREA);
    const textareaValue = TEXTAREA.value;
    TEXTAREA.focus();

    if (value === 'Backspace') {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret - 1), ...textareaValue.split('').slice(positionCaret, Infinity)].join('');
        TEXTAREA.setSelectionRange(positionCaret - 1, positionCaret - 1);

    } else if (value === 'ENTER') {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret), '\n', ...textareaValue.split('').slice(positionCaret, Infinity)].join('')
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);

    } else if (value === 'DEL') {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret), ...textareaValue.split('').slice(positionCaret + 1, Infinity)].join('')
        TEXTAREA.setSelectionRange(positionCaret, positionCaret);

    } else if (value === 'Tab') {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret), '\t', ...textareaValue.split('').slice(positionCaret, Infinity)].join('')
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);

    } else if (value === 'Caps Lock') {
        keyHandler({ key: 'CapsLock', type: "keydown" })

    } else if (value === 'Shift') {
        keyHandler({ key: value, type: "keydown" })

    } else if (value === 'Ctrl') {
        // the functionality is not implemented

    } else if (value === 'Win') {
        // the functionality is not implemented

    } else if (value === 'Alt') {
        // the functionality is not implemented

        //arrow left
    } else if (value === '&#8656;') {
        TEXTAREA.setSelectionRange(positionCaret - 1, positionCaret - 1);

        //arrow right
    } else if (value === '&#8658;') {
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);

        //arrow up
    } else if (value === '&#8657;') {
        // the functionality is not implemented

        //arrow down
    } else if (value === '&#8659;') {
        // the functionality is not implemented
    } else {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret), value, ...textareaValue.split('').slice(positionCaret, Infinity)].join('')
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);
    }
}


