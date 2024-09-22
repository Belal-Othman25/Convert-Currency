function convertCurrency(){
  const amount = document.querySelector(".amount").value
  const from = document.querySelector(".from").value
  const to = document.querySelector(".to").value
  const resultDiv = document.querySelector(".result")
  if(amount && from && to){
fetch(`https://v6.exchangerate-api.com/v6/105cdfa15e560db24351d589/latest/${from}`)
.then((response)=> response.json())
.then((data)=> {
  const rate = data.conversion_rates[to];
  const result = (amount * rate).toFixed(2);
  resultDiv.innerHTML = `${amount} ${from} = ${result} ${to}`
  showNotifcation()
}).catch((error)=>{
  resultDiv.innerHTML = `Someything Went Wrong ${error}`
})
  }else{
    resultDiv.innerHTML = "Please Fill All Fields"
  }

}
function showNotifcation(){
  const notification = document.querySelector("#notifcation")
  notification.style.display = "block"
  setTimeout(() => {
     notification.style.display = "none"
  }, 3000);
}
const apiKey = '105cdfa15e560db24351d589'; // هنا بتحط مفتاح الـ API بتاعك
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/EGP`;
// Function to update currency values
async function updateCurrency() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.conversion_rates) {
    const usdToEgp = 1 / data.conversion_rates.USD;
    const eurToEgp = 1 / data.conversion_rates.EUR;
    const kwdToEgp = 1 / data.conversion_rates.KWD;
    const sarToEgp = 1 / data.conversion_rates.SAR;
    const cnyToEgp = 1 / data.conversion_rates.CNY;
    const aedToEgp = 1 / data.conversion_rates.AED;

    document.getElementById('usd').innerText = `1 USD = ${usdToEgp.toFixed(2)} EGP`;
    document.getElementById('eur').innerText = `1 EUR = ${eurToEgp.toFixed(2)} EGP`;
    document.getElementById('sar').innerText = `1 SAR = ${sarToEgp.toFixed(2)} EGP`; // العملة المحلية
    document.getElementById('kwd').innerText = `1 KWD = ${kwdToEgp.toFixed(2)} EGP`;
    document.getElementById('cny').innerText = `1 CNY = ${cnyToEgp.toFixed(2)} EGP`; // العملة المحلية
    document.getElementById('aed').innerText = `1 AED = ${aedToEgp.toFixed(2)} EGP`;
  }
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
}

updateCurrency();