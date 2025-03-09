import CarouselImage1 from "../assets/images/carousel-image-1.png";
import prevIcon from "../assets/icons/prev-icon.svg";
import nextIcon from "../assets/icons/next-icon.svg";

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: "HAND POMADE / POMMADE MAINS",
      subtitle: "NOURISHMENT FOR YOUR HANDS",
      price: "159,00 KR",
      img: CarouselImage1,
    },
    {
      id: 2,
      title: "HAND POMADE / POMMADE MAINS",
      subtitle: "NOURISHMENT FOR YOUR HANDS",
      price: "159,00 KR",
      img: CarouselImage1,
    },
    {
      id: 3,
      title: "HAND POMADE / POMMADE MAINS",
      subtitle: "NOURISHMENT FOR YOUR HANDS",
      price: "159,00 KR",
      img: CarouselImage1,
    },
  ];

  const carouselWrapper = document.createElement("div");
  carouselWrapper.className = "carousel-wrapper";

  carouselWrapper.innerHTML = `
    <h2 class="carousel-title">YOU MAY ALSO LIKE</h2>
    <div class="carousel-controls">
      <button class="prev-btn">
        <img src="${prevIcon}" alt="Previous" />
      </button>
      <div class="carousel-container">
        <div class="carousel">
          ${items
            .map(
              (item) => `
          <div class="product">
            <img src="${item.img}" alt="${item.title}" />
            <h3 class="product-item-title">${item.title}</h3>
            <p class="product-item-subtitle">${item.subtitle}</p>
            <span class="product-item-price">${item.price}</span>
          </div>
        `
            )
            .join("")}
        </div>
      </div>
      <button class="next-btn">
        <img src="${nextIcon}" alt="Next" />
      </button>
    </div>
  `;

  document.getElementById("carousel").appendChild(carouselWrapper);

  let currentIndex = 0;
  const carousel = carouselWrapper.querySelector(".carousel");
  const products = carouselWrapper.querySelectorAll(".product");
  const itemCount = products.length;
  let visibleItems = 1;

  const getVisibleItems = () => {
    const carouselWidth = carousel.offsetWidth;
    const productWidth = products[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
    return Math.floor((carouselWidth + gap) / (productWidth + gap));
  };

  const updateCarousel = () => {
    const productWidth = products[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
    const slideWidth = productWidth + gap;
    const maxIndex = Math.max(itemCount - visibleItems, 0);
    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  visibleItems = getVisibleItems();
  updateCarousel();

  window.addEventListener("resize", () => {
    visibleItems = getVisibleItems();
    updateCarousel();
  });

  carouselWrapper.querySelector(".prev-btn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = itemCount - visibleItems;
    }
    updateCarousel();
  });

  carouselWrapper.querySelector(".next-btn").addEventListener("click", () => {
    const maxIndex = Math.max(itemCount - visibleItems, 0);
    if (currentIndex < maxIndex) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });
}
