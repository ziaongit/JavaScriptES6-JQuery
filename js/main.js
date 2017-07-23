// Foreach Helper Start
    var products = [ 
        {name:'Iphone',price:200},
        {name:'Motorola',price:70},
        {name:'Samsung',price:150},
        {name:'Sony',price:98},
        {name:'Windows pone',price:10}
    ];
    let template = '';
    products.forEach(function(products){
        function discount() {
            if(products.price < 100) {
                return `<span>On sale !!</span>`;
                } else {
                return ``;
                }
        }
        template += `
                <div class="product">
                    <h1>${products.name}</h1>
                    <strong>Price: ${products.price} </strong>
                    ${discount()}
                </div>
                `;
    });
    var result = document.querySelector('#result');
        result.insertAdjacentHTML('afterbegin', template);
// Foreach Helper End