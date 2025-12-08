const currencyEl_one = document.getElementById
('form-currency');
const currencyEl_two = document.getElementById
('form-currency2');
const amountEl_one = document.getElementById
('amount');
const amountEl_two = document.getElementById
('amount2');
const rateEl = document.getElementById
('exchnage-rate');


function calculate(){
    fetch(`https://v6.exchangerate-api.com/v6/6bd3f39bc42e4d6efa9a8579/latest/${currencyEl_one.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rate = data.conversion_rates[currencyEl_two.value];
        rateEl.innerText = `1 ${currencyEl_one.value} = ${rate} ${currencyEl_two.value}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
console.log('Calculating....');
}


currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

calculate();
