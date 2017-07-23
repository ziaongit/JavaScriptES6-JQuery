// Foreach Helper Start
//...Example 1
const paintings = [
    {painting:'Mona lisa',width:200,height:200},
    {painting:'The scream',width:400,height:600},
    {painting:'The last supper',width:600,height:200}
];

const messages = paintings.map(function(painting){
    return `The ${painting.painting} is ${painting.width} * ${painting.height}`;
});
console.log(messages);

//...Exaple 2

function convertPrice(price) {
    return price * 12.40;
}

const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Chevy',price:600}
]
const price = cars.map(function(car){
    return `This ${car.name} is ${convertPrice(car.price)} Rupees`
});

console.log(price);

// Foreach Helper End