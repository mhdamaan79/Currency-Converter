const currency1 = document.getElementById("currency-1");

const currency2 = document.getElementById("currency-2");

const conversionAmount = document.getElementById("amount");

const submit = document.getElementById("submit-btn");

const exchangeRate = document.getElementById("conversion-result");

updateRate();

// fetch currency rates
function updateRate() {
    let p = fetch(`https://v6.exchangerate-api.com/v6/f45fb1def8219c83a92b8527/latest/${currency1.value}`)
    p.then((response) => {
        return response.json()
    }).then((data) => {
        // console.log(data);
        const rate = data.conversion_rates[currency2.value]
        // console.log(rate)
        let convertedAmount = (conversionAmount.value * rate).toFixed(3);
        submit.innerText = `${convertedAmount}`;
        exchangeRate.innerText = `1 ${currency1.value} = ${rate + " " + currency2.value}`
    })
}

// when currency 1 change
currency1.addEventListener("change", (event) => {
    currency1.value = `${event.target.value}`;
    updateRate();
});

// when currency 2 change
currency2.addEventListener("change", (event) => {
    currency2.value = `${event.target.value}`;
    updateRate()
});

// when conversion amount change
conversionAmount.addEventListener("input", (event) => {
    conversionAmount.value = `${event.target.value}`;
    updateRate()
});

