// Find Helper Start
//...Example 1
const brands = ["Apple", "Sony", "Samsung", "Samsung"];
const result = brands.find(function(brand){
    return brand === "Samsung";
})
console.log(result);
//...Example 2

const cars = [
    {brand:"Ford",price:500,available:2,type:"Sport car"},
    {brand:"Nisan",price:400,available:2,type:"Wagon"},
    {brand:"Toyata",price:300,available:2,type:"Sport car"},
    {brand:"Valvo",price:800,available:2,type:"Truk"}
];



document.querySelector('.search').addEventListener('click', function(){
    var price = parseInt(document.querySelector('#price').value);
    var type = document.querySelector('#type').value;
    
    let result = getResult(price, type);

    if(result){
        console.log('Car: '+result.type+'\nPrice: '+result.price);
    }else {
        console.log('No car found');
    }

});

function getResult(price, type) {

    return cars.find(function(car){
        return car.price < price 
        && car.available > 0
        && car.type ===type
    });
}

// Find Helper End