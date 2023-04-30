

import KeyClass, { createKey } from './keyClass.js'
import { init } from './init.js'
import { keyHandler } from './keyHandler.js'
import { arrayKeys } from './arrKeys.js'


init()

document.addEventListener('keydown', (event) => keyHandler(event)
);
document.addEventListener("keyup", (event) => {if (event.key === 'Shift') { keyHandler(event) }});

//add keys on keybord
export function drowKeyboaard() {
  const KEYBOARD = document.querySelector('#keyboard');
  KEYBOARD.innerHTML = ''
  arrayKeys.forEach(e => {
    createKey(new KeyClass(e.key, e.width))
  })
}
drowKeyboaard()
