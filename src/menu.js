const renderMenuPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");

  // --- Menu Data ---
  const menuData = {
    Vegetables: [
      {
        name: "Daikon Radish",
        description: "Simmered to perfection in our special dashi broth.",
        price: "$2.50",
      },
      {
        name: "Konnyaku",
        description: "A healthy and unique addition to your Oden experience.",
        price: "$2.00",
      },
    ],
    Meats: [
      {
        name: "Beef Tendon",
        description: "Tender and flavorful, a classic Oden favorite.",
        price: "$3.50",
      },
      {
        name: "Chicken Meatballs",
        description: "Juicy and seasoned to perfection.",
        price: "$3.00",
      },
    ],
    Seafood: [
      {
        name: "Fish Cake",
        description: "Fresh and flavorful, a must-try in Oden.",
        price: "$2.50",
      },
      {
        name: "Shrimp",
        description: "Delicately cooked to enhance its natural sweetness.",
        price: "$4.00",
      },
    ],
    Eggs: [
      {
        name: "Boiled Egg",
        description: "Perfectly cooked and infused with dashi flavor.",
        price: "$1.50",
      },
    ],
  };
  // --- End Menu Data ---

  const createMenuPage = () => {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");
    menu.classList.add("menu-page"); // Use class for styling

    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    menu.appendChild(title);

    // Loop through categories in menuData
    for (const category in menuData) {
      const section = document.createElement("div");
      section.classList.add("menu-section");

      const categoryTitle = document.createElement("h2");
      categoryTitle.textContent = category;
      section.appendChild(categoryTitle);

      // Loop through items in the category
      menuData[category].forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("span");
        itemPrice.textContent = item.price;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        section.appendChild(menuItem);
      });

      menu.appendChild(section);
    }

    // --- Burger Builder Section (Created Separately) ---
    const burgerBuilderSection = createBurgerBuilderSection();
    menu.appendChild(burgerBuilderSection);
    // --- End Burger Builder Section ---

    return menu; // Return the created menu element
  };

  // Function to create the Burger Builder HTML structure
  const createBurgerBuilderSection = () => {
    const section = document.createElement("div");
    section.classList.add("menu-section", "burger-builder");

    const title = document.createElement("h2");
    const chefIcon = document.createElement("img");
    chefIcon.src = "./images/chef.png";
    chefIcon.alt = "Chef Icon";
    title.appendChild(chefIcon);
    title.appendChild(document.createTextNode(" Build Your Own Burger!"));
    section.appendChild(title);

    const content = document.createElement("div");
    content.classList.add("burger-builder-content");

    // Base Burger
    const base = document.createElement("div");
    base.classList.add("burger-base");
    const baseImg = document.createElement("img");
    baseImg.src = "./images/cheeseburger.png";
    baseImg.alt = "Cheeseburger Base";
    const baseText = document.createElement("p");
    baseText.innerHTML = 'Base Burger: $<span id="burger-base-price">6.00</span>';
    base.appendChild(baseImg);
    base.appendChild(baseText);

    // Options
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("burger-options");
    const optionsTitle = document.createElement("h3");
    optionsTitle.textContent = "Choose Your Add-Ons:";
    const optionsGrid = document.createElement("div");
    optionsGrid.classList.add("options-grid");

    const burgerOptionsData = [
      {
        name: "French Fries",
        price: "2.00",
        imgSrc: "./images/french-fries.png",
        alt: "French Fries",
        text: "Fries",
      },
      {
        name: "Grilled Cheese",
        price: "1.50",
        imgSrc: "./images/grilled-cheese.png",
        alt: "Grilled Cheese",
        text: "Cheese",
      },
      {
        name: "Extra Patty",
        price: "3.00",
        imgSrc: "./images/hamburger.png",
        alt: "Extra Patty",
        text: "Patty",
      },
      {
        name: "Steak Strips",
        price: "4.00",
        imgSrc: "./images/steak.png",
        alt: "Steak Strips",
        text: "Steak",
      },
    ];

    burgerOptionsData.forEach((opt) => {
      const item = document.createElement("div");
      item.classList.add("option-item");
      item.dataset.name = opt.name;
      item.dataset.price = opt.price;
      const img = document.createElement("img");
      img.src = opt.imgSrc;
      img.alt = opt.alt;
      const p = document.createElement("p");
      p.textContent = `${opt.text} (+$${opt.price})`;
      item.appendChild(img);
      item.appendChild(p);
      optionsGrid.appendChild(item);
    });

    optionsDiv.appendChild(optionsTitle);
    optionsDiv.appendChild(optionsGrid);

    // Summary
    const summary = document.createElement("div");
    summary.classList.add("burger-summary");
    const summaryTitle = document.createElement("h3");
    summaryTitle.textContent = "Your Creation:";
    const summaryList = document.createElement("ul");
    summaryList.id = "selected-options";
    const summaryTotal = document.createElement("p");
    summaryTotal.innerHTML = 'Total: $<span id="burger-total-price">6.00</span>';
    const summaryButton = document.createElement("button");
    summaryButton.classList.add("add-to-order-btn");
    summaryButton.textContent = "Add to Order";

    summary.appendChild(summaryTitle);
    summary.appendChild(summaryList);
    summary.appendChild(summaryTotal);
    summary.appendChild(summaryButton);

    // Append all parts to content
    content.appendChild(base);
    content.appendChild(optionsDiv);
    content.appendChild(summary);

    section.appendChild(content);

    return section;
  };

  // Function to attach event listeners for burger builder
  const attachBurgerBuilderListeners = (menuElement) => {
    const burgerBuilder = menuElement.querySelector(".burger-builder"); // Find within the passed menu element
    if (burgerBuilder) {
      const options = burgerBuilder.querySelectorAll(".option-item");
      const selectedList = burgerBuilder.querySelector("#selected-options");
      const totalPriceEl = burgerBuilder.querySelector("#burger-total-price");
      const basePriceEl = burgerBuilder.querySelector("#burger-base-price");
      const basePrice = parseFloat(basePriceEl.textContent) || 6.00;
      let currentTotal = basePrice;
      const selectedItems = new Map();

      const updateSummaryList = () => {
        selectedList.innerHTML = ""; // Clear previous list
        if (selectedItems.size > 0) {
          selectedItems.forEach((item, itemName) => {
            const li = document.createElement("li");
            li.textContent = `+ ${itemName} ($${item.price.toFixed(2)})`;
            // Removed inline styles, rely on CSS
            selectedList.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No add-ons selected.";
          li.classList.add("placeholder"); // Add class for styling
          // Removed inline styles
          selectedList.appendChild(li);
        }
      };

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const name = option.dataset.name;
          const price = parseFloat(option.dataset.price);
          const isSelected = option.classList.contains("selected"); // Check class instead of map

          if (isSelected) {
            // Item exists, remove it (deselect)
            currentTotal -= selectedItems.get(name).price; // Still need map for price lookup on removal
            selectedItems.delete(name);
            option.classList.remove("selected"); // Use class for visual state
            // Removed inline style changes
          } else {
            // Item doesn't exist, add it (select)
            selectedItems.set(name, { price: price });
            currentTotal += price;
            option.classList.add("selected"); // Use class for visual state
            // Removed inline style changes
          }

          // Update the summary list
          updateSummaryList();

          // Update total price
          totalPriceEl.textContent = currentTotal.toFixed(2);
        });

        // Remove JS hover effects, rely on CSS :hover
        // option.addEventListener('mouseenter', () => { ... });
        // option.addEventListener('mouseleave', () => { ... });
      });

      // Add to Order Button Logic
      const addToOrderBtn = burgerBuilder.querySelector(".add-to-order-btn");
      if (addToOrderBtn) {
        addToOrderBtn.addEventListener("click", () => {
          let orderSummary = `Custom Burger:\n- Base: $${basePrice.toFixed(2)}`;
          selectedItems.forEach((item, name) => {
            orderSummary += `\n- ${name}: $${item.price.toFixed(2)}`;
          });
          orderSummary += `\nTotal: $${currentTotal.toFixed(2)}`;

          alert(`Added to order:\n${orderSummary}`);

          // Optional Reset Logic (keep as is for now)
        });
        // Remove JS hover effects, rely on CSS :hover
        // addToOrderBtn.addEventListener('mouseenter', () => ... );
        // addToOrderBtn.addEventListener('mouseleave', () => ... );
      }
      // Initialize summary text
      updateSummaryList(); // Use the refactored function
    }
  };

  // --- Main Render Logic ---
  const render = () => {
    // Clear existing content
    contentContainer.innerHTML = '';

    // Create the menu page structure using data
    const menuElement = createMenuPage();

    // Append the generated menu to the content container
    contentContainer.appendChild(menuElement);

    // Attach event listeners specifically for the burger builder within the newly added menu
    attachBurgerBuilderListeners(menuElement);
  };

  return { render }; // Expose the render function
})();

export { renderMenuPage };
