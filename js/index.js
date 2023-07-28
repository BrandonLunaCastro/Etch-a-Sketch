let container = document.querySelector(".container");

const draw = (dimension) => {
    
    let grid = 483/dimension;
    let fragment = document.createDocumentFragment();

    for(let i = 1;i <= dimension;i++){
        let index = 1 
        while(index <= dimension){          
          let div = document.createElement("div");
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
    })
} 

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

let color = document.getElementById("input-color"),
    colorSelected = color.value

color.addEventListener('change',e => {
    colorSelected = e.target.value; 
})


/*Seccion de eventos para pintar*/

const paintSquare = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = colorSelected
    console.log(colorSelected)
}

const mousePosition = (e) => {
    console.log("entra a mouse Position")
    e.target.style.backgroundColor = colorSelected
    container.addEventListener("mouseover",paintSquare)
}

const removeEvent = () => {
    container.removeEventListener('mouseover',paintSquare)
}

//cuando hacemos click en un square se muestra mientras mantengamos presionado el boton sino se remueve el evento
container.addEventListener("mousedown", mousePosition)
container.addEventListener("mouseup",removeEvent)

window.addEventListener("DOMContentLoaded",e => {
    draw(8);

});