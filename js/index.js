import { createKey } from './keyClass.js'
import { init } from './init.js'
import { keyHandler } from './keyHandler.js'
import { arrayKeys } from './arrKeys.js'

// adding all the necessary elements to DOM
init()

//adding listeners to keyboard keystrokes
document.addEventListener('keydown', (event) => keyHandler(event));
document.addEventListener("keyup", (event) =>  keyHandler(event));

//redrawing
export function drowKeyboaard() {
  const KEYBOARD = document.querySelector('#keyboard');
  KEYBOARD.innerHTML = '';
  arrayKeys.forEach(e=>createKey(e));
}

drowKeyboaard()
