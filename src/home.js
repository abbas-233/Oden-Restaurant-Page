const renderHomePage = () => {
  // Create main home container
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.setAttribute("data-tab-content", "");
  home.classList.add("tab-content", "active");

  // Create Hero Section
  const hero = document.createElement("div");
  hero.classList.add("hero");

  // Hero Image
  const heroImage = document.createElement("img");
  heroImage.src = "./images/oden-hero.jpg";
  heroImage.alt = "Simmering Oden Pot";
  heroImage.classList.add("hero-image");
  hero.appendChild(heroImage);

  // Hero Text
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "Experience the Heartwarming Flavors of OdenY";
  heroText.appendChild(heroTitle);

  const heroSubtitle = document.createElement("p");
  heroSubtitle.textContent = "Authentic Japanese Oden, Crafted with Care.";
  heroText.appendChild(heroSubtitle);

  // CTA Button
  const ctaButton = document.createElement("a");
  ctaButton.textContent = "View Our Menu";
  ctaButton.classList.add("cta-button");
  ctaButton.setAttribute("data-tab-target", "#menu");
  heroText.appendChild(ctaButton);

  hero.appendChild(heroText);
  home.appendChild(hero);

  // Create About Section
  const about = document.createElement("div");
  about.classList.add("about");

  // About Image
  const aboutImageDiv = document.createElement("div");
  aboutImageDiv.classList.add("about-image");

  const aboutImage = document.createElement("img");
  aboutImage.src = "./images/oden-about.jpg";
  aboutImage.alt = "Oden Ingredients";
  aboutImageDiv.appendChild(aboutImage);

  // About Text
  const aboutTextDiv = document.createElement("div");
  aboutTextDiv.classList.add("about-text");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About OdenY";
  aboutTextDiv.appendChild(aboutTitle);

  const aboutParagraph = document.createElement("p");
  aboutParagraph.textContent = "Oden is a traditional Japanese one-pot dish, simmered in a light, flavorful dashi broth. At OdenY, we use the freshest ingredients and a special broth recipe to bring you the comforting and social experience of enjoying Oden.";
  aboutTextDiv.appendChild(aboutParagraph);

  about.appendChild(aboutImageDiv);
  about.appendChild(aboutTextDiv);
  home.appendChild(about);

  // Create Featured Menu Section
  const featuredMenu = document.createElement("div");
  featuredMenu.classList.add("featured-menu");

  const featuredTitle = document.createElement("h2");
  featuredTitle.textContent = "Featured Menu Items";
  featuredMenu.appendChild(featuredTitle);

  // Placeholder for featured items
  const itemsPlaceholder = document.createElement("p");
  itemsPlaceholder.textContent = "(Featured items coming soon...)";
  itemsPlaceholder.classList.add("placeholder-text");
  featuredMenu.appendChild(itemsPlaceholder);

  home.appendChild(featuredMenu);

  // Add to DOM
  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = ""; // Clear existing content
  contentContainer.appendChild(home);
};

export { renderHomePage };
