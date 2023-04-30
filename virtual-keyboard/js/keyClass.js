export default class KeyClass {
    // методы класса
    constructor(value, width) {
        this.value = value;
        this.width = width;
    }
}

export function createKey(key) {
    const BODY = document.querySelector('#keyboard');
    const keyElement = document.createElement('button');
    keyElement.className = "key";
    keyElement.style.gridColumn = `${key.width}`;
    keyElement.innerHTML = `${key.value}`;
    _addEvent(keyElement, key.value)
    BODY.append(keyElement);
}
export function onPressAction(value,keyboard) {

    const TEXTAREA = document.querySelector('#textarea');
    TEXTAREA.focus()
    let textareaValue = TEXTAREA.value

    if (value === 'Backspace') {
        // TEXTAREA.value = textareaValue.slice(0, -1)
        const positionCaret = _getCaretPosition(TEXTAREA)
        const value=TEXTAREA.value
        console.log('positionCaret',positionCaret)
        console.log('value pre|',value)

        console.log('value post|',value)

        // TEXTAREA.value = textareaValue.substr( 0, positionCaret ) + textareaValue.substr( positionCaret + value.length )
        // TEXTAREA.setSelectionRange(positionCaret+1,positionCaret+1);
    } else if (value === 'Enter') {
        TEXTAREA.value = textareaValue + '\n'
    } else if (value === 'Control') {
        console.log(value);
    } else if (value === 'Meta') {
        console.log('WIN');
    } else if (value === 'Alt') {
        console.log(value);
    } else if (value === 'ArrowLeft') {
        console.log(value);
    } else if (value === 'ArrowRight') {
        console.log(value);
    } else if (value === 'ArrowUp') {
        console.log(value);
    } else if (value === 'ArrowDown') {
        console.log(value);
    } else {
        if(keyboard){
            const positionCaret = _getCaretPosition(TEXTAREA)
            TEXTAREA.value = textareaValue.substr( 0, positionCaret ) + value  + textareaValue.substr( positionCaret-1 + value.length )
            TEXTAREA.setSelectionRange(positionCaret+1,positionCaret+1);
        }

       
    }
}



const _addEvent = (keyElement, value) => {
    keyElement.addEventListener("click", onPressAction.bind(this, value))
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
