const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinkUL = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links ul li");

  burger.addEventListener("click", () => {
    //TOGGLE NAV
    navLinkUL.classList.toggle("nav-active");

    // ANIMATE LINKS
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });

    // ANIMATE BURGER X
    burger.classList.toggle("toggle");
  });
};
navSlide();

//*-----------------------------------------------------------add to cart functionalty
//=> select Elements
let carts = document.querySelectorAll(".btn_addToCard");
let productsInCarts = document.getElementById("products_In_Carts");
//=> my Products Array
let products = [
  {
    id: 0,
    name: "Sense",
    tag: "Smart_watchs",
    price: 129.99,
    storage: 85,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Sense/sense-sage-bage.png ",
  },
  {
    id: 1,
    name: "Epic",
    tag: "Smart_watchs",
    price: 89.99,
    storage: 151,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Epic/Epic-brown.png ",
  },
  {
    id: 2,
    name: "Lily",
    tag: "Smart_watchs",
    price: 249.99,
    storage: 78,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Lily/Lily-white.png ",
  },
  {
    id: 3,
    name: "Odey",
    tag: "Smart_watchs",
    price: 99.99,
    storage: 54,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Odey/Odey-pink.png ",
  },

  {
    id: 4,
    name: "Phinex",
    tag: "Smart_watchs",
    price: 599.99,
    storage: 105,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Phinex/Phinex-brown.png ",
  },

  {
    id: 5,
    name: "Runner",
    tag: "Smart_watchs",
    price: 199.99,
    storage: 65,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Runner/Runner-black.webp ",
  },

  {
    id: 6,
    name: "Soul",
    tag: "Smart_watchs",
    price: 129.99,
    storage: 198,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/Soul/Soul-green.webp ",
  },

  {
    id: 7,
    name: "Versa",
    tag: "Smart_watchs",
    price: 399.99,
    storage: 45,
    inCart: 0,
    path: "./Images/Products/Smart_watchs/versa/versa-olive.png ",
  },

  {
    id: 8,
    name: "Ace",
    tag: "Trackers",
    price: 39.99,
    storage: 62,
    inCart: 0,
    path: "./Images/Products/Trackers/Ace/ace3-black.png ",
  },

  {
    id: 9,
    name: "Charger II",
    tag: "Trackers",
    price: 59.99,
    storage: 17,
    inCart: 0,
    path: "./Images/Products/Trackers/charger 2/charge2-blue.png ",
  },

  {
    id: 10,
    name: "Goronia",
    tag: "Trackers",
    price: 49.99,
    storage: 44,
    inCart: 0,
    path: "./Images/Products/Trackers/Goronia/Goronia-gold.png ",
  },

  {
    id: 11,
    name: "Luxe",
    tag: "Trackers",
    price: 199.99,
    storage: 75,
    inCart: 0,
    path: "./Images/Products/Trackers/luxe/luxe-pink.png ",
  },

  {
    id: 12,
    name: "Rome",
    tag: "Trackers",
    price: 99.99,
    storage: 421,
    inCart: 0,
    path: "./Images/Products/Trackers/Rome/rome-black.png ",
  },

  {
    id: 13,
    name: "Solid",
    tag: "Trackers",
    price: 79.99,
    storage: 159,
    inCart: 0,
    path: "./Images/Products/Trackers/Solid/solid-darkred.png ",
  },

  {
    id: 14,
    name: "Spire",
    tag: "Trackers",
    price: 199.99,
    storage: 244,
    inCart: 0,
    path: "./Images/Products/Trackers/Spire/spire-pink.png ",
  },

  {
    id: 15,
    name: "Wrist V",
    tag: "Trackers",
    price: 89.99,
    storage: 12,
    inCart: 0,
    path: "./Images/Products/Trackers/wrist V/wristV-yellow.png ",
  },

  {
    id: 16,
    name: "Golden",
    tag: "ACCESS",
    price: 19.99,
    storage: 165,
    inCart: 0,
    path: "./Images/Products/ACCESS/golden/golden-gold.png ",
  },

  {
    id: 17,
    name: "Inspire II",
    tag: "ACCESS",
    price: 12.99,
    storage: 142,
    inCart: 0,
    path: "./Images/Products/ACCESS/inspire II/inspire2-blue.png ",
  },

  {
    id: 18,
    name: "Lever",
    tag: "ACCESS",
    price: 25.99,
    storage: 10,
    inCart: 0,
    path: "./Images/Products/ACCESS/lever/lever-pink.png ",
  },

  {
    id: 19,
    name: "Scruch",
    tag: "ACCESS",
    price: 29.99,
    storage: 45,
    inCart: 0,
    path: "./Images/Products/ACCESS/Scruch/scruch-red.png ",
  },
];

//=> looping through all add to cart btns
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

//* when ever we load the page this function do some cheking
function onloadCartNumber() {
  let productsNumber = localStorage.getItem("cartNumbers");
  if (productsNumber) {
    productsInCarts.textContent = productsNumber;
  }
}

function cartNumbers(product) {
  // console.log("products click is ", product);//=> this will be the product DAAAA!!

  let productsNumber = localStorage.getItem("cartNumbers"); //this will be a str
  // Converting productsNumber to a Number
  productsNumber = parseInt(productsNumber);
  //Now we want to Check if we already have a Value in LocalStorge

  if (productsNumber) {
    localStorage.setItem("cartNumbers", productsNumber + 1);
    productsInCarts.textContent = productsNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    productsInCarts.textContent = 1;
  }

  setItem(product);
}

function setItem(product) {
  console.log("i clicked on product", product.name);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("my cartItem are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.id] == undefined) {
      cartItems = {
        ...cartItems,
        [product.id]: product,
      };
    }

    cartItems[product.id].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log("product cost is ", product.price);
  let cartCost = localStorage.getItem("totalCost"); //this will be a str

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + +product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  // let make sure this fun run only on cart page
  let productCountainer = document.querySelector(".products__container");
  let OppsHero = document.querySelector("section");
  let productColumns = document.querySelector(".product-columns");

  if (cartItems && productCountainer) {
    OppsHero.style.display = "none";
    productColumns.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productCountainer.innerHTML += `
      <div class="product-columns">
        <div class="product--image">
          <ion-icon name="close-circle-outline" ></ion-icon>
          <img src="${item.path}"
          />
        </div>
        <div class="product--name">
          <h5>${item.name}</h5>
        </div>
        <div class="product--price">
        
          <p>${item.price}$</p>
        </div>
        <div class="product--Quantity">
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>${item.inCart}</p>
          <ion-icon name="remove-circle-outline"></ion-icon>
        </div>
        <div class="product--total"><p>${(item.price * item.inCart).toFixed(
          2
        )}$</p></div>
      </div>
    </div>
       `;
    });
  }
  console.log(cartItems);
}

const addOne = () => {};

//*Onload the txet Content will be 0 Agian So let fex it by Creating a function that Checks if theres smtng in localStorge  or not first
onloadCartNumber();
//*this will show products on cart page
displayCart();
