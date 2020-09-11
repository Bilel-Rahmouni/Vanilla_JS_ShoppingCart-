//variables
var navBarCart = document.querySelector(".navBarCart");
var productsContainer = document.querySelectorAll(".productsContainer");
var commandeCart = document.querySelector(".commandeCart");
var price = document.querySelectorAll(".price");
var totalAmount = document.querySelector(".totalAmount");
var carts = document.querySelector(".carts");
var cart = document.querySelectorAll(".cart");
var productImg = document.querySelectorAll(".productImg");
var commandeProductsContainer = document.querySelector(
  ".commandeProductsContainer"
);
var productName = document.getElementsByClassName("productName");
var addToCartBtn = document.querySelectorAll(".addToCartBtn");
var searchInput = document.querySelector(".searchInput");
var navSearch = document.querySelector(".navSearch");
var searchDiv = document.querySelector(".searchDiv");

//functions

for (let i = 0; i < cart.length; i++) {
  navBarCart.innerHTML = 0;
  commandeCart.innerHTML = 0;
  totalAmount.innerHTML = 0;
  addToCartBtn[i].addEventListener("click", addToCart);
  function addToCart(e) {
    e.preventDefault();
    for (let i = 0; i < cart.length; i++) {
      cart[i].classList.add(i);
      cart[i].setAttribute("id", i);
    }

    //add item to cart section
    var numberOfItems = document.getElementsByClassName(i);

    if (numberOfItems.length <= 1) {
      e.preventDefault();
      //increment number of products
      navBarCart.innerHTML = parseInt(navBarCart.innerHTML) + 1;
      commandeCart.innerHTML = parseInt(commandeCart.innerHTML) + 1;
      //increment price
      totalAmount.innerHTML =
        parseInt(totalAmount.innerHTML) + parseInt(price[i].innerHTML) + "$";
      ////////////
      var newCart = document.createElement("div");
      var newImgDiv = document.createElement("div");
      var newProductImg = document.createElement("img");
      var newDetailsDiv = document.createElement("div");
      var newProductName = document.createElement("h3");
      var newIncBtn = document.createElement("button");
      var newDecBtn = document.createElement("button");
      var newProductPrice = document.createElement("span");
      var NewDeleteBtn = document.createElement("button");

      newCart.classList.add("cart", cart[i].id);
      newProductImg.classList.add("productImg");
      newDetailsDiv.classList.add("details");
      newProductPrice.classList.add("num", "newProductPrice");
      NewDeleteBtn.classList.add("btn", "deleteBtn");
      newDecBtn.classList.add("btn", "incBtn");
      newIncBtn.classList.add("btn", "decBtn");

      newCart.setAttribute("id", cart[i].id);
      newProductImg.setAttribute("src", productImg[i].getAttribute("src"));
      newProductImg.setAttribute("alt", "...");
      NewDeleteBtn.innerHTML = "delete";
      newProductName.innerHTML = productName[i].innerHTML;
      newProductPrice.innerHTML = price[i].innerHTML;

      commandeProductsContainer.appendChild(newCart);
      newCart.appendChild(newImgDiv);
      newImgDiv.appendChild(newProductImg);
      newCart.appendChild(newDetailsDiv);
      newDetailsDiv.appendChild(newProductName);
      newDetailsDiv.appendChild(newProductPrice);
      newDetailsDiv.appendChild(NewDeleteBtn);
      //delete
      //var deleteBtn = document.querySelectorAll(".deleteBtn");
      NewDeleteBtn.addEventListener("click", deleteFromCart);
      function deleteFromCart() {
        NewDeleteBtn.parentElement.parentElement.remove();
        //decrement number of products
        navBarCart.innerHTML = parseInt(navBarCart.innerHTML) - 1;
        commandeCart.innerHTML = parseInt(commandeCart.innerHTML) - 1;
        //decrement price
        totalAmount.innerHTML =
          parseInt(totalAmount.innerHTML) - parseInt(price[i].innerHTML) + "$";
      }
    } else {
      alert("you have already added this product");
    }
  }
}

//search
for (let i = 0; i < cart.length; i++) {
  navSearch.addEventListener("click", search);
  function search() {
    // console.log(searchInput.value);
    // console.log(productName[i].innerText);
    if (
      productName[i].innerText
        .toLowerCase()
        .includes(searchInput.value.trim().toLowerCase())
    ) {
      var searchNewContainer = document.createElement("div");
      searchNewContainer.appendChild(
        productName[i].parentElement.parentElement
      );
      searchDiv.appendChild(searchNewContainer);
      console.log(productName[i].parentElement.parentElement);
      console.log(carts);
    }
  }
}
