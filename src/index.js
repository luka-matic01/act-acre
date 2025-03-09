import Header from "./components/Header.js";
import ProductDetails from "./components/ProductDetails.js";
import Ingredients from "./components/Ingredients.js";
import Carousel from "./components/Carousel.js";

document.getElementById("header").innerHTML = Header();
document.getElementById("product-details").innerHTML = ProductDetails();
document.getElementById("ingredients-faq").innerHTML = Ingredients();
Carousel();

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navCenter = document.querySelector(".nav-center");

  menuIcon.addEventListener("click", () => {
    navCenter.classList.toggle("show");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    closeIcon.classList.add("show");

    const menuItems = navCenter.querySelectorAll("li");
    menuItems.forEach((item, index) => {
      item.style.transitionDelay = `${0.1 + index * 0.05}s`;
    });
  });

  closeIcon.addEventListener("click", () => {
    navCenter.classList.remove("show");
    closeIcon.classList.remove("show");

    const menuItems = navCenter.querySelectorAll("li");
    menuItems.forEach((item) => {
      item.style.transitionDelay = "0s";
    });

    setTimeout(() => {
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    }, 300);
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-left") &&
      !e.target.closest(".nav-center.show")
    ) {
      navCenter.classList.remove("show");
      closeIcon.classList.remove("show");

      const menuItems = navCenter.querySelectorAll("li");
      menuItems.forEach((item) => {
        item.style.transitionDelay = "0s";
      });

      setTimeout(() => {
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      }, 300);
    }
  });

  const quantityElement = document.querySelector(".quantity");
  const decreaseButton = document.querySelector(".decrease");
  const increaseButton = document.querySelector(".increase");

  decreaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
    }
  });

  increaseButton.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent, 10);
    quantityElement.textContent = quantity + 1;
  });

  const ingredientItems = document.querySelectorAll(".ingredient-item");
  ingredientItems.forEach((item) => {
    const header = item.querySelector(".ingredient-header");
    const content = item.querySelector(".ingredient-content");
    const icon = header.querySelector(".icon");

    header.addEventListener("click", () => {
      content.classList.toggle("show");
      icon.textContent = content.classList.contains("show") ? "-" : "+";
    });
  });

  const addToCartButton = document.querySelector(".add-to-cart");
  const cartIcon = document.getElementById("cart-icon");

  addToCartButton.addEventListener("click", () => {
    cartIcon.classList.add("animate");
    setTimeout(() => {
      cartIcon.classList.remove("animate");
    }, 300);
  });
});
