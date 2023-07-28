let container = document.querySelector(".container");
localStorage.setItem('border',false)


const draw = (dimension) => {   
    let grid = 483/dimension;
    let fragment = document.createDocumentFragment();

    for(let i = 1;i <= dimension;i++){
        let index = 1 
        while(index <= dimension){          
          let div = document.createElement("div");
          div.setAttribute("data-dark","100")
          div.classList.add("square");
          fragment.appendChild(div) ;
          index++;
        }
    } 
     
        container.appendChild(fragment);
        drawSquare(".square",grid)  
} 

const drawSquare = (clases,grid) =>{
    let nodo = document.querySelectorAll(clases);
    nodo.forEach((el)=>{
         el.style.width = `${grid}px`;
         el.style.height = `${grid}px`;
         localStorage.getItem('border') === "true" 
          ? el.classList.add("active-border") 
          : el.classList.remove("active-border");
    })
} 

//funcion de los colores random

const randomRgb = () => Math.round(Math.random() * (255 - 0 + 1) + 0 ).toFixed(0);    

// codigo para el input de rango
let range = document.querySelector("#range"),
    rangeValue = document.querySelector(".range-value");

    rangeValue.innerText = range.value;

    range.addEventListener("input",e => {
  
        rangeValue.innerText = range.value ;
        container.innerText = "";
        draw(range.value);

})

/* Selecionamos el color del input color*/

let color = document.getElementById("input-color")
  

color.addEventListener('change',e => {
    localStorage.setItem("color",e.target.value)
})

/* Seccion de botones */
let btns = document.querySelector(".buttons")
console.log(btns)
 
btns.addEventListener("click",e => {
    let squares = document.querySelectorAll(".square");
    
    //boton para limpiar la pizarra
    if(e.target.matches(".reset")){
        squares.forEach((square) =>{
            square.style.backgroundColor = "#fefefe"
        })
        localStorage.removeItem("opacity-mode")
    }
    //boton para eliminar el local storagede 'random mode'
    if(e.target.matches(".color-mode")){
        localStorage.removeItem("randomMode");
        localStorage.setItem("color",color.value);
    }

    //Boton para usar la funcion de colores aleatorios
    if(e.target.matches(".random-mode")){
        localStorage.setItem("randomMode",true)
        localStorage.setItem("color",`rgb(${randomRgb()},${randomRgb()},${randomRgb()})`)
    }

    //boton para hacer uso de la funcion de opacidad
    if(e.target.matches(".opacity-mode")){
        localStorage.setItem("opacity-mode","active")     
    }

    //boton grid-lines
    if(e.target.matches(".grid-lines")){   
         squares.forEach((square) => {
             square.classList.toggle("active-border");         
            if(square.className.includes("active-border")){
                 localStorage.setItem("border",true);
            }else{
                 localStorage.setItem("border",false);
        }
    })
    }


})
/*Seccion de eventos para pintar*/

const paintSquare = (e) => {
    localStorage.getItem("randomMode") === "true" 
        ? e.target.style.backgroundColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`
        : e.target.style.backgroundColor = localStorage.getItem("color");
            
        
        /*  localStorage.getItem("opacity-mode") === "active" 
            ? e.target.style.filter = `brightness(${Number(e.target.dataset.dark) - 10}%)`  */
}

const mousePosition = (e) => {
    console.log("entra a mouse Position")
    e.target.style.backgroundColor = localStorage.getItem("color");
    container.addEventListener("mouseover",paintSquare);
}

const removeEvent = () => {
    container.removeEventListener('mouseover',paintSquare);
}

//cuando hacemos click en un square se muestra mientras mantengamos presionado el boton sino se remueve el evento
container.addEventListener("mousedown", mousePosition);
container.addEventListener("mouseup",removeEvent);

window.addEventListener("DOMContentLoaded",e => {
    draw(8);
    localStorage.setItem("color",color.value)

});