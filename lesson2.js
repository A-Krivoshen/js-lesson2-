'use strict';


var orderNumber,storeNumber,result;
orderNumber = 1;
storeNumber = 1;
if (orderNumber === storeNumber) {
result = 'Вы забираете весь товар с нашего склада!';
} else {

result = (orderNumber > storeNumber) ? 'На складе нет такого количества товаров.' : 'Заказ оформлен.';
}
console.log(result);

//task2
var placeOfDelivery;
placeOfDelivery = 'Галактика Туманность Андромеды';
switch (placeOfDelivery) {
  case 'Луна' :
    console.log(`Стоимость доставки для области ${placeOfDelivery} 150 Q`);
  break;

 case 'Крабовидная туманность' :
    console.log(`Стоимость доставки для области ${placeOfDelivery} 250 Q`);
 break;

 case 'Галактика Туманность Андромеды' :
    console.log(`Стоимость доставки для области ${placeOfDelivery} 550 Q`);
 break;

 case 'Туманность Ориона' :
    console.log(`Стоимость доставки для области ${placeOfDelivery} 600 Q`);
 break;

 case 'Звезда смерти' :
    console.log(`Стоимость доставки для области ${placeOfDelivery} договорная цена`);
 break;

 default :
    console.log("В ваш квадрант доставка не осуществляется");
}
//task 3
var storeshopPrice = 5;
try {
  if (typeof(storeshopPrice) === 'string')
    throw `Вы допустили ошибку: ${storeshopPrice} не является числом`;
   }
    catch(err) {
      console.log(err);
    } if (typeof(storeshopPrice) !== 'string') 
    console.log("Цена товара введена корректно");
