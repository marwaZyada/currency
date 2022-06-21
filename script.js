let from = document.querySelector("#from")
let to = document.querySelector("#to")
let calc = document.getElementById("calc")
let exchange = document.getElementById("btn")
let txt = document.getElementById("txt")
let x = 0

window.onload = () => {
    fetch('https://v6.exchangerate-api.com/v6/69ffcf76730a1e7d2dd2f2ed/latest/USD')
        .then(res => res.json())
        .then(data => {
            let country = Object.keys(data.conversion_rates)
            for (let i = 0; i < country.length; i++) {
                let option1 = document.createElement("option")
                let option2 = document.createElement("option")
                option1.text = country[i];
                option2.text = country[i];
                from.add(option1)
                to.add(option2)



            }
        })
}
calculate = () => {
    let currencyOne = from.value;
    let currencyTwo = to.value;
    fetch(`https://v6.exchangerate-api.com/v6/69ffcf76730a1e7d2dd2f2ed/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            x = data.conversion_rates[currencyTwo]
            calc.innerHTML = `1 ${currencyOne} = ${x}${currencyTwo}`
        })
    return x


}
handlExchange = () => {
    calc.innerHTML = (x * parseInt(txt.value)).toFixed(2)
}


from.addEventListener("change", calculate)
to.addEventListener("change", calculate)
exchange.addEventListener("click", handlExchange)