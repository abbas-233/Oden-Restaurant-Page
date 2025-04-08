const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  menu.innerHTML = `
  <div class="menu-page">
    <h1>Our Menu</h1>
    <div class="menu-section">
      <h2>Vegetables</h2>
      <div class="menu-item">
        <h3>Daikon Radish</h3>
        <p>Simmered to perfection in our special dashi broth.</p>
        <span>$2.50</span>
      </div>
      <div class="menu-item">
        <h3>Konnyaku</h3>
        <p>A healthy and unique addition to your Oden experience.</p>
        <span>$2.00</span>
      </div>
    </div>
    <div class="menu-section">
      <h2>Meats</h2>
      <div class="menu-item">
        <h3>Beef Tendon</h3>
        <p>Tender and flavorful, a classic Oden favorite.</p>
        <span>$3.50</span>
      </div>
      <div class="menu-item">
        <h3>Chicken Meatballs</h3>
        <p>Juicy and seasoned to perfection.</p>
        <span>$3.00</span>
      </div>
    </div>
    <div class="menu-section">
      <h2>Seafood</h2>
      <div class="menu-item">
        <h3>Fish Cake</h3>
        <p>Fresh and flavorful, a must-try in Oden.</p>
        <span>$2.50</span>
      </div>
      <div class="menu-item">
        <h3>Shrimp</h3>
        <p>Delicately cooked to enhance its natural sweetness.</p>
        <span>$4.00</span>
      </div>
    </div>
    <div class="menu-section">
      <h2>Eggs</h2>
      <div class="menu-item">
        <h3>Boiled Egg</h3>
        <p>Perfectly cooked and infused with dashi flavor.</p>
        <span>$1.50</span>
      </div>
    </div>
  </div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
