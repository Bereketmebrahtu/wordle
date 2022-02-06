const tiles = document.querySelector('.tile-container')
const keyboard = document.querySelector('.keyboard-container')

//grabbed HTML elements using class names


const keys = [
'Q',
'W',
'E',
'R',
'T',
'Y',
'U',
'I',
'O',
'P',
'A',
'S',
'D',
'F',
'G',
'H',
'J',
'K',
'L',
'ENTER',
'Z',
'X',
'C',
'V',
'B',
'N',
'M',
'<='

]

//created an array to hold our keys 


keys.forEach(key => {
    const buttonEl = document.createElement('button')
    buttonEl.textContent = key
    buttonEl.setAttribute('id', key)
    buttonEl.addEventListener('click', () => buttonClick(key))
    keyboard.append(buttonEl)
    
})

let currentRow = 0
let currentTile = 0

const buttonClick = (key) => {

    addLetter(key)
    currentTile++

}

const addLetter = (key) => {
    const tile = document.getElementById('emptyRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = key
    rowsEl[currentRow][currentTile] = key
    // currentTile++
}

//iterated through our array using forEach method to create Button element for eack key
//assigned a text key using the textContent 
//gave our button id using the setAttribute method
//added an event listener for our button 
//finally apended the button to our keyboard using the append method. 




const rowsEl = [

['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],

]



rowsEl.forEach((emptyRow, emptyRowIndex) => {
    const tileRowsEl = document.createElement('div')
    tileRowsEl.setAttribute('id', 'tilerow-' +  emptyRowIndex)
   rowsEl.forEach((row, rowIndex) => {
       const tileEl = document.createElement('div')
       tileEl.setAttribute('id', 'emptyRow-' + rowIndex + '-tile-' + rowIndex)
       tileRowsEl.append(tileEl)
       tileEl.classList.add('tile')
   })

    tiles.append(tileRowsEl)

})


//for each empty row create a div and give id + index(for numbering) using the setAttribute method
// append created div element to the tiles element.
//for each tile row create a div for the tiles and assign id and index using the setAtrribute method
//add tiles to the tiles row using append method
//add class tag using classList to be used with css for styling 

