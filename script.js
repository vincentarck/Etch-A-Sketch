class EtchASketch{
	constructor(sizeBoard, setColor, setMode){
		this.board = sizeBoard
		this.color = setColor
		this.mode = ''
	}

	initialBoard(){
		board.style.gridTemplateColumns = `repeat(${this.board}, 1fr)`;
		board.style.gridTemplateRows = `repeat(${this.board}, 1fr)`;
		for(let i=0; i<this.board*this.board; i++){
			let div = document.createElement('div')
			div.setAttribute('id', 'box1')
			div.classList.add('box');
			div.addEventListener('mouseover',this.coloring)
			board.appendChild(div)
		}
	}

	coloring(e){
		if(etchAsketch.mode === 'normal'){
			e.target.style.background = etchAsketch.color
		}else if(etchAsketch.mode === 'random'){
			let randomR = Math.floor(Math.random() * 256)
			let randomG = Math.floor(Math.random() * 256)
			let randomB = Math.floor(Math.random() * 256)
			e.target.style.background = `rgba(${randomR},${randomG},${randomB})`
		}else if(etchAsketch.mode === 'erase'){
			e.target.style.background = etchAsketch.color
		}
		else{
			e.target.style.background = etchAsketch.color
		}
	}

	reloadGrid(){
		board.innerHTML = '';
		this.initialBoard(etchAsketch.board)
	}

}

const board = document.getElementById('board') //
const changeColor = document.getElementById('colorWell')
const randomButton = document.getElementById('random-color')
const eraseButton = document.getElementById('eraser')
const clearButton = document.getElementById('clear')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')


let etchAsketch = new EtchASketch(16, '#333333', 'normal');

changeColor.addEventListener('change', (e)=>{
	etchAsketch.mode = 'normal'
	etchAsketch.color = e.target.value
})

randomButton.addEventListener('click', (e)=>{
	etchAsketch.mode = 'random'
})

eraseButton.addEventListener('click', ()=>{
	etchAsketch.mode = 'erase'
	etchAsketch.color = 'white';

})

clearButton.addEventListener('click', ()=>{
	let container = document.querySelectorAll('#box1')
	container.forEach(box =>{
		box.removeAttribute('style')
	})
})

sizeSlider.addEventListener('mousemove', (e)=>{
	sizeValue.innerText = `${e.target.value} x ${e.target.value}`
	etchAsketch.board = e.target.value
	etchAsketch.reloadGrid()
})

window.onload = () => {
	etchAsketch.initialBoard()
	changeColor.value = "#333333"
	sizeSlider.value = 16
}
