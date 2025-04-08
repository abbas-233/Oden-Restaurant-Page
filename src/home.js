const renderHomePage = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab-content");
  home.innerHTML = `
  <div id="home" class="active" data-tab-content>
    <div class="hero">
      <img src="./images/oden-hero.jpg" alt="Simmering Oden Pot" class="hero-image" style="width: 100%; height: auto; object-fit: cover;" />
      <div class="hero-text" style="text-align: center; padding: 20px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 10px;">Experience the Heartwarming Flavors of OdenY</h1>
        <p style="font-size: 1.2rem; margin-bottom: 20px;">Authentic Japanese Oden, Crafted with Care.</p>
        <a data-tab-target="#menu" class="cta-button" style="padding: 10px 20px; background-color: #ff6347; color: white; text-decoration: none; border-radius: 5px;">View Our Menu</a>
      </div>
    </div>
    <div class="about" style="display: flex; align-items: center; gap: 20px; padding: 20px;">
      <div class="about-image" style="flex: 1;">
        <img src="./images/oden-about.jpg" alt="Oden Ingredients" style="width: 100%; height: auto; border-radius: 10px;" />
      </div>
      <div class="about-text" style="flex: 2;">
        <h2 style="font-size: 2rem; margin-bottom: 10px;">About OdenY</h2>
        <p style="font-size: 1rem; line-height: 1.5;">Oden is a traditional Japanese one-pot dish, simmered in a light, flavorful dashi broth. At OdenY, we use the freshest ingredients and a special broth recipe to bring you the comforting and social experience of enjoying Oden.</p>
      </div>
    </div>
    <div class="featured-menu" style="padding: 20px;">
      <h2 style="font-size: 2rem; text-align: center; margin-bottom: 20px;">Featured Menu Items</h2>
      <div class="menu-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div class="menu-item" style="text-align: center;">
          <img src="./images/daikon.jpg" alt="Daikon Radish" style="width: 100%; height: auto; border-radius: 10px;" />
          <h3 style="font-size: 1.5rem; margin-top: 10px;">Daikon Radish</h3>
          <p style="font-size: 1rem;">Simmered to perfection, this classic Oden ingredient is a must-try.</p>
        </div>
        <div class="menu-item" style="text-align: center;">
          <img src="./images/fish-cake.jpg" alt="Fish Cake" style="width: 100%; height: auto; border-radius: 10px;" />
          <h3 style="font-size: 1.5rem; margin-top: 10px;">Fish Cake</h3>
          <p style="font-size: 1rem;">A flavorful addition to your Oden experience, made with fresh seafood.</p>
        </div>
        <div class="menu-item" style="text-align: center;">
          <img src="./images/konnyaku.jpg" alt="Konnyaku" style="width: 100%; height: auto; border-radius: 10px;" />
          <h3 style="font-size: 1.5rem; margin-top: 10px;">Konnyaku</h3>
          <p style="font-size: 1rem;">A unique and healthy ingredient, perfect for soaking up the broth.</p>
        </div>
      </div>
    </div>
  </div>`;

  contentContainer.appendChild(home);
})();

export { renderHomePage };
