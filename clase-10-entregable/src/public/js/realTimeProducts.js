

socket.on('addProduct', data => {
  // Handle the 'addProduct' event here
  console.log(data);
});

const productName = document.getElementById('productName');

productName.addEventListener('keyup', evt => {
  if(evt.key === 'Enter'){
    if (productName.value.trim().length > 0){
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
