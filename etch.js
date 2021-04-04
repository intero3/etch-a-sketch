const container = document.getElementById("container");
const body = document.querySelector("body");
const button = document.createElement('button');
const colorButton = document.createElement('button');

button.textContent = "Reset Grid";
button.className = "resetButton";
body.append(button);

colorButton.textContent = 'Random Color';
colorButton.classList.add('randomColor');
body.append(colorButton);


let cell = document.createElement('div');

function makeDiv(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols); 

    for(let i=0; i < (rows * cols); i++){
        cell = document.createElement('div');
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor= 'black';
        })
        container.append(cell);
    }
}

const gridItem = document.querySelectorAll('div');
gridItem.forEach((gridItem) => gridItem.className = "gridItem");

makeDiv(16, 16);


let inputNumber;

button.addEventListener('click', () => {

   let child = container.lastElementChild;
   while (child){
       container.removeChild(child);
       child = container.lastElementChild;
   }

    inputNumber = parseInt(window.prompt('Put Grid Layout here', ''));
        let newChildren = makeDiv(inputNumber, inputNumber);
    })

    let randomColor = () =>{
        let color = "rgba(";
        for(let i=0; i<3; i++){
            color += Math.floor(Math.random() * 255) + ",";
        }
        return color + "1)";
    }

    colorButton.addEventListener('click', () =>  {
        let child = container.lastElementChild;
        let childList = container.childNodes;
        for(let i=0; i<childList.length; i++){
            childList.forEach(child => {
                child.addEventListener('mouseover', () =>{
                    child.style.backgroundColor = randomColor();
                })
            })
        }


    })


   
