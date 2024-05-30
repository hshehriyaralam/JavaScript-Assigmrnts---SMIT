let a = 10;
document.write(`The Value of a is : ${a} <br> <br> `);


// Prefix => Pehle add then Print
let b = ++a;
document.write(`The Value of ++a is : ${b} <br>`);
document.write(`Now Value of a is : ${b}<br> <br> `);

document.write(`...................................<br> <br> `);


//PostFix => Pehle Print then add
let c = b++;
document.write(`The Value of a++ is : ${c}<br>  `);
c++;
document.write(`Now Value of a is : ${c}<br> <br> `);


document.write(`...................................<br> <br> `);



let d = --c;
document.write(`The value of --a is : ${d} <br>`);
document.write(`Now value of --a is : ${d} <br> <br> `);

let e = d--;
document.write(`The value of a-- is : ${e} <br>`);
e--;
document.write(`Now value of a-- is : ${e} <br>`);

document.write(`...............................................................<br> <br> `);

// Q#2 
let a1 = 2;
let b1 = 1;

document.write(`a is ${a1} <br> `)
document.write(`b is ${b1} <br> `)


let result = --a1 - --b1 + ++b1 + b1--;
document.write(` <h3> Result is  --a - --b + ++b + b-- : ${result} <br> <br> </h3>`)


document.write(`...................................<br> <br> `);


document.write(`<h1> Stages </h1> <br> `);
let c1 = --a1;
document.write(`<h4> --a is :${c1} </h4>`)

let d1 = --a1 - --b1 
document.write(`<h4> --a - --b is :${d1} </h4>`)

let e1 = --a1 - --b1 + ++b1;
document.write(`<h4> --a - --b + ++b is :${e1} </h4>`)


let f = --a1 - --b1 + ++b1 + b1--;
document.write(`<h4> --a - --b + ++b + b-- is :${f} </h4>`)





