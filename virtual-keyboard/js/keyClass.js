export default class KeyClass {
    // методы класса
    constructor(value, width) {
        console.log('constructor');
        this.value = value;
        this.width = width;
    }
    
}

export function createKey(key) {
    console.log('createKey')
    const body = document.querySelector('#body');
    const keyElement = document.createElement('div');
    keyElement.className = "key";
    keyElement.innerHTML = `${key.value}`;
    body.append(keyElement);

}
