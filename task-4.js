const credits = 23580;
const pricePerDroid = 3000;
const droidsQuantity = prompt('Какое количество дроидов вы хотели бы приобрести?');
let totalPrice;

if(droidsQuantity === null){
    console.log('Отменено пользователем!');
}else{
    totalPrice = droidsQuantity * pricePerDroid;
    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    }else{
        let restOfMoney = credits - totalPrice;
        console.log(`Вы купили ${droidsQuantity} дроидов, на счету осталось ${restOfMoney} кредитов`);
    }
}

