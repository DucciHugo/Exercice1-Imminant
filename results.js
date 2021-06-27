const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const bdate = document.getElementById('bdate')
const pnumber = document.getElementById('pnumber')
const mail = document.getElementById('mail')

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

fname.innerHTML = params.firstname
lname.innerHTML = params.lastname
bdate.innerHTML = params.date
pnumber.innerHTML = params.phone
mail.innerHTML = params.mail
console.log(params);