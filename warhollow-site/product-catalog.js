const PRODUCTS = [
  {
    key: "ghost",
    name: "Ghost",
    icon: "/assets/product-icons/ghost-headquarters.webp",
    level: "Essential Headquarters",
    description: "A quiet, focused presence. Your essential AI workspace.",
    price: "$99",
    cadence: "/month",
    specs: ["Ubuntu Linux", "4 vCPU", "16 GB RAM", "100 GB storage"],
    available: true,
  },
  {
    key: "shadow",
    name: "Shadow",
    icon: "/assets/product-icons/shadow-headquarters.webp",
    level: "Advanced Headquarters",
    description: "A deeper presence that follows your work. A richer, more complete headquarters.",
    price: "$169",
    cadence: "/month",
    specs: ["Ubuntu Linux", "8 vCPU", "32 GB RAM", "140 GB storage"],
    available: true,
    featured: true,
  },
  {
    key: "sentinel",
    name: "Sentinel",
    icon: "/assets/product-icons/sentinel-headquarters.webp",
    level: "High-Capacity Headquarters",
    description: "A powerful presence that stays ready. Built for demanding work.",
    price: "$399",
    cadence: "/month",
    specs: ["Ubuntu Linux", "16 vCPU", "64 GB RAM", "320 GB storage"],
    available: true,
  },
];

class ProductCatalog extends HTMLElement {
  connectedCallback() {
    const market = this.dataset.market === "singapore";
    this.innerHTML = `<div class="product-grid">${PRODUCTS.map((product, index) => `
      <article class="product-card product-${product.key}${product.featured ? " product-featured" : ""}">
        <div class="product-topline"><span class="product-index">0${index + 1}</span><span class="product-status">${product.available ? "Available" : "Price pending"}</span></div>
        <p class="product-family">${product.level}</p>
        <div class="product-heading">
          <img class="product-icon" src="${product.icon}" alt="" width="512" height="512" loading="lazy" decoding="async">
          <h3>${product.name}</h3>
        </div>
        <p class="product-description">${product.description}</p>
        <div class="product-price"><strong>${product.price}</strong>${product.cadence ? `<span>${product.cadence}</span>` : ""}</div>
        <ul class="spec-list" aria-label="${product.name} specifications">${product.specs.map((spec) => `<li>${spec}</li>`).join("")}</ul>
        ${product.available
          ? `<a class="button ${product.featured ? "primary" : "secondary"}" href="https://portal.warhollow.com">${market ? "Launch " : "Choose "}${product.name}<span aria-hidden="true">↗</span></a>`
          : `<span class="button disabled" aria-disabled="true">Not yet available</span>`}
      </article>`).join("")}</div>
      <p class="catalog-note">Ghost, Shadow, and Sentinel are recurring monthly subscriptions. Execution location: New York, United States.</p>`;
  }
}

customElements.define("product-catalog", ProductCatalog);
