const socket = io();

let Producto;
const productName = document.getElementById('productName');

socket.on('addProduct', data)

productName.addEventListener('keyup', evt => {
  if(evt.key === 'Enter'){
    if (productName.Value.trim().length > 0){
      socket.emit('new-product', {Producto:  productName.value });
      productName.value = '';
    }
}})

socket.on('itemProducts', data => {
  const itemProduct = document.getElementById('itemProducts')
  let prods = '';
  data.forEach(prod => {
    prods += `${prod.Product}<br/>`;
  });
  itemProduct.innerHTML = prods;
})
