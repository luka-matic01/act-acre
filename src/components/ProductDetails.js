import productImage from "../assets/images/product-image.png";
import backButtonIcon from "../assets/icons/back-button-icon.svg";
import organicIcon from "../assets/icons/organic-icon.svg";

export default function ProductDetails() {
  return `
    <div class="product-details">
      <div class="breadcrumbs-mobile mobile-product-only">
        <img src="${backButtonIcon}" alt="Back" class="back-button">
        <span> <span class="product-name-first">ALL PRODUCTS / HAIRCARE / </span> <span class="product-name-second">RESTORATIVE HAIR MASK</span></span>
      </div>
      <div class="product-image">
        <img src="${productImage}" alt="Product Image">
      </div>
      <div class="product-info">
        <div class="breadcrumbs-desktop desktop-product-only">
          <img src="${backButtonIcon}" alt="Back" class="back-button">
          <span>ALL PRODUCTS / HAIRCARE / RESTORATIVE HAIR MASK</span>
        </div>
        <h1 class="product-title">RESTORATIVE HAIR MASK</h1>
        <div class="product-info-content">
        <h2 class="product-subtitle">NOURISHMENT IN A BOTTLE</h2>
        <hr class="divider">
        <p class="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.
        </p>
        <div class="product-icons">
          <div class="icon-row">
            <img src="${organicIcon}" alt="Organic" class="icon">
            <span class="icon-text">100% ORGANIC</span>
          </div>
          <div class="icon-row">
            <img src="${organicIcon}" alt="Organic" class="icon">
            <span class="icon-text">100% ORGANIC</span>
          </div>
          <div class="icon-row">
            <img src="${organicIcon}" alt="Organic" class="icon">
            <span class="icon-text">100% ORGANIC</span>
          </div>
          <div class="icon-row">
            <img src="${organicIcon}" alt="Organic" class="icon">
            <span class="icon-text">100% ORGANIC</span>
          </div>
        </div>
        <hr class="divider">
        <div class="purchase-options">
          <label>
            <input type="radio" name="purchaseOption" checked>
            <span>Buy Once | $38</span>
          </label>
          <label>
            <input type="radio" name="purchaseOption">
            <span>Subscribe (SAVE 20%) | $30</span>
          </label>
        </div>
      <div class="quantity-add-to-cart">
        <div class="quantity-selector">
          <button class="decrease">-</button>
          <span class="quantity">1</span>
          <button class="increase">+</button>
        </div>
        <button class="add-to-cart">ADD TO CART</button>
      </div>
      </div>
    </div>
  `;
}
