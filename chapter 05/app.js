let num1 = 3;
let num2 = 5;
let result = 3 + 5;
let result1 = 3 * 5;
let result2 = 3 - 5;
let result3 = 3 / 5;
let result4 = 3 % 5;



document.write(`Sum of ${num1} and ${num2} is ${result} <br>`);
document.write(`multiple of ${num1} and ${num2} is ${result1} <br>`);
document.write(`Subtrac of ${num1} and ${num2} is ${result2} <br>`);
document.write(`Division of ${num1} and ${num2} is ${result3} <br>`);
document.write(`Modulas of ${num1} and ${num2} is ${result4} <br> <br> `);


var varaible1 = 29;
document.write(`Value
after variable declaration is ${varaible1} <br> <br> `);
//Initialize
varaible1 = 5;
document.write(`Initial value is :${varaible1} <br> `);
// Increment
varaible1++;
document.write(`After Increment value is : ${varaible1} <br>`);
// addition 1
let newVariable1 = 7;
let additions = varaible1 + newVariable1;
document.write(`After addition : ${additions} <br> `);

// addition 2 
let addition = varaible1 + 7;
document.write(`after addition value is : ${addition} <br> `);



// addition 3 
// document.write(`After Addition value is `, varaible1 + 7   );
 addition--;
document.write(`After Decrement is  :${addition} <br> `);


let Modul = addition % 3;
document.write(`The Reminder is : ${Modul} <br> `);



let  costofTicket =  600;
let buyingTicket = 5;
let calculation = costofTicket * buyingTicket;
document.write(`Total cost to Buy ${buyingTicket} to a movie is ${calculation} <br> <br> <br>`);



//Table 
let tableNumber = 4;
document.write(`${tableNumber} x 1 = `,tableNumber*1,`<br>`);
document.write(`${tableNumber} x 2 = `,tableNumber*2, `<br>`);
document.write(`${tableNumber} x 3 = `,tableNumber*3,`<br>`);
document.write(`${tableNumber} x 4 = `,tableNumber*4, `<br>`);
document.write(`${tableNumber} x 5 = `,tableNumber*5,`<br>` );
document.write(`${tableNumber} x 6 = `,tableNumber*6, `<br>`);
document.write(`${tableNumber} x 7 = `,tableNumber*7, `<br>`);
document.write(`${tableNumber} x 8 = `,tableNumber*8, `<br>`);
document.write(`${tableNumber} x 9 = `,tableNumber*9,`<br>` );
document.write(`${tableNumber} x 10 = `,tableNumber*10,`<br><br><br>` );

//Temperature Converter
let celcius = 25;
let formula = (celcius * 9/5) + 32;
document.write(`25'C is ${formula}'F <br> <br>`);

let fahrenheit = 70;
let formula2 = (fahrenheit - 32) * 5/9 ;
document.write(`${fahrenheit} is ${formula2} 'C <br> <br> <br>`);


//Shoping Carts
let priceItem1 = 650;
let quantityItem1 = 3;
let priceItem2 = 100;
let quantityItem2 = 7;
let shippingCharges = 100;
let Total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2 ) + (shippingCharges);
document.write(`Total cost Your Order is ${Total} <br> <br>`);


// MarkSheet 
let totalMarks = 980;
let markObtained = 804;
let Percentage = 804 / 980 *1000;
document.write(`Total Marks  : ${totalMarks} <br>`);
document.write(`Obtained Marks   : ${markObtained} <br>`);
document.write(`Percentage   : ${Percentage} <br> <br> <br> `);

// Currency 
let USDollar = 10;
let saudiRiyal = 25;
let PakistanDollar = 104.80;
let PaksitaRiyal = 28;

let pakToUS = PakistanDollar * USDollar ;
let pakToSaudi = PaksitaRiyal * saudiRiyal;
let totalCurrency = pakToUS + pakToSaudi;
document.write(`Total Currency in PKR : ${totalCurrency} <br> <br>`);


// Logic 
let random = 5;
let Calculations = ((random+5)*10)/2;
document.write(Calculations);
















