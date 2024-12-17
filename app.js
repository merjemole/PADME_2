// Här skapar vi ett tomt varukorg-objekt för att lagra produkter
let cart = [];

// Funktion för att lägga till artikel i varukorgen
function addToCart() {
  const shirtType = document.getElementById('shirt-type').value;
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;
  const quantity = document.getElementById('quantity').value;

  const item = {
    shirtType,
    color,
    size,
    quantity
  };

  cart.push(item);
  alert('Item added to cart!');
}

// Funktion för att visa varukorgens innehåll
function showCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <p>Type: ${item.shirtType}</p>
      <p>Color: ${item.color}</p>
      <p>Size: ${item.size}</p>
      <p>Quantity: ${item.quantity}</p>
    `;
    cartItemsContainer.appendChild(itemElement);
  });
}

// Funktion för att checkout
function checkout() {
  alert('Proceeding to checkout...');
}
