function checkForSpam(message) {
  let result;
  // Change code below this line
    if (message.toLowerCase().includes('spam')) {
        result = message.toLowerCase().includes('spam')
    } else if (message.toLowerCase().includes('sale')) {
        result = message.toLowerCase().includes('sale')
    } else {
        result = !message
    }
  // Change code above this line
  return result;
}
console.log(checkForSpam("Latest technology news")) // false
console.log(checkForSpam("JavaScript weekly newsletter")) //false
console.log(checkForSpam("Get best sale offers now!")) //true
console.log(checkForSpam("Amazing SalE, only tonight!")) //true
console.log(checkForSpam("Trust me, this is not a spam message")) //true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")) //true
console.log(checkForSpam("[SPAM] How to earn fast money?")) //true