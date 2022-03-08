let min, max, secondMin, secondMax;
/* Store the value into array */
let arr = new Array();
for(let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    arr.push(number);
}
/* Print elements of the array */
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]+" ");
}
/* Find the Second largest and smallest value in the array */
for (let i = 0; i < 10; i++ ){
    if(i == 0){
        min = arr[i];
        max = arr[i];
    }
    if(arr[i] < min){
        secondMin = min;
        min = arr[i];
    }
    else if(arr[i] < secondMin){
        secondMin = arr[i];
    }
    if(arr[i] > max){
        secondMax = max;
        max = arr[i];
    }
    else if(arr[i]  > secondMax){
        secondMax = arr[i];
    }
}
/* Print the Second largest and smallest value in the array */ 
console.log('Second Smallest Number : ' + secondMin);
console.log('Second Largest Number : ' + secondMax);