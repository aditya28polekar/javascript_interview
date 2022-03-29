// just like a reduce
// acess the array in reverse order(ie right)
let arr = [2 , 3 , 4 , 5, 6]

let sum_from_right = arr.reduceRight(function fn(sum , val){
    sum += val;
    return sum;
} , 0)
console.log(sum_from_right)

