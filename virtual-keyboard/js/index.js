

import KeyClass, { createKey } from './keyClass.js'

const BODY = document.querySelector('#body');

const TEXTAREA=document.createElement('textarea');
console.log('**',TEXTAREA)
TEXTAREA.id='textarea'

const KEYBOARD=document.createElement('div');
KEYBOARD.id='keyboard'



BODY.append(TEXTAREA)
BODY.append(KEYBOARD)
console.log('**',BODY)
const k = new KeyClass('E', 100)
createKey(k)