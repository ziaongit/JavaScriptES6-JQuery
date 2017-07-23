// Foreach Helper Start
    var products = [ 
        {name:'Iphone',price:200},
        {name:'Motorola',price:70},
        {name:'Samsung',price:150},
        {name:'Sony',price:98},
        {name:'Windows pone',price:10}
    ];
    let template = '';
    products.forEach(function(product){
        function discount() {
            if(product.price < 100) {
                return `<span>On sale !!</span>`;
                } else {
                return ``;
                }
        }
        template += `
                <div class="product">
                    <h1>${product.name}</h1>
                    <strong>Price: ${product.price} </strong>
                    ${discount()}
                </div>
                `;
    });
    const result = document.querySelector('#result');
        result.insertAdjacentHTML('afterbegin', template);
// Foreach Helper End