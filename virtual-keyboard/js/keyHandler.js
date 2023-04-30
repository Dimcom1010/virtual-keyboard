
// import { onPressAction} from './keyClass.js'

const arr=[]
export const keyHandler = (event) => {
    arr.push({ code:event.keyCode,key:event.key ,width:1})
    // onPressAction(event.key`Code)
    // function checkPhoneKey(key) {
    
    //     return ((key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    //       key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace')?key:'';
    //   }
}
