
//  function citySubmit(){
// var input = document.getElementById("Now");
// if(input.value === "karachi"){
//     alert("welcome the city Of light")
// }else{
//     alert("Chla Ja")
// }
//  };


//  function ageSubmitt(){
//     var userAge = document.getElementById("age");
//     if(userAge.value === "male"){
//         alert("Good Morning Sir")
//     }else if( userAge.value === "female"){
//         alert("Good Morning Ma’am");
//     }else{
//         alert("Again Soja")
//     }
//  };

// function trafficSignal(){
//     var colors = document.getElementById("Signal");
//     if(colors.value === "Red"){
//         alert("Must Stop")
//     }else if(colors.value === "Yellow"){
//         alert("Ready to move")
//     }else if(colors.value === "Green" ){
//         alert("Move now")
//     }else{
//         alert("Jaa Ghar Jaa")
//     }
// }

// function Refillfuel(){
//     var fuels = document.getElementById("fuel");
//     if(fuels.value <= 0.25){
//         alert("Please refill the fuel in  your car ")
//     }else{
//         alert ("Chala Jaa")
//     }
// }
// Script
// var a = 4
// if (++a === 5){
//     alert("given condition for variable a is true")
// }   


// var b = 82;
// if(b++ === 83){
//     alert("given condition for variable b is true")
//     console.log("Alow")
// }else{
//     console.log("Not ALLow");
// }



// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true") //false
    
// }
// if (c === 13){
//     alert("condition 2 is true") //true
// }
// if(++c < 14){
//     alert("condition 3 is true") //false
// }
// if(c === 14){
//     alert("condition 4 is true") // true
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost Equals")
// };

// if(true){
//     alert("true")
// };
//  if(false){
//     alert("false")
//  };






// if ("car" < "cat"){
//     alert("car is smaller than cat")
// };



// const Phy = document.getElementById('physics')
// const Che = document.getElementById('Chemistry')
// const Math1 = document.getElementById('Mathamtics')
// const p = document.getElementById('p')
// let grade = document.getElementById('grade')
// const Remarks = document.getElementById('Remarks')
// const TotalMarks = 300




// document.getElementById('Calculate').addEventListener('click', () => {
//    let Ph = Number(Phy.value)
//    let Ch = Number(Che.value)
//    let Ma = Number(Math1.value)
//    const Sum = ((Ph+Ch+Ma) / TotalMarks) * 100
   
//    console.log("sum", Sum);
//    console.log(Math.floor(Sum));
//    p.innerHTML = Math.floor(Sum)+"%"
//    if(Sum >= 80 && Sum <= 100){
//        grade.innerHTML = "A-one"
//        Remarks.innerHTML = "Excellent"
//        Phy.value, Che.value , Math.value = null
        
//    } else if(Sum >= 70 && Sum  <= 79){
//     grade.innerHTML = "A"
//     Remarks.innerHTML = "Good"
//    }else if(Sum >= 60 && Sum <= 69){
//     grade.innerHTML = "B"
//     Remarks.innerHTML = "You Need to Improve"
//    }else if (Sum <= 59){
//     grade.innerHTML = "Fail"
//     Remarks.innerHTML = "Sorry"
//      Phy.value, Che.value , Math.value = ""
//    }else{
//     grade.innerHTML = "Not Valid"
//     Remarks.innerHTML = "Invalid"
    
//    }
// })



// document.getElementById('guess').addEventListener('click', () => {
//     const GuesNumber = 7
//     const inputValue = document.getElementById('inputValue')

//   if(GuesNumber == inputValue.value){
//     alert('Bingo! Correct answer')
//   }else if(GuesNumber + 1 == inputValue.value){
//     alert('Close enough to the correct answer')
//   }else if(GuesNumber - 1 ==  inputValue.value){
//     alert('Close enough to the correct answer')
//   }
//  else{
//     alert('Wrong Answer')
//   }
//   GuesNumber  = ''
// })

// document.getElementById('Whether').addEventListener('click', () => {
//     const inputValue = document.getElementById('inputValue')
//     const result = inputValue.value % 3 === 0
//    if(result){
//     alert('Devide')
//    }else{
//     alert('Not Devide')
//    }
// })

// document.getElementById('even').addEventListener('click', () => {
//     const inputValue = document.getElementById('inputValue')
//     if(inputValue.value % 2 == 0 ){
//         alert('even')
//     }else(
//         alert('odd')
//     )
// })


// document.getElementById('temp').addEventListener('click', () => {
//      const inputValue = document.getElementById('inputValue')
//      switch (true) {
//         case inputValue.value >= 40:
//             alert('It is too hot outside.')
//             break;
//         case inputValue.value >= 30:
//             alert('The Weather today is Normal')
//             break;
//          case inputValue.value >= 20:
//             alert('Today’s Weather is cool.')
//             break;  
//          case inputValue.value >= 10:
//             alert('OMG! Today’s weather is so Cool.')
//             break;       
//         default:
//             alert('Today`s Weather is so Hot')
//             break;
//      }
    
// })


document.getElementById('calc').addEventListener('click', () => {
    const inputValue1 = document.getElementById('inputValue1')
    const inputValue2 = document.getElementById('inputValue2')
    const Symbol = document.getElementById('Symbol')
    let result;

    if(Symbol.value == '*'  ){
      result =   inputValue1.value * inputValue2.value
    }else if(Symbol.value == '+'){
      result =   inputValue1.value + inputValue2.value
    }else if(Symbol.value == '-'){
        result =   inputValue1.value - inputValue2.value
      }
      else if(Symbol.value == '/'){
        result =   inputValue1.value / inputValue2.value
      }
      else if(Symbol.value == '%'){
        result =   inputValue1.value % inputValue2.value
      }
    alert(result)
    inputValue1.value = ''
    inputValue2.value = ''
    Symbol.value = ''
})
