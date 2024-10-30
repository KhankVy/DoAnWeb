//Cho slide chạy và bấm chọn dấu chấm thì hiển thị hình ảnh của dấu chấm đó ra
const imgPosition=document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer=document.querySelector(".aspect-ratio-169")
const dotItems=document.querySelectorAll(".dot")
let imgNumber=imgPosition.length;
let index=0;
imgPosition.forEach(function(image,index){
    image.style.left = index*100 +"%"
    dotItems[index].addEventListener("click",function(){
        slider(index)
    })
})
function imgSlide(){
    index++;
    if(index>=imgNumber){
        index=0
    }
    slider(index)
    
}
function slider(index){
    imgContainer.style.left="-"+index*100+"%"//Container di chuyển sang trái 100% chiều rộng, hiển thị hình ảnh thứ hai.
    const dotActive=document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItems[index].classList.add("active")
}
setInterval(imgSlide,5000)
//Click trở về đầu trang
document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var spans = document.getElementsByClassName("close");
var loginForm = document.getElementById("loginForm");
var registerForm = document.getElementById("registerForm");

// Show form đăng nhập
var showRegister = document.getElementById("showRegister");
showRegister.onclick = function() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
}

// Show form đăng ký
var showLogin = document.getElementById("showLogin");
showLogin.onclick = function() {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
}

// Khi click vô icon user thì mở form lên
btn.onclick = function() {
    modal.style.display = "block";
}

//Khi click vô (x) thì đóng form
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modal.style.display = "none";
    }
}

// Khi click bất kì chỗ nào ngoài form thì đóng form lại
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
const addToCartButtons = document.querySelectorAll('.product-content-right-product-button button:first-child');
//Chọn các nút thêm vào giỏ hàng
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productElement = button.closest('.product-content-right');
        const productName = productElement.querySelector('.product-content-right-product-name h1').innerText;
        const productPrice = productElement.querySelector('.product-content-right-product-price p').innerText;
        const productQuantity = productElement.querySelector('.quantity input').value;
        const productColor = productElement.querySelector('.selected-color').innerText;
        const productSize = productElement.querySelector('.selected-size').innerText;
        const productImage = document.querySelector('.product-content-left-big-img img').src;

        const product = {
            image: productImage,
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            color: productColor,
            size: productSize
        };

        addProductToCart(product);
        saveProductToLocalStorage(product);

        // Hiển thị form giỏ hàng
        cartModal.style.display = 'block';
        // Cập nhật tổng tiền
        updateCartTotal();
    });
});
//Thêm sản phẩm đã chọn vào giỏ hàng
function addProductToCart(product) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item', 'row');
    cartItem.innerHTML = `
        <div class="col-xl-4">
            <img src="${product.image}" alt="${product.name}" class="img-fluid">
        </div>
        <div class="col-xl-6">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Màu: ${product.color}, Size: ${product.size}</p>
            <p>Giá: ${product.price}</p>
            <div class="quantity-control d-flex align-items-center">
                <button class="quantity-btn decrease btn btn-outline-secondary">-</button>
                <input type="text" value="${product.quantity}" class="item-quantity form-control mx-2" style="width: 60px;">
                <button class="quantity-btn increase btn btn-outline-secondary">+</button>
            </div>
        </div>
        <div class="cart-item-remove col-xl-2">
            <i class='bx bx-trash'></i>
        </div>
    `;
    cartItemsContainer.appendChild(cartItem);

    // Add event listeners for the new cart item buttons
    const increaseBtn = cartItem.querySelector('.increase');
    const decreaseBtn = cartItem.querySelector('.decrease');
    const quantityInput = cartItem.querySelector('.item-quantity');

    increaseBtn.addEventListener('click', function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateCartTotal();
    });

    decreaseBtn.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateCartTotal();
        }
    });

    //Khi nhấn icon thùng rác thì xóa sản phẩm đi
    const removeBtn = cartItem.querySelector('.cart-item-remove i');
    removeBtn.addEventListener('click', function() {
        cartItem.remove();
        removeProductFromLocalStorage(product);
        updateCartTotal();
    });
}
//Sự kiện thay đổi số tiền khi tăng giảm số lượng sản phẩm
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(function(item) {
        const priceElement = item.querySelector('p:nth-of-type(3)');
        const price = parseInt(priceElement.textContent.replace('Giá: ', '').replace('₫', '').replace(/\./g, ''));
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        total += price * quantity;
    });
    document.getElementById('cartTotal').textContent = total.toLocaleString() + '₫';
}

var cartModal = document.getElementById("cartModal");
var cartBtn = document.getElementById("cartBtn");
var closeBtn = document.getElementsByClassName("cart-close")[0];

cartBtn.onclick = function() {
    cartModal.style.display = "block";
}

closeBtn.onclick = function() {
    cartModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

function saveProductToLocalStorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeProductFromLocalStorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== product.name || item.color !== product.color || item.size !== product.size);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product => addProductToCart(product));
    updateCartTotal();
}

// Load cart from localStorage when page loads
loadCartFromLocalStorage();
});




