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

// Find Helper End