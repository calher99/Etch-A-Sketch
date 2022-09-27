
//Initialization

const divContainer = document.querySelector('.container');

function getSquares (){
    let squares = parseInt(prompt("Enter the number of squares (maximun 64):"));

    while( isNaN(squares) || squares <6 || squares >64){
        squares = parseInt(prompt("Enter a valid number for quares (maximun 64 and minmun 6):"));
    }
    return squares;
}

const squares= getSquares();


const pixelSize = nsquares => 640/nsquares;
const size= pixelSize(squares);


for (let i=0 ; i < (squares*squares) ; i++){
    let newDiv= document.createElement('div');
    newDiv.classList.add('square');
    newDiv.setAttribute("style" , `width: ${size}px ; height:${size}px`);
    divContainer.appendChild(newDiv);
}

//Hovering effect

const sketch = document.querySelectorAll('.square');
sketch.forEach(pixel => pixel.addEventListener('mouseover',changeColor));


//Change pixel color

function changeColor (e){
    e.target.classList.value = "hovered";
};
