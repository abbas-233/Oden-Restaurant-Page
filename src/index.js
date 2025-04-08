import { createHeader, createFooter } from "./pageload";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

// --- Core Elements ---
const contentContainer = document.querySelector("#content");

// --- Initial Page Setup ---
const initializePage = () => {
  // Clear any existing content (important if re-initializing)
  contentContainer.innerHTML = "";

  // Create and append header and footer
  const header = createHeader();
  const footer = createFooter();
  contentContainer.appendChild(header);

  // Create a main content area for dynamic pages
  const mainContent = document.createElement("main");
  mainContent.setAttribute("id", "main-content");
  contentContainer.appendChild(mainContent);

  contentContainer.appendChild(footer);

  // Load the initial page (Home)
  renderHomePage.render(); // Assuming home.js exports { render }

  // Setup Event Listeners *after* elements are in the DOM
  setupEventListeners();
};

// --- Page Rendering Logic ---
const renderPage = (pageName) => {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return; // Guard clause

  mainContent.innerHTML = ""; // Clear previous page content

  switch (pageName) {
    case "home":
      renderHomePage.render();
      break;
    case "menu":
      renderMenuPage.render(); // Assuming menu.js exports { render }
      break;
    case "contact":
      renderContactPage.render(); // Assuming contact.js exports { render }
      break;
    default:
      renderHomePage.render(); // Default to home
  }
};

// --- Event Listeners Setup ---
const setupEventListeners = () => {
  // Hamburger Menu
  const burger = contentContainer.querySelector(".hamburger");
  const navLinks = contentContainer.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("toggle");
    });
  }

  // Navigation Tabs
  const tabs = contentContainer.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Get the target page name (e.g., 'home', 'menu')
      const targetId = tab.dataset.tabTarget.substring(1); // Remove #

      // Remove active class from all tabs and add to the clicked one
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Render the corresponding page
      renderPage(targetId);

      // Close hamburger menu if open on mobile after clicking a link
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
      }
    });
  });

  // Note: Event listeners for dynamic content (like contact form submit or menu button)
  // should be attached *within* their respective render functions (e.g., in contact.js, menu.js)
  // OR use event delegation on `mainContent` if preferred.
  // The form reset logic previously here is removed as it should be in contact.js.
};

// --- Initialize the Application ---
initializePage();

console.log(`App initialized at ${new Date().toLocaleTimeString()}.`);