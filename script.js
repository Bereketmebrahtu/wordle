const tiles = document.querySelector('.tile-container')
const keyboard = document.querySelector('.keyboard-container')


const keys = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z',
'ENTER', 

]




keys.forEach(key => {
    const buttonEl = document.createElement('button')
    buttonEl.textContent = key
    keyboard.append(buttonEl)
    
})