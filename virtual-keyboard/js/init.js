

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

    text.innerHTML='<p>Добрый день) Раскладку клавиатуры можете поменять при помощи сочетаний клавиш <b> Shift + ALT (левые)</b>, раскладка применится при нажатии на любую букву на клавиатуре</p><p>Ещё один нюанс у меня на клавиатуре есть только правая клавиша <b>Win</b> у вас скорее всего есть и правая и левая поэтому просьба тестировать нажатиеименно правой клавиши) спасибо!</p><p>Hi! You can change the keyboard layout using the keyboard shortcuts <b> Shift + ALT  (left)</b>, the layout will be applied when you click on any letter on the keyboard</p><p>I have only the right <b> Win</b> key on my keyboard, you most likely have both the right and left, so please test pressing the right key by name) thank you!</p>'
    
    //append textarea and keyboard in DOM
    const BODY = document.querySelector('#body');
    BODY.append(text)
    BODY.append(textarea)
    BODY.append(keyboard)
    
}

