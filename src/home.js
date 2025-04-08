const renderHomePage = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab-content");
  home.innerHTML = `
  <div id="home" class="active" data-tab-content>
    <div class="hero">
      <img src="./images/oden-hero.jpg" alt="Simmering Oden Pot" class="hero-image" />
      <div class="hero-text">
        <h1>Experience the Heartwarming Flavors of OdenY</h1>
        <p>Authentic Japanese Oden, Crafted with Care.</p>
        <a data-tab-target="#menu" class="cta-button">View Our Menu</a>
      </div>
    </div>
    <div class="about">
      <div class="about-image">
        <img src="./images/oden-about.jpg" alt="Oden Ingredients" />
      </div>
      <div class="about-text">
        <h2>About OdenY</h2>
        <p>Oden is a traditional Japanese one-pot dish, simmered in a light, flavorful dashi broth. At OdenY, we use the freshest ingredients and a special broth recipe to bring you the comforting and social experience of enjoying Oden.</p>
      </div>
    </div>
    <div class="featured-menu">
      <h2>Featured Menu Items</h2>
      <div class="menu-grid">
        <div class="menu-item">
          <img src="./images/daikon.jpg" alt="Daikon Radish" />
          <h3>Daikon Radish</h3>
          <p>Simmered to perfection, this classic Oden ingredient is a must-try.</p>
        </div>
        <div class="menu-item">
          <img src="./images/fish-cake.jpg" alt="Fish Cake" />
          <h3>Fish Cake</h3>
          <p>A flavorful addition to your Oden experience, made with fresh seafood.</p>
        </div>
        <div class="menu-item">
          <img src="./images/konnyaku.jpg" alt="Konnyaku" />
          <h3>Konnyaku</h3>
          <p>A unique and healthy ingredient, perfect for soaking up the broth.</p>
        </div>
      </div>
    </div>
  </div>`;

  contentContainer.appendChild(home);
})();

export { renderHomePage };
