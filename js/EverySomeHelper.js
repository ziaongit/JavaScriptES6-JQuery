// Ever and Some Helper Start
//...Example 1
const students = [
    {name:'Ali', grade:4},
    {name:'Maria', grade:6},
    {name:'Sara', grade:8},
]

const every = students.every(function(student){
    return student.grade > 4;
})
console.log(every);

//...Example 2
const some = students.some(function(student){
    return student.grade > 6;
})

console.log(some);
// Every and Some Helper End