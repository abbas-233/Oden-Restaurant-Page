const renderMenuPage = () => {
  const contentContainer = document.querySelector("#content");

  // Function to create the menu page structure
  const createMenuPage = () => {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");

    // InnerHTML for the menu page
    menu.innerHTML = `
      <div class="hero">
        <h1>Menu</h1>
        <img src="./images/chef.png" alt="Chef Icon" width="50" height="50" />
      </div>
      <div class="menu-container">
        <div class="menu-item">
          <img src="./images/hamburger.png" alt="Hamburger" />
          <div class="item-content">
            <h4>Hamburger: <span>$2.49</span></h4>
            <p>
              Buns, patty, tomato, onions, lettuce, and our secret family
              recipe.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/cheeseburger.png" alt="Cheeseburger" />
          <div class="item-content">
            <h4>Cheeseburger: <span>$2.99</span></h4>
            <p>Similar to our hamburger, but with cheese.</p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/double-cheeseburger.png" alt="Double Cheeseburger" />
          <div class="item-content">
            <h4>Double Cheeseburger: <span>$3.49</span></h4>
            <p>Similar to our cheeseburger, but with an extra patty.</p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/steak.png" alt="Steak" />
          <div class="item-content">
            <h4>Steak: <span>$11.99</span></h4>
            <p>A juicy steak made just how you like it.</p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/ribs.png" alt="BBQ Ribs" />
          <div class="item-content">
            <h4>BBQ Ribs: <span>$8.99</span></h4>
            <p>Barbecue ribs with your choice of add-ons.</p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/grilled-cheese.png" alt="Grilled Cheese Sandwich" />
          <div class="item-content">
            <h4>Grilled Cheese Sandwich: <span>$4.99</span></h4>
            <p>
              A toasted and grilled cheese sandwich, dipped in our special
              sauce.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/caesar-salad.png" alt="Caesar Salad" />
          <div class="item-content">
            <h4>Caesar Salad: <span>$7.99</span></h4>
            <p>
              Your typical caesar salad that comes with your choice of
              dressings.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img src="./images/french-fries.png" alt="French Fries" />
          <div class="item-content">
            <h4>French Fries: <span>$1.99</span></h4>
            <p>
              Sometimes you don't want to eat your burger alone, why not add
              some french fries?
            </p>
          </div>
        </div>
      </div>`;

    return menu;
  };

  // Function to render the menu page
  const render = () => {
    // Clear existing content
    contentContainer.innerHTML = "";

    // Create the menu page structure
    const menuElement = createMenuPage();

    // Append the generated menu to the content container
    contentContainer.appendChild(menuElement);
  };

  render();
};

export { renderMenuPage };
