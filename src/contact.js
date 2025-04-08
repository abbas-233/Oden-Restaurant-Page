const renderContactPage = () => {
  // Create the contact page structure
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.classList.add("contact-page");

  // Create contact title
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  contact.appendChild(title);

  // Create contact info section
  const infoSection = document.createElement("div");
  infoSection.classList.add("contact-info");

  // Contact info items
  const infoItems = [
    {
      title: "Address",
      content: "123 Culinary Lane, Food City, FC 56789"
    },
    {
      title: "Phone",
      content: "(123)-456-7890"
    },
    {
      title: "Email",
      content: "contact@odeny.com"
    },
    {
      title: "Opening Hours",
      content: "Mon-Fri: 9am-9pm\nSat-Sun: 10am-11pm"
    }
  ];

  // Create info items
  infoItems.forEach(item => {
    const infoItem = document.createElement("div");
    infoItem.classList.add("info-item");

    const title = document.createElement("h2");
    title.textContent = item.title;
    infoItem.appendChild(title);

    const content = document.createElement("p");
    content.textContent = item.content;
    infoItem.appendChild(content);

    infoSection.appendChild(infoItem);
  });

  contact.appendChild(infoSection);

  // Create contact form
  const formSection = document.createElement("div");
  formSection.classList.add("contact-form");

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Send Us a Message";
  formSection.appendChild(formTitle);

  const form = document.createElement("form");
  form.classList.add("form");
  form.onsubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  // Form fields
  const formFields = [
    { id: "name", label: "Your Name", type: "text" },
    { id: "email", label: "Your Email", type: "email" },
    { id: "subject", label: "Subject", type: "text" },
    { id: "message", label: "Message", type: "textarea" }
  ];

  // Create form groups
  formFields.forEach(field => {
    const group = document.createElement("div");
    group.classList.add("form-group");

    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;
    group.appendChild(label);

    const input = field.type === "textarea" 
      ? document.createElement("textarea")
      : document.createElement("input");
    
    input.setAttribute("id", field.id);
    input.setAttribute("required", "");
    input.classList.add(field.type === "textarea" ? "form-textarea" : "form-input");
    
    group.appendChild(input);
    form.appendChild(group);
  });

  // Add submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("form-button");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  formSection.appendChild(form);
  contact.appendChild(formSection);

  // Create map section
  const mapSection = document.createElement("div");
  mapSection.classList.add("map");

  const mapTitle = document.createElement("h2");
  mapTitle.textContent = "Find Us";
  mapSection.appendChild(mapTitle);

  const iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sGourmet%20Delights!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus";
  iframe.width = "100%";
  iframe.height = "450";
  iframe.frameborder = "0";
  iframe.classList.add("map-iframe");
  iframe.allowfullscreen = "";
  iframe.setAttribute("aria-hidden", "false");
  iframe.tabIndex = 0;

  mapSection.appendChild(iframe);
  contact.appendChild(mapSection);

  // Add to DOM
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(contact);

  // Form submission handler
  function handleSubmit(e) {
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Here you would typically send the data to a server
    console.log("Form submitted:", data);
    
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  }
};

export { renderContactPage };
