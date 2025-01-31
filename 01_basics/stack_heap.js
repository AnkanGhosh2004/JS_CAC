//stack for  premtive        //heap for  non-premtive

//in stack copy is give but in heap refernce means the originalvalue in been given

let myName="Ankan"
let myfriendsname=myName
console.log(myName)
console.log(myfriendsname)
myfriendsname="disha"
console.log(myfriendsname)
console.log(myName)

let ankan = {
    age:21,
    email:"ankan@123"
}


let disha=ankan;
console.log(disha.email);

disha.email="disha@123"   //afte0 taking the reference it will always give the pririty to that value  

//disha.email="disha@123"
console.log(disha.email);
console.log(ankan.email);
