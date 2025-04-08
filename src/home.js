const renderHomePage = (() => {
  // Container
  const contentContainer = document.querySelector("#content");

  // --- Helper function to create elements with classes and text ---
  const createElement = (tag, classes = [], text = "") => {
    const element = document.createElement(tag);
    if (classes.length > 0) {
      element.classList.add(...classes);
    }
    if (text) {
      element.textContent = text;
    }
    return element;
  };

  // --- Create Hero Section ---
  const createHeroSection = () => {
    const hero = createElement("div", ["hero"]);

    const heroImage = createElement("img", ["hero-image"]);
    heroImage.src = "./images/oden-hero.jpg";
    heroImage.alt = "Simmering Oden Pot";

    const heroTextDiv = createElement("div", ["hero-text"]);
    const heroTitle = createElement(
      "h1",
      [],
      "Experience the Heartwarming Flavors of OdenY"
    );
    const heroSubtitle = createElement(
      "p",
      [],
      "Authentic Japanese Oden, Crafted with Care."
    );
    const ctaButton = createElement("a", ["cta-button"], "View Our Menu");
    ctaButton.dataset.tabTarget = "#menu"; // For tab switching logic

    heroTextDiv.appendChild(heroTitle);
    heroTextDiv.appendChild(heroSubtitle);
    heroTextDiv.appendChild(ctaButton);

    hero.appendChild(heroImage);
    hero.appendChild(heroTextDiv);
    return hero;
  };

  // --- Create About Section ---
  const createAboutSection = () => {
    const about = createElement("div", ["about"]);

    const aboutImageDiv = createElement("div", ["about-image"]);
    const aboutImage = createElement("img");
    aboutImage.src = "./images/oden-about.jpg";
    aboutImage.alt = "Oden Ingredients";
    aboutImageDiv.appendChild(aboutImage);

    const aboutTextDiv = createElement("div", ["about-text"]);
    const aboutTitle = createElement("h2", [], "About OdenY");
    const aboutParagraph = createElement(
      "p",
      [],
      "Oden is a traditional Japanese one-pot dish, simmered in a light, flavorful dashi broth. At OdenY, we use the freshest ingredients and a special broth recipe to bring you the comforting and social experience of enjoying Oden."
    );
    aboutTextDiv.appendChild(aboutTitle);
    aboutTextDiv.appendChild(aboutParagraph);

    about.appendChild(aboutImageDiv);
    about.appendChild(aboutTextDiv);
    return about;
  };

  // --- Create Featured Menu Section (Structure Only) ---
  // Note: Specific items might be dynamically loaded or static as needed
  const createFeaturedMenuSection = () => {
    const featuredMenu = createElement("div", ["featured-menu"]);
    const featuredTitle = createElement(
      "h2",
      [],
      "Featured Menu Items"
    );
    // Placeholder for actual menu items - add logic here if needed
    const itemsPlaceholder = createElement(
      "p",
      [],
      "(Featured items coming soon...)"
    );
    itemsPlaceholder.style.textAlign = "center"; // Example style if needed
    itemsPlaceholder.style.fontStyle = "italic";

    featuredMenu.appendChild(featuredTitle);
    featuredMenu.appendChild(itemsPlaceholder); // Add items here later
    return featuredMenu;
  };

  // --- Main Render Logic ---
  const render = () => {
    // Clear existing content
    contentContainer.innerHTML = "";

    // Create the main home container
    const home = createElement("div", ["tab-content", "active"]);
    home.setAttribute("id", "home");
    home.setAttribute("data-tab-content", "");

    // Create and append sections
    const heroSection = createHeroSection();
    const aboutSection = createAboutSection();
    const featuredMenuSection = createFeaturedMenuSection();

    home.appendChild(heroSection);
    home.appendChild(aboutSection);
    home.appendChild(featuredMenuSection);

    // Append the generated home page to the main content container
    contentContainer.appendChild(home);

    // Note: Event listeners for tab switching are likely handled elsewhere (e.g., index.js or pageload.js)
    // If the CTA button needs a specific listener here, add it.
  };

  return { render }; // Expose the render function
})();

export { renderHomePage };
