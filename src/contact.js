const renderContactPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.innerHTML = `
    <div class="contact-page">
      <h1>Contact Us</h1>
      <div class="contact-info">
        <div class="info-item">
          <h2>Address</h2>
          <p>123 Culinary Lane, Food City, FC 56789</p>
        </div>
        <div class="info-item">
          <h2>Phone</h2>
          <p>(123)-456-7890</p>
        </div>
        <div class="info-item">
          <h2>Email</h2>
          <p>contact@odeny.com</p>
        </div>
        <div class="info-item">
          <h2>Opening Hours</h2>
          <p>Mon-Fri: 9am-9pm<br>Sat-Sun: 10am-11pm</p>
        </div>
      </div>
      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <form onsubmit="return false">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="map">
        <h2>Find Us</h2>
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
      </div>
    </div>`;

  contentContainer.appendChild(contact);
})();

export { renderContactPage };
