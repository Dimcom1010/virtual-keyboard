

import { pressShift,toUpperCase,toLowerCase } from './arrKeys.js'
import { drowKeyboaard } from './index.js'
import { onPressAction } from './keyClass.js'


let lowerCase=true


export function keyHandler(event) {
    
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
        onPressAction(event.key,false)
    }



}
