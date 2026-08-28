const foods = [
  { name: "Cheese Burger", price: 60, emoji: "🍔", bg: "#ffe2a8" },
  { name: "Pizza Slice", price: 80, emoji: "🍕", bg: "#ffd6df" },
  { name: "French Fries", price: 45, emoji: "🍟", bg: "#fff0a8" },
  { name: "Fresh Juice", price: 35, emoji: "🥤", bg: "#c8f7e8" },
  { name: "Sandwich", price: 50, emoji: "🥪", bg: "#d9edff" },
  { name: "Noodles", price: 70, emoji: "🍜", bg: "#ffe0c2" },
  { name: "Donut", price: 40, emoji: "🍩", bg: "#f6d9ff" },
  { name: "Ice Cream", price: 45, emoji: "🍦", bg: "#dff7ff" }
];

let cart = [];

const grid = document.getElementById("menuGrid");

grid.innerHTML = foods.map((food, index) => `
  <article class="food-card">
    <div class="food-pic" style="background:${food.bg}">
      ${food.emoji}
    </div>

    <h3>${food.name}</h3>

    <div class="price">
      ₹${food.price}
    </div>

    <button class="add" onclick="addToCart(${index})">
      + Add to Cart
    </button>
  </article>
`).join("");

function addToCart(index) {
  cart.push(foods[index]);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {

  document.getElementById("cartCount").textContent = cart.length;

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  document.getElementById("total").textContent = total;

  const box = document.getElementById("cartItems");

  if (cart.length === 0) {
    box.innerHTML =
      `<p class="empty">Your cart is empty 😋</p>`;
    return;
  }

  box.innerHTML = cart.map((item, index) => `
    <div class="cart-row">
      <span>${item.emoji} ${item.name}</span>
      <span>
        ₹${item.price}
        <button onclick="removeItem(${index})">✕</button>
      </span>
    </div>
  `).join("");
}

function placeOrder() {

  if (cart.length === 0) {
    alert("Please add some food to your cart first!");
    return;
  }

  const orderId =
    "AF" + Math.floor(1000 + Math.random() * 9000);

  alert(
    "🎉 Order Placed Successfully!\n\n" +
    "Order ID: " + orderId +
    "\n\nYour food is being prepared!"
  );

  cart = [];
  renderCart();
}

function scrollToCart() {
  document.getElementById("cart").scrollIntoView({
    behavior: "smooth"
  });
