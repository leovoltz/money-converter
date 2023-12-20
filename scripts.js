const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 4.86
const euro = 5.36
const bitcoin = 215.645

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    const bitcoinValue = inputReais / bitcoin

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: "BRL" }
    ).format(inputReais)

    if (select.value === 'US$ - Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: "USD" }
        ).format(inputReais / dolar)
    }
    else if (select.value === '€ - Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: "EUR" }
        ).format(inputReais / euro)
    }
    else if (select.value === '₿ - Bitcoin'){
        currencyValueText.innerHTML = bitcoinValue.toFixed(5)
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ - Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/img/estados-unidos.svg"
    }

    else if (select.value === '€ - Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.svg"
    }

    else if (select.value === '₿ - Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img/bitcoin.png"
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)