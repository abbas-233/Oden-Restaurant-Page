const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("data-tab-content", "");
  // Updated menu layout for better organization and spacing
  menu.innerHTML = `
  <div class="menu-page" style="padding: 20px;">
    <h1 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px;">Our Menu</h1>
    <div class="menu-section" style="margin-bottom: 20px;">
      <h2 style="font-size: 2rem; margin-bottom: 10px;">Vegetables</h2>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Daikon Radish</h3>
        <p style="flex: 1; margin: 0 10px;">Simmered to perfection in our special dashi broth.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$2.50</span>
      </div>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Konnyaku</h3>
        <p style="flex: 1; margin: 0 10px;">A healthy and unique addition to your Oden experience.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$2.00</span>
      </div>
    </div>
    <div class="menu-section" style="margin-bottom: 20px;">
      <h2 style="font-size: 2rem; margin-bottom: 10px;">Meats</h2>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Beef Tendon</h3>
        <p style="flex: 1; margin: 0 10px;">Tender and flavorful, a classic Oden favorite.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$3.50</span>
      </div>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Chicken Meatballs</h3>
        <p style="flex: 1; margin: 0 10px;">Juicy and seasoned to perfection.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$3.00</span>
      </div>
    </div>
    <div class="menu-section" style="margin-bottom: 20px;">
      <h2 style="font-size: 2rem; margin-bottom: 10px;">Seafood</h2>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Fish Cake</h3>
        <p style="flex: 1; margin: 0 10px;">Fresh and flavorful, a must-try in Oden.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$2.50</span>
      </div>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Shrimp</h3>
        <p style="flex: 1; margin: 0 10px;">Delicately cooked to enhance its natural sweetness.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$4.00</span>
      </div>
    </div>
    <div class="menu-section">
      <h2 style="font-size: 2rem; margin-bottom: 10px;">Eggs</h2>
      <div class="menu-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <h3 style="font-size: 1.5rem;">Boiled Egg</h3>
        <p style="flex: 1; margin: 0 10px;">Perfectly cooked and infused with dashi flavor.</p>
        <span style="font-size: 1.2rem; font-weight: bold;">$1.50</span>
      </div>
    </div>
  </div>`;

  contentContainer.appendChild(menu);
})();

export { renderMenuPage };
