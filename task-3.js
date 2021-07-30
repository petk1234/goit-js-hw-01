let message;
let userChoise = prompt('Пожалуйста, введите пароль');
const ADMIN_PASSWORD = 'password';

if(userChoise === null){
    message = 'Отменено пользователем';
}else if(userChoise.toLowerCase() === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
}else{
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);