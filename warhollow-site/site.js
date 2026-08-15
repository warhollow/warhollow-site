const mark = `<span class="brand-cursor" aria-hidden="true"><i></i></span>`;

const portalUrl = "https://portal.warhollow.com";

function header() {
  return `<header class="site-header">
    <div class="shell nav-wrap">
      <a class="brand" href="/" aria-label="Warhollow home">${mark}<span>Warhollow</span></a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <a href="/#products">Products</a><a href="/#how-it-works">How it works</a><a href="/#pricing">Pricing</a>
      </nav>
      <div class="nav-actions"><a class="signin" href="${portalUrl}">Sign In</a><a class="button primary small" href="${portalUrl}">Get Started</a></div>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
    </div>
    <nav class="mobile-nav" aria-label="Mobile navigation">
      <a href="/#products">Products</a><a href="/#how-it-works">How it works</a><a href="/#pricing">Pricing</a><a href="${portalUrl}">Sign In</a><a class="button primary" href="${portalUrl}">Get Started</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-inner">
    <div class="footer-brand"><a class="brand" href="/">${mark}<span>Warhollow</span></a><p>A persistent place for your AI, files, tools, applications, and work.</p></div>
    <nav class="footer-links" aria-label="Footer navigation"><a href="/#products">Products</a><a href="/#how-it-works">How it works</a><a href="/#pricing">Pricing</a><a href="${portalUrl}">Customer Portal</a><a href="mailto:wh@thewarhollow.com">Contact</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Service</a></nav>
    <div class="copyright">Copyright 2026 Warhollow LLC</div>
  </div></footer>`;
}

document.querySelectorAll("[data-site-header]").forEach((node) => node.innerHTML = header());
document.querySelectorAll("[data-site-footer]").forEach((node) => node.innerHTML = footer());

const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
if (siteHeader) {
  const setHeader = () => siteHeader.classList.toggle("scrolled", window.scrollY > 12);
  setHeader(); window.addEventListener("scroll", setHeader, { passive: true });
}
if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mobileNav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
  }));
}
