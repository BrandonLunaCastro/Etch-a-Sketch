let container = document.querySelector(".container")
,tamanio = 16;


const draw = (dimension) => {
    let grid = 664/dimension;
    console.log(grid)
    let div = document.createElement("div")
    div.classList.add("div");
    document.querySelector('.div')
    /* clase.style.width = grid,'px'
    clase.style.height = grid,'px'

    container.appendChild(div)
 */
    console.log(document.querySelector(div))
/*  

    for(let i = 1;i <= dimension;i++){
        let index = 1 

        while(index <= dimension){
            
                
                container.appendChild(div);
                index++;

            }
               
                
            
            
           
           } */
     
} 





let range = document.querySelector("#range"),
    rangeValue = document.querySelector(".range-value")

    rangeValue.innerText = range.value

    range.addEventListener("input",e => {
  
        rangeValue.innerText = range.value 
        draw(range.value)

})

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