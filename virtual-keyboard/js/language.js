const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
const rusUpper = rusLower.toUpperCase()
const enLower = 'abcdefghijklmnopqrstuvwxyz'
const enUpper = enLower.toUpperCase()
const rus = rusLower + rusUpper
const en = enLower + enUpper

export function languageDefinition(e){
    if (rus.includes(e.key)) {
        return 'ru'
    } else if (en.includes(e.key)) {
        return 'eng'
    } else {
        return ''
    }
}
	
