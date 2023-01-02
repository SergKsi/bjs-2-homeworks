"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let diskr = b * b - 4 * a * c;
  if (diskr < 0) {
    arr = [];
  } else if (diskr === 0) {
      arr.push(-b / (2 * a));
    } else if (diskr > 0) {
        arr.push((-b + Math.sqrt(diskr))/(2 * a));
        arr.push((-b - Math.sqrt(diskr))/(2 * a));       
      } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // percent - процентная ставка, 
  // contribution - сумма первоначального взноса,
  // amount - сумму кредита
  // countMonths - дата окончания
  if (typeof percent === 'string') {
    percent = +percent;
    if (Number.isNaN(percent)) {
      console.log(`Параметр percent содержит неправильное значение ${percent}`);
      return false;
    }
  } 
  if (typeof contribution === "string") {
    contribution = +contribution;
    if (Number.isNaN(contribution)) {
      console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
      return false;
    }
  }  
  if (typeof amount === "string") {
    amount = +amount;
    if (Number.isNaN(amount)) {
      console.log(`Параметр amount содержит неправильное значение ${amount}`);
      return false;
    }
  }  
  if (typeof countMonths === "string") {
    countMonths = +countMonths;
    if (Number.isNaN(countMonths)) {
      console.log(`Параметр countMonths содержит неправильное значение ${countMonths}`);
      return false;
    }
  }  
  let bodyKredit = amount - contribution;
  // let numberMonths = Math.round((Date.parse('countMonths') - Date.now())/2629800000);
  let percentMonth = percent / 100 / 12;
  let a = Math.pow((1 + percentMonth), countMonths) - 1;
  let payment = bodyKredit * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths)) - 1)));
  return +(payment * countMonths).toFixed(2);
}