const renderHomePage = () => {
  const contentContainer = document.querySelector("#content");
  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.setAttribute("data-tab-content", "");
  home.classList.add("tab-content", "active");

  home.innerHTML = `
    <div class="hero">
      <img src="./images/oden-hero.jpg" alt="Simmering Oden Pot" class="hero-image" />
      <div class="hero-text">
        <h1>Welcome to OdenY</h1>
        <p>Authentic Japanese Oden, Crafted with Care.</p>
        <a data-tab-target="#menu" class="cta-button">Explore Our Menu</a>
      </div>
    </div>
    <div class="about">
      <div class="about-image">
        <img src="./images/oden-about.jpg" alt="Oden Ingredients" />
      </div>
      <div class="about-text">
        <h2>About Us</h2>
        <p>Oden is a traditional Japanese one-pot dish, simmered in a light, flavorful dashi broth. At OdenY, we use the freshest ingredients and a special broth recipe to bring you the comforting and social experience of enjoying Oden.</p>
      </div>
    </div>
    <div class="featured-menu">
      <h2>Featured Menu Items</h2>
      <div class="menu-placeholder">
        <p>Our featured items are coming soon. Stay tuned!</p>
      </div>
    </div>`;

  contentContainer.innerHTML = ""; // Clear existing content
  contentContainer.appendChild(home);
};

export { renderHomePage };
