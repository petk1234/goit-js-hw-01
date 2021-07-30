let total = 0;
let input;
do{
    input = prompt('Введите число');
    if(input === null){
        break;
    }else if(Number.isNaN(Number(input)) === true){
        alert('Вы ввели не число');
        continue;
    }
    total += Number(input);
}
while(true);
alert(`Общая сумма чисел равна ${total}`);