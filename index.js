// 1
const bankAccount = {
    ownerName: 'Bogdan',
    accountNumber: 6453428,
    balance: 877.00,
    deposit () {
        const askSumOfDeposite = prompt('Яку сумму ви хочете взяти в депозит? Якщо не хочете, натисніть відмінити.');
        if(askSumOfDeposite === null){
            this.balance += 0;
        }
        else if(askSumOfDeposite === ''){
            this.balance += 0;
        }
        else if(isNaN(askSumOfDeposite) === false){
            alert(`Ваш рахунок було поповнено на ${askSumOfDeposite}₴.`);
            this.balance += parseFloat(askSumOfDeposite);
            alert(`На вашому рахунку зараз ${this.balance}₴`);
        }
        else{
            this.balance += 0;
        }
    },
    withdraw () {
        const askSumOfDeposite = prompt('Яку сумму ви хочете зняти з рахунку? Якщо не хочете, натисніть відмінити.');
        if(askSumOfDeposite === null){
            this.balance -= 0;
        }
        else if(askSumOfDeposite === ''){
            this.balance -= 0;
        }
        else if(isNaN(askSumOfDeposite) === false){
            alert(`З вашого рахунку було знято ${askSumOfDeposite}₴.`);
            this.balance -= parseFloat(askSumOfDeposite);
            alert(`На вашому рахунку зараз ${this.balance}₴`);
        }
        else{
            this.balance -= 0;
        }
        
    },
}
bankAccount.deposit();
bankAccount.withdraw();

// 2
const weather = {
    temperature: prompt('Яка температура в вашому місті?'),
    humidity: '50%',
    windSpeed: '7 km/h',
    didColdOutside () {
        let sigme;
        if(parseFloat(this.temperature) > 0){
            sigme = false;
            // alert('Температура в вашому місті дорівнює 0 градусів Цельсія')
        }
        else if(parseFloat(this.temperature) <= 0){
            sigme = true;
        }
        else if(isNaN(parseFloat(this.temperature)) === true){
            sigme = undefined;
        }
        if(sigme === true){
            alert('Температура нижче 0 градусів Цельсія')
        }
        else if(sigme === false){
            alert('Температура вище або дорівнює 0 градусів Цельсія')
        }
        else{
            alert('Ви не ввели температуру взагалі!')
        }
    }
}
weather.didColdOutside()

// 3
const user = {
    name: prompt("Введіть ім'я користувача"),
    email: prompt('Введіть емеіл користувача'),
    password: prompt('Введіть пароль користувача. Пароль має бути не менше 4 і не більше 16 символів'),
    login () {
        if(this.email.includes('@') === true){
            alert('З емеілом все ок!');
        }
        else{
            alert('В емейлі навіть немає символа @!');
        }
        if(this.password.length >= 4 && this.password.length <= 16){
            alert('З паролем все ок!');
        }
        else{
            alert('Пароль має бути не менше 4 і не більше 16 символів!');
        }
    }
}
user.login();

// 4
const movie = {
    title: 'Star Wars',
    director: 'Irvin Kershner',
    year: 1977,
    rating: 8.11,
    checkRating () {
        let checkedRating;
        if(this.rating > 8){
            checkedRating = true;
        }
        else{
            checkedRating = false;
        }
        if(checkedRating === true){
            alert('Цей фільм ідeальний!!!')
        }
        else{
            alert('Цей фільм нормальний або поганий(')
        }
    }
}
movie.checkRating()