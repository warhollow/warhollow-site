const mark = `<span class="brand-cursor" aria-hidden="true"><i></i></span>`;
const portalUrl = "https://portal.warhollow.com";

function header() {
  return `<header class="site-header">
    <div class="shell nav-wrap">
      <a class="brand" href="/" aria-label="Warhollow home">${mark}<span>Warhollow</span></a>
      <nav class="desktop-nav" aria-label="Primary navigation"><a href="/#headquarters">Headquarters</a><a href="/#how-it-works">How It Works</a><a href="/#headquarters">Pricing</a></nav>
      <div class="nav-actions"><a class="signin" href="${portalUrl}">Sign In</a><a class="button primary small" href="${portalUrl}">Launch Headquarters</a></div>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-navigation"><span></span></button>
    </div>
    <nav class="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><a href="/#headquarters">Headquarters</a><a href="/#how-it-works">How It Works</a><a href="/#headquarters">Pricing</a><a href="${portalUrl}">Sign In</a><a class="button primary" href="${portalUrl}">Launch Headquarters</a></nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-inner">
    <div class="footer-brand"><a class="brand" href="/">${mark}<span>Warhollow</span></a><p>Your AI Headquarters.<br>AI infrastructure, simplified.</p></div>
    <nav class="footer-links" aria-label="Footer navigation"><a href="/#headquarters">Headquarters</a><a href="/#how-it-works">How It Works</a><a href="${portalUrl}">Customer Portal</a><a href="mailto:wh@thewarhollow.com">Contact</a><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms of Service</a></nav>
    <div class="copyright">© 2026 Warhollow LLC · U.S.-based · Globally accessible</div>
  </div></footer>`;
}

document.querySelectorAll("[data-site-header]").forEach((node) => { node.innerHTML = header(); });
document.querySelectorAll("[data-site-footer]").forEach((node) => { node.innerHTML = footer(); });

const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
if (siteHeader) {
  const setHeader = () => siteHeader.classList.toggle("scrolled", window.scrollY > 12);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });
}
if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
