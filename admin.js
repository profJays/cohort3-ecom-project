// Example products data
let products = [
    { id: 1, name: 'Golf T-Shirt', price: 10.99, image: 'product1.jpg' },
    { id: 2, name: 'Trouser', price: 19.99, image: 'product2.jpg' },
    { id: 3, name: 'Short', price: 5.99, image: 'product3.jpg' }
  ];
  
  // Function to render the product list
  function renderProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><img src="${product.image}" alt="Product Image" width="50"></td>
        <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
      `;
  
      productList.appendChild(row);
    });
  }
  
  // Function to add a new product
  function addProduct(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const imageInput = document.getElementById('image');
  
    const newProduct = {
      id: products.length + 1,
      name: nameInput.value,
      price: parseFloat(priceInput.value),
      image: URL.createObjectURL(imageInput.files[0])
    };
  
    products.push(newProduct);
  
    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
  
    renderProductList();
  }
  
  // Function to delete a product
  
  
  
  // Event listener for form submission
  const addProductForm = document.getElementById('add-product-form');
  addProductForm.addEventListener('submit', addProduct);
  
  // Initial rendering of the product list
  renderProductList();
  