module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};

const products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct(){
  console.log(products[0]);
}
function addProduct(newProduct){
  products.push(newProduct);
}

function updateProductName(position, newName){
  products[position] = newName;
}
function removeLastProduct(){
  products.pop();
}
