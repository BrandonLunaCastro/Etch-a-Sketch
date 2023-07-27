let container = document.querySelector(".container")
,tamanio = 16;


const draw = (dimension) => {
    
    let grid = 483/dimension;
    let fragment = document.createDocumentFragment();

    for(let i = 1;i <= dimension;i++){
        let index = 1 

        while(index <= dimension){
            
              let div = document.createElement("div")
    
              div.classList.add("square")
              fragment.appendChild(div) 
              
               
                index++;
            }
           
           } 
           let clone = document.importNode(fragment)
           container.appendChild(fragment)
        drawSquare(".square",grid)  
} 

const drawSquare = (clases,grid) =>{
    let nodo = document.querySelectorAll(clases)
    nodo.forEach((el)=>{
         el.style.width = `${grid}px`
         el.style.height = `${grid}px`
     
    })
} 

let range = document.querySelector("#range"),
    rangeValue = document.querySelector(".range-value")

    rangeValue.innerText = range.value

    range.addEventListener("input",e => {
  
        rangeValue.innerText = range.value 
        container.innerText = ""
        draw(range.value)

})

 window.addEventListener("DOMContentLoaded",draw(5))

/* let btns = document.querySelectorAll("[data-longitud]")
console.log(btns)
    btns.forEach((btn)=>{
        btn.addEventListener("click",e => {
            tamanio = Number(e.target.getAttribute("data-longitud"))
            container.innerText = ""
            draw(tamanio)
        })

    })
 */