const renderContactPage = () => {
  const contentContainer = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.classList.add("tab-content");

  contact.innerHTML = `
    <div class="hero">
      <h1>Contact Us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="address">
          <p>
            <i class="fi-xnsuxl-map-marker-solid"></i>
            123 Culinary Lane<br />
            Food City, FC 56789
          </p>
        </div>
        <div class="hours">
          <p>
            <i class="fi-cnsuhl-clock-solid"></i>
            <span>Mon-Fri:</span> 9am-9pm<br />
            <span>Sat-Sun:</span> 10am-11pm
          </p>
        </div>
        <div class="phone">
          <p>
            <i class="fi-xnsrxl-phone-solid"></i>
            (123)-456-7890
          </p>
        </div>
      </div>
      <div class="contact-form">
        <form>
          <h3><i class="fi-xwsuxl-envelope-solid"></i> Message Us</h3>
          <div class="input-box">
            <input type="text" id="name" required />
            <label for="name">Full Name</label>
          </div>
          <div class="input-box">
            <input type="email" id="email" required />
            <label for="email">Email</label>
          </div>
          <div class="input-box">
            <textarea id="message" required></textarea>
            <label for="message">Type your message...</label>
          </div>
          <button type="submit" class="cta-button">Send</button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sGourmet%20Delights!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>`;

  contentContainer.innerHTML = ""; // Clear existing content
  contentContainer.appendChild(contact);
};

export { renderContactPage };
