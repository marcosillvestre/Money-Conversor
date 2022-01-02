const button = document.getElementById("button-conversor")
const select = document.getElementById("fluid-sellect")



const buttonConversor =  async ()=> {
    const inputReal = document.getElementById("currency-Input").value

    const realChange = document.getElementById("real-value")

    const fluidChange = document.getElementById("fluid-value")

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    

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



if (select.value=== 'Bitcoin'){ 
    fluidChange.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency:"BIT",
}).format( inputReal / bitcoin)
}



}

selectChange = async ()=> {

    const inputReal = document.getElementById("currency-Input").value

    const fluidChange = document.getElementById("fluid-value")

const nameChange = document.getElementById("name-currency")
const changeFlag = document.getElementById("flag-currency")

const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())


                                                const dolar = data.USDBRL.high
                                                const euro = data.EURBRL.high
                                                const bitcoin = data.BTCBRL.high

       if(select.value ==='(€) Euro' ){
       nameChange.innerHTML = "(€) Euro"} 
    
       if(select.value ==='(€) Euro' ) {
       changeFlag.src = "./assets/euro.png"} 

       if(select.value ==='(USD) Dolar americano' ){
        nameChange.innerHTML = "(USD) Dolar americano"} 
        
       if(select.value ==='(USD) Dolar americano' ) {
           changeFlag.src = "./assets/estados-unidos (1) 1.png"}
       
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
}).format( inputReal / bitcoin)
    }

}


select.addEventListener('change', selectChange)
button.addEventListener('click', buttonConversor)
