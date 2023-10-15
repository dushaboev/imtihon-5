const adminp = document.querySelector('.nav_list1-usermenu')
adminp.addEventListener('click', () => {
    location.href = '/html/admin.html'
})

const name = document.getElementById('product-name')
const price = document.getElementById('product-price')
const btn = document.getElementById('btn')


function getlocalstorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function addlocalstorage(id, price, name) {
    let product = { id, price, name }
    let products = getlocalstorage();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

btn.addEventListener('click', () => {
    addlocalstorage(id, price.value, name.value)
})
