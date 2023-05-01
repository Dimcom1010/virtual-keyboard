
import { onPressAction } from './onPressAction.js'

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

// add keys EventListener
const _addEvent = (keyElement, value) => {
    keyElement.addEventListener("click", () => onPressAction(value))
}
