const rusL = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
const enL = 'abcdefghijklmnopqrstuvwxyz'
const rusU= rusL.toUpperCase()
const enU = enL.toUpperCase()
const rus = rusL + rusU
const en = enL + enU

//input language detection function
export function languageDefinition(e){
    return rus.includes(e.key)?'ru':en.includes(e.key)?'eng':''
}
	
