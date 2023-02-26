const rateEl = document.getElementById("rate");                                // console.log(rateEl);
const swapEl = document.getElementById("swap");                                // console.log(swapEl);
const currencyOneEl = document.getElementById("currency-one");                 // console.log(currencyOneEl);
const currencyTwoEl = document.getElementById("currency-two");                 // console.log(currencyTwoEl);
const amountOneEl = document.getElementById("amount-one");                     // console.log(amountOneEl);
const amountTwoEl = document.getElementById("amount-two");                     // console.log(amountTwoEl);

let dataFromBack = {};

const getData = () => {
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;

    fetch(
        `https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currencyOne}`
    )
    .then((res) => res.json())
    
    .then((data) => {
        console.log(data);
        const { conversion_rates } = data;
        dataFromBack = { ...conversion_rates };
      
        calculateRates(currencyTwo, conversion_rates);
        rateEl.innerText = `1 ${currencyOne} = ${conversion_rates[currencyTwo]} ${currencyTwo}  `});
};


const calculateRates = (currencyTwo, data) => {
const rate = data[currencyTwo];
amountTwoEl.value = (+amountOneEl.value * rate).toFixed(2);
};

const runCalculate = () => calculateRates(currencyTwoEl.value, dataFromBack);

getData()
const over = function(){
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;
    currencyTwoEl.value = currencyOne
    currencyOneEl.value = currencyTwo
}
swapEl.addEventListener('click',function(){
    over()
    runCalculate()
    getData()
})

amountOneEl.addEventListener("input", runCalculate);
currencyOneEl.addEventListener("change", getData);
currencyTwoEl.addEventListener("change", runCalculate);


