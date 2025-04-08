// Improved createHeader function
const createHeader = () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("sticky"); // Sticky navigation bar

  // Restaurant name
  const restaurantName = document.createElement("h2");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "OdenY";

  // Navigation links
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  const tabs = [
    { id: "#home", text: "Home", classes: ["tab", "active"] },
    { id: "#menu", text: "Menu", classes: ["tab"] },
    { id: "#contact", text: "Contact Us", classes: ["tab"] },
  ];

  tabs.forEach((tab) => {
    const li = document.createElement("li");
    li.dataset.tabTarget = tab.id;
    li.classList.add(...tab.classes);
    li.textContent = tab.text;
    ul.appendChild(li);
  });

  // Hamburger menu for mobile view
  const hamburgerDiv = document.createElement("div");
  hamburgerDiv.classList.add("hamburger");
  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.classList.add(`line${i + 1}`);
    hamburgerDiv.appendChild(line);
  }

  // Assemble navigation bar
  nav.appendChild(restaurantName);
  nav.appendChild(ul);
  nav.appendChild(hamburgerDiv);

  header.appendChild(nav);
  return header;
};

// Improved createFooter function
const createFooter = () => {
  const footer = document.createElement("footer");

  // Copyright information
  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} OdenY. All rights reserved.`;

  // Address and contact details
  const address = document.createElement("p");
  address.textContent = "123 Culinary Lane, Food City, FC 56789 | (123)-456-7890";

  // Assemble footer
  footer.appendChild(copyright);
  footer.appendChild(address);
  return footer;
};

export { createHeader, createFooter };