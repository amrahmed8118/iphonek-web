// Select all buttons
const buttons = document.querySelectorAll(".buy-btn");

// Create cart counter element
const header = document.querySelector("header");

const cartBox = document.createElement("div");
cartBox.innerHTML = `
    🛒 Cart: <span id="cart-count">0</span>
`;
cartBox.style.position = "absolute";
cartBox.style.top = "20px";
cartBox.style.right = "20px";
cartBox.style.color = "white";
cartBox.style.fontSize = "18px";

header.appendChild(cartBox);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// update counter
function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;
}

// notification
function showNotification(text) {
    const note = document.createElement("div");
    note.textContent = text;

    note.style.position = "fixed";
    note.style.bottom = "20px";
    note.style.right = "20px";
    note.style.background = "#111";
    note.style.color = "#fff";
    note.style.padding = "10px 20px";
    note.style.borderRadius = "8px";
    note.style.opacity = "0";
    note.style.transition = "0.5s";

    document.body.appendChild(note);

    setTimeout(() => {
        note.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        note.style.opacity = "0";
        setTimeout(() => note.remove(), 500);
    }, 2000);
}

// add to cart logic
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.parentElement;

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector(".price").textContent;

        const product = { name, price };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartUI();

        showNotification(`${name} added to cart ✅`);
    });
});

// initialize
updateCartUI();