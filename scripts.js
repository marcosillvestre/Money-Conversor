const button = document.getElementById("button-conversor")
const select = document.getElementById("fluid-sellect")

 const dolar = 5.2
 const euro = 6.2
 const bit = 319485.80

const buttonConversor = ()=> {
    const inputReal = document.getElementById("currency-Input").value

    const realChange = document.getElementById("real-value")

    const fluidChange = document.getElementById("fluid-value")

    realChange.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL",
    }).format( inputReal)

    if (select.value=== '(USD) Dolar americano'){ 
        fluidChange.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD",
    }).format( inputReal / dolar)
    }


    if (select.value=== '(€) Euro') {
    fluidChange.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency:"EUR",
    }).format( inputReal / euro) 

}

<<<<<<< HEAD


=======
>>>>>>> d0f74d5d877eb769490dd6f66b9cc2a30d77ffa4
if (select.value=== 'Bitcoin'){ 
    fluidChange.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"BIT",
}).format( inputReal / bit)
}

<<<<<<< HEAD


}





 
=======
}

>>>>>>> d0f74d5d877eb769490dd6f66b9cc2a30d77ffa4
selectChange = ()=> {
    const inputReal = document.getElementById("currency-Input").value

    const realChange = document.getElementById("real-value")

    const fluidChange = document.getElementById("fluid-value")

const nameChange = document.getElementById("name-currency")
const changeFlag = document.getElementById("flag-currency")

if(select.value ==='(€) Euro' ){
    nameChange.innerHTML = "(€) Euro"} 
    
   if(select.value ==='(€) Euro' ) {
       changeFlag.src = "./assets/euro.png"} 
       


       if(select.value ==='Bitcoin' ){
        nameChange.innerHTML = "Bitcoin"} 
       


       if(select.value ==='Bitcoin' ) {
        changeFlag.src = "./assets/bitcoin.png1.png" }
        


       if (select.value=== '(USD) Dolar americano'){ 
        fluidChange.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD",
    }).format( inputReal / dolar)
    }


    if (select.value=== '(€) Euro') {
    fluidChange.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency:"EUR",
    }).format( inputReal / euro)
}     

if (select.value=== 'Bitcoin'){ 
    fluidChange.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"BIT",
}).format( inputReal / bit)
}

<<<<<<< HEAD
 
}







select.addEventListener('change', selectChange)
button.addEventListener('click', buttonConversor)
=======
}

select.addEventListener('change', selectChange)
button.addEventListener('click', buttonConversor)
>>>>>>> d0f74d5d877eb769490dd6f66b9cc2a30d77ffa4
