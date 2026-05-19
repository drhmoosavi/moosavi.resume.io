document.addEventListener("DOMContentLoaded", () => {
  const container =
    document.getElementById("appContainer") || document.querySelector(".nav-transition");
  if (!container) return;

  const navLinks = Array.from(document.querySelectorAll(".head-buttons a"));
  if (!navLinks.length) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      ) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      const targetUrl = new URL(href, window.location.href);
      const sameRoute =
        targetUrl.origin === window.location.origin &&
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search;
      if (sameRoute) return;

      event.preventDefault();

      // Keep the header fixed; animate only page content blocks.
      const contentBlocks = Array.from(container.children).filter(
        (node) => !node.classList.contains("nav-bar")
      );

      contentBlocks.forEach((node) => {
        node.style.transition =
          "opacity 320ms cubic-bezier(0.42, 0, 0.58, 1), transform 320ms cubic-bezier(0.42, 0, 0.58, 1)";
        node.style.opacity = "0";
        node.style.transform = "translateY(7px)";
      });

      window.setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 330);
    });
  });
});
