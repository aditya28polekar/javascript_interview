//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let positive_amt_sum = transactions.filter(function fn(n){
    return n>0
}).reduce(function fn(sum , val){
    sum += val;
    return sum;
} , 0)
console.log(positive_amt_sum)
//13800






