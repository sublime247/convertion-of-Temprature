const farh =document.querySelector('.Farh')
const celc =document.querySelector('.input')
const F =document.querySelector('.farh')
const Cel=document.querySelector('.celc')



const calFtoC=(enterFarh)=>{
   let formula = (enterFarh-32)*5/9;
         celc.value=formula
}

const calCtoF=(enterCelc)=>{
    let formula= 32+(9/5 * enterCelc)
    F.value=formula
}

Cel.addEventListener('keyup', e=>{
    e.preventDefault()
    const enterCelc=Cel.add.value.trim()
    if(enterCelc.length){
        calCtoF(enterCelc)
    }else if(!enterCelc.length){
        farh.reset()
    }
})


farh.addEventListener('keyup', (e)=>{
    e.preventDefault()
    const enterFarh=farh.Fahrenheit.value.trim()
    if(enterFarh.length){
        calFtoC(enterFarh) 
    }else if(!enterFarh.length){
        Cel.reset()
    }
});

