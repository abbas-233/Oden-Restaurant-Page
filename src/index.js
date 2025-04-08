import { createHeader, createFooter } from "./pageload";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

// Helper function to create elements with classes and attributes
const createElement = (tag, classes = [], attributes = {}) => {
  const element = document.createElement(tag);
  if (Array.isArray(classes) && classes.length > 0) {
    element.classList.add(...classes);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
};

const initializePage = () => {
  const contentContainer = document.querySelector("#content");
  if (!contentContainer) {
    console.error("Content container not found");
    return;
  }

  // Clear existing content
  contentContainer.innerHTML = "";

  // Create and append header and footer
  const header = createHeader();
  const footer = createFooter();

  // Create main content area
  const mainContent = createElement("main", ["main-content"]);

  // Load initial page content
  const homeContent = createElement("div", ["tab-content", "active"], {
    id: "home",
    "data-tab-content": ""
  });
  renderHomePage();
  mainContent.appendChild(homeContent);

  // Assemble the page
  contentContainer.appendChild(header);
  contentContainer.appendChild(mainContent);
  contentContainer.appendChild(footer);

  // Setup event listeners
  setupEventListeners();
};

const renderPage = (pageName) => {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) {
    console.error("Main content container not found");
    return;
  }

  // Clear existing content
  mainContent.innerHTML = "";

  // Create new content container
  const contentDiv = createElement("div", ["tab-content"], {
    id: pageName,
    "data-tab-content": ""
  });

  // Render the appropriate page
  switch (pageName) {
    case "home":
      renderHomePage();
      break;
    case "menu":
      renderMenuPage();
      break;
    case "contact":
      renderContactPage();
      break;
    default:
      renderHomePage();
      break;
  }

  // Add active class and append to main content
  contentDiv.classList.add("active");
  mainContent.appendChild(contentDiv);
};

const setupEventListeners = () => {
  const contentContainer = document.querySelector("#content");
  if (!contentContainer) return;

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
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Get target page from data attribute
      const targetId = tab.dataset.tabTarget?.substring(1) || "home";
      
      // Update tab states
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Render new page
      renderPage(targetId);

      // Close mobile menu if open
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        burger.classList.remove("toggle");
      }
    });
  });
};

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the app
  initializePage();

  // Optional: Add error handling
  window.addEventListener("error", (error) => {
    console.error("Application Error:", error);
  });
});