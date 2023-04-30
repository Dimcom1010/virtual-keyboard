

export function init() {

    const BODY = document.querySelector('#body');
    const TEXTAREA = document.createElement('textarea');
    TEXTAREA.id = 'textarea'
    TEXTAREA.focus()

    const KEYBOARD = document.createElement('div');
    KEYBOARD.id = 'keyboard'
    BODY.append(TEXTAREA)
    BODY.append(KEYBOARD)
}

