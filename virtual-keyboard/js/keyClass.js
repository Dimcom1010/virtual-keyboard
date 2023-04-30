export default class KeyClass {
    // методы класса
    constructor(value, width) {
        this.value = value;
        this.width = width;
    }
}

export const createKey = (key) => {
    const BODY = document.querySelector('#keyboard');
    const keyElement = document.createElement('button');
    keyElement.className = "key";
    keyElement.innerHTML = `${key.value}`;
    _addEvent(keyElement, key.value)
    BODY.append(keyElement);
}
export const onPressAction = (value) => {
    
    const TEXTAREA = document.querySelector('#textarea');
    let textareaValue=TEXTAREA.value
    TEXTAREA.value = textareaValue +value

}


const _addEvent = (keyElement, value) => {
    console.log(keyElement)
    keyElement.addEventListener("click", onPressAction.bind(this, value,keyElement))
}
