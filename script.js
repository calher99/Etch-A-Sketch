
//Initialization

function getSquares (){
    let squares = parseInt(prompt("Enter the number of squares (maximun 64):"));

    while( isNaN(squares) || squares <6 || squares >64){
        squares = parseInt(prompt("Enter a valid number for quares (maximun 64 and minmun 6):"));
    }
    return squares;
}

function setBoard (size , nsquares){
    const divContainer = document.querySelector('.container');
    for (let i=0 ; i < (nsquares*nsquares) ; i++){
        let newDiv= document.createElement('div');
        newDiv.classList.add('square');
        newDiv.setAttribute("style" , `width: ${size}px ; height:${size}px`);
        divContainer.appendChild(newDiv);
    }
    
}


//Hovering effect

function hoverPixel(){
    const sketch = document.querySelectorAll('.square');
    sketch.forEach(pixel => pixel.addEventListener('mouseover',changeColor));
}


//Change pixel color

function changeColor (e){
    e.target.classList.value = "hovered";
};

//Start game

const divStart = document.querySelector('.start');
divStart.addEventListener('click', runGame);

//Run program
function runGame (clear){
    const squares= getSquares();
    let pixelSize = nsquares => 640/nsquares;
    setBoard(pixelSize(squares), squares);
    hoverPixel();
}

