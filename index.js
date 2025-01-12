// Task 1
// 0936391518358173
const bankAccount = {
    ownerName: "Mark", accountNumber: "0936391518358173",balance: 58703
}
let deposit = Number(prompt("Поповнення рахунку:"));
bankAccount.balance += deposit

let withdraw = Number(prompt("Зняти гроші:"));

if(bankAccount.balance >= withdraw) {
    bankAccount.balance -= withdraw;
    alert("Ви зняли готівку")
    alert(`У вас залишилось на разунку: ${bankAccount.balance}`)
} else {
    alert("У вас не вистачає грошей щоб зняти гроші");
}

console.log(bankAccount)

// Task 2
const weather = {
    temperature: 3, humidity: "65%", windSpeed: "14m/s"
}

if (weather.temperature < 0) {
    console.log("Температура нижче 0 градусів Цельсія.");
} else {
    console.log("Температура вище або рівна 0 градусів Цельсія.");
}

// Task 3
const userLog = {
    name: "Mark", mail: "blogernoname21@gmail.com", password: "Mark@123"
}

let owName = prompt("Введіть ваше ім'я:");
let accountMail = (prompt("Введіть свою пошту:"));
let password = (prompt("Введіть пароль:"));

const checkName = owName === userLog.name
const checkMail = accountMail === userLog.mail
const checkPas = password === userLog.password

if(checkName, checkMail, checkPas){
    alert("Ви війшли в акаунт")
} else {
alert("Повторіть спробу")
}

// Task 4
let movie = {
    name: "Сам удома 1", year: 1990, rating: 7.7
}

if (movie.rating > 7) {
  alert("Цей фільм хороший так як рейтинг вище за 7");
} else {
  alert("Не рекомендую цей фільм так як він поганий");
}
