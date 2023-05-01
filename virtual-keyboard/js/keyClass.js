import { keyHandler } from './keyHandler.js'
export function createKey(key) {
    const keyboard = document.querySelector('#keyboard');
    const keyElement = document.createElement('button');
    keyElement.className = "key";
    keyElement.dataset.code = `${key.code}`;
    keyElement.style.gridColumn = `${key.width}`;
    keyElement.innerHTML = `${key.key}`;

    const subkey = document.createElement('div');
    subkey.className = "key__subkey";
    subkey.innerHTML = `${key.subkey}`;
    keyElement.appendChild(subkey);

    _addEvent(keyElement, key.key);
    keyboard.append(keyElement);
}

export function onPressAction(value) {

    const TEXTAREA = document.querySelector('#textarea');
    TEXTAREA.focus()
    const positionCaret = _getCaretPosition(TEXTAREA)
    const textareaValue = TEXTAREA.value

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
        // console.log(value);
    } else if (value === 'Win') {
        // console.log(value);
    } else if (value === 'Alt') {
        // console.log(value);
    } else if (value === '&#8656;') {
        TEXTAREA.setSelectionRange(positionCaret - 1, positionCaret - 1);
    } else if (value === '&#8658;') {
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);
    } else if (value === '&#8657;') {
        console.log(value);
    } else if (value === '&#8659;') {
        console.log(value);
    } else {
        TEXTAREA.value = [...textareaValue.split('').slice(0, positionCaret), value, ...textareaValue.split('').slice(positionCaret, Infinity)].join('')
        TEXTAREA.setSelectionRange(positionCaret + 1, positionCaret + 1);
    }
}

// нажатие мышью
const _addEvent = (keyElement, value) => {
    keyElement.addEventListener("click", () => onPressAction(value))
}

function _getCaretPosition(element) {
    if (element.selectionStart) {
        return element.selectionStart;
    } else if (document.selection) {
        element.focus();
        const range = document.selection.createRange();
        if (range == null) {
            return 0;
        }
        const rangeElement = element.createTextRange(),
            ranges = rangeElement.duplicate();
        rangeElement.moveToBookmark(range.getBookmark());
        ranges.setEndPoint('EndToStart', rangeElement);
        return ranges.text.length;
    }
    return 0;
}