let score=25
let name="ankan123"
let bool=true
let score2=0; 
let abc=null;
let abcd="";

console.log(score)
console.log(typeof score)
console.log(name)
console.log(typeof name)
console.log(bool)
console.log(typeof bool)

// CONVERT  STRING  TO NUMBER

let number=Number(name)  // if there is a string like "ankan123" it will not convert into number only its type will be convert into number but it will show NaN
console.log(number)
console.log(typeof number)

//CONVERT NUMBER TO STRING

let valueInString=String(score)
console.log(valueInString)
console.log(typeof valueInString)

//CONVERT NUMBER TO BOOLEAN

let valueInBoolean=Boolean(score2)//0
console.log(valueInBoolean)
console.log(typeof valueInBoolean)

let valueInBoolean1=Boolean(score)//25
console.log(valueInBoolean1)
console.log(typeof valueInBoolean1)

let valueInBoolean2=Boolean(name)//ankan
console.log(valueInBoolean2)
console.log(typeof valueInBoolean2)

let valueInBoolean3=Boolean(abc)//null
console.log(valueInBoolean3)
console.log(typeof valueInBoolean3)

let valueInBoolean4=Boolean(abcd)//" "
console.log(valueInBoolean4)
console.log(typeof valueInBoolean4)

//CONVERT BOOLEAN TO STRING

let valueInstring=Boolean(score2)
console.log(valueInstring)
console.log(typeof valueInstring)