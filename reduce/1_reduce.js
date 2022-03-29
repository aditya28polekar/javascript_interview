let arr = [2 , 3 , 4 , 5]
// we have to find the sum of array

// Reduce function - this higher order fun expects 2 argument 
let sum_of_arr = arr.reduce(function sum_fn(sum , val){
    sum += val;
    return sum;
} , 0)
// INITIALIZATION of sum by '0'
console.log(sum_of_arr) //14