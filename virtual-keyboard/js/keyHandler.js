import { pressShift,toUpperCase,toLowerCase } from './arrKeys.js'
import { drowKeyboaard } from './index.js'
import { onPressAction } from './keyClass.js'

let lowerCase=true

export function keyHandler(event) {
    if(event.type==="keydown"){
        const KEY=document.querySelector('.key[data-code="'+event.keyCode+'"]');
        KEY.classList.add('press')
    }
    if(event.type==="keyup"){
        const KEYS=document.querySelectorAll('.key');
        KEYS.forEach(e=>e.classList.remove('press'))
    }
    
    if (event.key === 'Shift') {
        if(!event.repeat)
        {pressShift();
        lowerCase?toUpperCase():toLowerCase();
        lowerCase=!lowerCase
        drowKeyboaard();}
    } else if(event.key === 'Tab'){
        if(!event.repeat && event.type==="keydown"){
            lowerCase?toUpperCase():toLowerCase();
            lowerCase=!lowerCase
            drowKeyboaard();
        }
    }
     else{
        if(event.type==="keydown"){
            onPressAction(event.key)
        }
    }
}