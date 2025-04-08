const pageLoad = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("header");
  header.innerHTML = `
  <nav class="sticky">
    <h2 class="restaurant-name">OdenY</h2>
    <ul class="nav-links">
      <li data-tab-target="#home" class="tab active">Home</li>
      <li data-tab-target="#menu" class="tab">Menu</li>
      <li data-tab-target="#contact" class="tab">Contact Us</li>
    </ul>
  </nav>`;

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <p>© 2025 OdenY. All rights reserved.</p>
    <p>123 Culinary Lane, Food City, FC 56789 | (123)-456-7890</p>
  `;

  contentContainer.appendChild(header);
  contentContainer.appendChild(footer);
})();