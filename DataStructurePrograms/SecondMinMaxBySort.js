/* Store the value into array */
let arr = new Array();
for(let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    arr.push(number);
}
/* Sort the Array */
arr.sort();
/* Print elements of the array */
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]+" ");
}
/* Print the Second largest and smallest value in the array */ 
console.log('Second Smallest : ' + arr[1]);
console.log('Second Largest : ' + arr[arr.length - 2]);