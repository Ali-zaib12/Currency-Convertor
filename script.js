const currency ={
    USD : 1,
    PKR : 280,
    EUR : 0.91,
    GBP : 1.76,
    INR : 74.57,
    CAD : 1.36,
    DKK : 6.69,
    JYP : 141.17,
    AUD : 1.47,
    EGP : 48.52,
    KRW : 1317.14,
    TRY : 34.05,
}

document.getElementById('Convertor-form').addEventListener('submit',function(e){ e.preventDefault();

    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value


    let fromAmount = currency [fromCurrency]
    let toAmount = currency [toCurrency]
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`
})


