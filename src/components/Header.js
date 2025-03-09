import menuIcon from "../assets/icons/menu-icon.svg";
import closeIcon from "../assets/icons/close-icon.svg";
import logoIcon from "../assets/icons/logo-icon.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import profileIcon from "../assets/icons/profile-icon.svg";
import cartIcon from "../assets/icons/cart-icon.svg";

export default function Header() {
  return `
    <div class="nav-content">
      <div class="nav-left">
        <img src="${menuIcon}" alt="Menu" class="menu-icon mobile-only">
        <img src="${closeIcon}" alt="Close" class="close-icon mobile-only" style="display: none;">
        <img src="${profileIcon}" alt="Profile" class="icon mobile-only">
        <img src="${logoIcon}" alt="Logo" class="logo desktop-only">
      </div>
      <div class="nav-center-mobile mobile-only">
        <img src="${logoIcon}" alt="Logo" class="logo">
      </div>
      <ul class="nav-center">
        <li>Shop</li>
        <li>Science</li>
        <li>Press</li>
        <li>Blogs</li>
        <li>Tutorial</li>
      </ul>
      <div class="nav-right">
        <img src="${searchIcon}" alt="Search" class="search-icon mobile-only">
        <img src="${profileIcon}" alt="Profile" class="icon desktop-only">
        <img src="${searchIcon}" alt="Search" class="search-icon desktop-only">
        <img src="${cartIcon}" alt="Cart" class="icon" id="cart-icon">
      </div>
    </div>
  `;
}
