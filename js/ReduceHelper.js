// Reduce Helper Start
//...Example 1
const previous = 200;
const current = [
    {expense:'Mic', amount:200},
    {expense:'Strap', amount:100},
    {expense:'Guitar', amount:300}
];

const result = current.reduce(function(sum, expense){
    return sum + expense.amount;
},0)

console.log(result);

//...Example 2

const users = [
    {name:'Sara', lastname:'Mike', age:25},
    {name:'Amna', lastname:'Malik', age:34},
    {name:'Azra', lastname:'Rauf', age:23}
];
const names = users.reduce(function(start, user){
    start.push(user.name);
    return start;
},[])
console.log(names);

// Reduce Helper End