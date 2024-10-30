//Menu-slidebar-category
const itemslidebar=document.querySelectorAll(".category-left-li")
itemslidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block");
    })
});
//Product
const bigImg=document.querySelector(".product-content-left-big-img img")
const smallImg=document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src=imgItem.src
    })
})
// Hàm chọn size
function selectSize(size) {
    // Hiển thị kích thước đã chọn
    var selectedSizeElement = document.querySelector('.selected-size');
    selectedSizeElement.textContent = "" + size;
}

function selectColor(color) {
    // Hiển thị màu sắc đã chọn
    var selectedColorElement = document.querySelector('.selected-color');
    selectedColorElement.textContent = "" + color;
}
// Lắng nghe sự kiện khi người dùng chọn kích thước
var sizeButtons = document.querySelectorAll('.size span');
sizeButtons.forEach(function(span) {
    span.addEventListener('click', function() {
        var size = span.getAttribute('data-size');
        selectSize(size);
    });
});
// Lắng nghe sự kiện khi người dùng chọn màu sắc
var colorImages = document.querySelectorAll('.product-content-right-product-color-img img');
colorImages.forEach(function(img) {
    img.addEventListener('click', function() {
        var color = img.getAttribute('data-color');
        selectColor(color);
    });
});
//Chọn nút để hiển thị nội dung bên trong
document.addEventListener("DOMContentLoaded", function() {
const baoquan = document.querySelector(".product-content-right-bottom-content-title-item-baoquan");
const chitiet = document.querySelector(".product-content-right-bottom-content-title-item-chitiet");
const doitra = document.querySelector(".product-content-right-bottom-content-title-item-doitra");

const baoquanContent = document.querySelector(".product-content-right-bottom-content-baoquan");
const chitietContent = document.querySelector(".product-content-right-bottom-content-chitiet");
const doitraContent = document.querySelector(".product-content-right-bottom-content-doitra");
//nếu click vô bảo quản thì hiển thị nội dung của bảo quản còn chi tiết và đổi trả bị ẩn
if (baoquan && baoquanContent) {
    baoquan.addEventListener("click", function() {
        chitietContent.style.display = "none";
        baoquanContent.style.display = "block";
        doitraContent.style.display = "none";
    });
}

if (chitiet && chitietContent) {
    chitiet.addEventListener("click", function() {
        chitietContent.style.display = "block";
        baoquanContent.style.display = "none";
        doitraContent.style.display = "none";
    });
}

if (doitra && doitraContent) {
    doitra.addEventListener("click", function() {
        chitietContent.style.display = "none";
        baoquanContent.style.display = "none";
        doitraContent.style.display = "block";
    });
}
//click vô hình nhỏ bên cạnh sản phẩm để hiển thị ra
const button = document.querySelector(".product-content-right-bottom-top");
if (button) {
    button.addEventListener("click", function() {
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB");
    });
}
});

//Chú thích thông tin giao hàng
function validateForm() {        
    var Name = NameInput.value.trim();
    var num = numInput.value.trim();
    var adresse = adresseInput.value.trim();
    var tp =tpInput.value.trim();
    var quan = quanInput.value.trim();
    var xa= xaInput.value.trim();

    if (Name === '') {
        NameErrorMessage.textContent = 'Vui lòng nhập Họ Tên của bạn.';
        isValid = false;
    } else {
        NameErrorMessage.textContent = '';
    }

    if (tp === '') {
        tpErrorMessage.textContent = 'Vui lòng nhập Tỉnh/Tp của bạn.';
        isValid = false;
    } else {
        tpErrorMessage.textContent = '';
    }

    if (adresse === '') {
        adresseErrorMessage.textContent = 'Vui lòng nhập Địa chỉ của bạn.';
        isValid = false;
    } else {
        adresseErrorMessage.textContent = '';
    }

    if (quan === '') {
        quanErrorMessage.textContent = 'Vui lòng nhập Quận/Huyện của bạn.';
        isValid = false;
    } else {
        quanErrorMessage.textContent = '';
    }

    if (xa === '') {
        xaErrorMessage.textContent = 'Vui lòng nhập Phường/Xã của bạn.';
        isValid = false;
    } else {
        xaErrorMessage.textContent = '';
    }

    if (num === '') {
        numErrorMessage.textContent = 'Vui lòng nhập số điện thoại của bạn.';
        isValid = false;
    } else {
        numErrorMessage.textContent = '';
    }
}
