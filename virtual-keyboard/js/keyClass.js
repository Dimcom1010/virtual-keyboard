export default class KeyClass {
    // методы класса
    constructor(value, width) {
        this.value = value;
        this.width = width;
    }
}

export const createKey = (key) => {
    const body = document.querySelector('#keyboard');
    const keyElement = document.createElement('button');
    keyElement.className = "key";
    keyElement.innerHTML = `${key.value}`;
    _addEvent(keyElement, key.value)
    body.append(keyElement);
}
const _onPressAction = (value,keyElement) => {
    console.log(value)

}


const _addEvent = (keyElement, value) => {
    console.log(keyElement)
    keyElement.addEventListener("click", _onPressAction.bind(this, value,keyElement))
}
