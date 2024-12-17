// Task 1

let ownerName = prompt("Введіть ваше ім'я:");
let accountNumber = Number(prompt("Введіть номер карти 16 цифер :"));
let balance = Number(prompt("Введіть початковий баланс рахунку:"));

if(accountNumber.lenght < 16){
} else {
    "Ви ввели неправельний номер карти"
}

const bankAccount = [ownerName, accountNumber, balance]

let deposit = Number(prompt("Поповнення рахунку:"));
bankAccount[2] += deposit

let withdraw = Number(prompt("Зняти гроші:"));

if(bankAccount[2] >= withdraw) {
    bankAccount[2] -= withdraw;
    alert("Ви зняни готівку")
    alert(`У вас залишилось на разунку: ${bankAccount[2]}`)
} else {
    alert("У вас не вистачає грошей щоб зняти гроші");
}

console.log(bankAccount)

// Task 2

let temperature = Number(prompt("Ведіть температупу"))
let humidity = "65%"
let windSpeed = "14m/s"

if (temperature < 0) {
    console.log("Температура нижче 0 градусів Цельсія.");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія.");
}

// Task 3
const userLog = ["Mark", "beta@gmail.com", "Beta@321"]

let owName = prompt("Введіть ваше ім'я:");
let accountMail = (prompt("Введіть свою пошту:"));
let password = (prompt("Введіть пароль:"));

const checkName = owName === userLog[0]
const checkMail = accountMail === userLog[1]
const checkPas = password === userLog[2]

if(checkName, checkMail, checkPas){
    alert("Ви війшли в акаунт")
} else {
alert("Повторіть спробу")
}

// Task 4
let movie = ["Сам удома 1", 1990, 7.7];

if (movie[3] > 6) {
  alert("Цей фільм хороший так як рейтинг вище за 6");
} else {
  alert("Не рекомендую цей фільм так як він поганий");
}
