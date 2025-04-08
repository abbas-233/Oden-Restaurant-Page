const createHeader = () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("sticky"); // Keep sticky class if needed

  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "OdenY";

  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  const homeLi = document.createElement("li");
  homeLi.dataset.tabTarget = "#home"; // Keep data attribute for targeting
  homeLi.classList.add("tab", "active"); // Start with home active
  homeLi.textContent = "Home";

  const menuLi = document.createElement("li");
  menuLi.dataset.tabTarget = "#menu";
  menuLi.classList.add("tab");
  menuLi.textContent = "Menu";

  const contactLi = document.createElement("li");
  contactLi.dataset.tabTarget = "#contact";
  contactLi.classList.add("tab");
  contactLi.textContent = "Contact Us";

  // Hamburger Icon (assuming it's needed)
  const hamburgerDiv = document.createElement("div");
  hamburgerDiv.classList.add("hamburger");
  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.classList.add(`line${i + 1}`);
    hamburgerDiv.appendChild(line);
  }

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);

  nav.appendChild(restaurantName);
  nav.appendChild(ul);
  nav.appendChild(hamburgerDiv); // Add hamburger to nav

  header.appendChild(nav);
  return header;
};

const createFooter = () => {
  const footer = document.createElement("footer");

  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} OdenY. All rights reserved.`; // Use innerHTML for copyright symbol

  const address = document.createElement("p");
  address.textContent = "123 Culinary Lane, Food City, FC 56789 | (123)-456-7890";

  footer.appendChild(copyright);
  footer.appendChild(address);
  return footer;
};

export { createHeader, createFooter };