const tilesEl = document.querySelector('.tile-container')
const keyboardEl = document.querySelector('.keyboard-container')


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
    keyboardEl.append(buttonEl)
    
})

const buttonClick = (key) => {

    console.log('clicked')
 }




//iterated through our array using forEach method to create Button element for eack key
//assigned a text key using the textContent 
//gave our button id using the setAttribute method
//added an event listener for our button 
//finally apended the button to our keyboard using the append method. 




const guessRows = [

['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],
['', '', '', '', ''],

]





guessRows.forEach((guessRow, guessRowIndex) => {
    const rowEl = document.createElement('divs')
    rowEl.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {                               // for each inside for each looing inside a loop  
    const tileEl = document.createElement('div');
    tileEl.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
    rowEl.appendChild(tileEl)
   
    })   
    tilesEl.appendChild(rowEl);  

})

//for each empty row create a div and give id + index(for numbering) using the setAttribute method
// append created div element to the tiles element.
//for each tile row create a div for the tiles and assign id and index using the setAtrribute method
//add tiles to the tiles row using append method
//add class tag using classList to be used with css for styling 

