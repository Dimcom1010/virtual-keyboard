

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

    text.innerHTML='<p>Добрый день) Раскладка меняется в зависимости от вводимы символов при вводе кириллицы она поменяется на русскую раскладку при вводе с клавиатуры латинских символов раскладка поменяется на английскую </p><p>Ещё один нюанс у меня на клавиатуре есть только правая клавиша <b>Win</b> у вас скорее всего есть и правая и левая поэтому просьба тестировать нажатиеименно правой клавиши) спасибо!</p><p>Hi! The layout changes depending on the characters you enter when you type Cyrillic, it will change to the Russian layout when you type Latin characters from the keyboard, the layout will change to English</p><p>I have only the right <b> Win</b> key on my keyboard, you most likely have both the right and left, so please test pressing the right key by name) thank you!</p>'
    
    //append textarea and keyboard in DOM
    const BODY = document.querySelector('#body');
    BODY.append(text)
    BODY.append(textarea)
    BODY.append(keyboard)
    
}

