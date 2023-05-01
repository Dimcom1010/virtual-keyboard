

export function init() {
    //creature textarea
    const textarea = document.createElement('textarea');
    textarea.id = 'textarea'
    textarea.focus()

    //creature keyboard
    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard'

    //creature keyboard
    const text = document.createElement('div');
    text.id = 'text'

    text.innerHTML='<p>Добрый день) Раскладку клавиатуры можете поменять при помощи сочетаний клавиш <b> Shift + ALT </b>, раскладка применится при нажатии на любую букву на клавиатуре</p><p>Hi! You can change the keyboard layout using the keyboard shortcuts <b> Shift + ALT </b>, the layout will be applied when you click on any letter on the keyboard</p>'
    
    //append textarea and keyboard in DOM
    const BODY = document.querySelector('#body');
    BODY.append(text)
    BODY.append(textarea)
    BODY.append(keyboard)
    
}

