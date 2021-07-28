const resp = localStorage.getItem('products');
let products = [];

if (resp){
    products = JSON.parse(resp);
}

for (const product of products) {

    const newEls = document.createElement()
    
    // document.write(`<div>${product.tovar}</div>`)
    // document.write(`<div>${product.quantity}</div>`)
    // document.write(`<div>${product.price}</div>`)
    // document.write(`<div>${product.img}</div>`)
}
// document.appendChild(newEls)
