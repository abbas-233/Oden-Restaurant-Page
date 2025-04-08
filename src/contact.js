const renderContactPage = (() => {
  //container
  const contentContainer = document.querySelector("#content");
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("data-tab-content", "");
  contact.innerHTML = `
  <div class="contact-page" style="padding: 20px;">
    <h1 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px;">Contact Us</h1>
    <div class="contact-info" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
      <div class="info-item" style="text-align: center;">
        <h2 style="font-size: 1.5rem;">Address</h2>
        <p>123 Culinary Lane, Food City, FC 56789</p>
      </div>
      <div class="info-item" style="text-align: center;">
        <h2 style="font-size: 1.5rem;">Phone</h2>
        <p>(123)-456-7890</p>
      </div>
      <div class="info-item" style="text-align: center;">
        <h2 style="font-size: 1.5rem;">Email</h2>
        <p>contact@odeny.com</p>
      </div>
      <div class="info-item" style="text-align: center;">
        <h2 style="font-size: 1.5rem;">Opening Hours</h2>
        <p>Mon-Fri: 9am-9pm<br>Sat-Sun: 10am-11pm</p>
      </div>
    </div>
    <div class="contact-form" style="margin-top: 20px;">
      <h2 style="text-align: center; font-size: 2rem; margin-bottom: 20px;">Send Us a Message</h2>
      <form onsubmit="return false" style="display: grid; gap: 10px; max-width: 600px; margin: 0 auto;">
        <div class="form-group">
          <label for="name" style="font-size: 1rem;">Your Name</label>
          <input type="text" id="name" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
        </div>
        <div class="form-group">
          <label for="email" style="font-size: 1rem;">Your Email</label>
          <input type="email" id="email" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
        </div>
        <div class="form-group">
          <label for="subject" style="font-size: 1rem;">Subject</label>
          <input type="text" id="subject" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
        </div>
        <div class="form-group">
          <label for="message" style="font-size: 1rem;">Message</label>
          <textarea id="message" required style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" rows="5"></textarea>
        </div>
        <button type="submit" style="padding: 10px 20px; background-color: #ff6347; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
      </form>
    </div>
    <div class="map" style="margin-top: 20px; text-align: center;">
      <h2 style="font-size: 2rem; margin-bottom: 20px;">Find Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214758.79711848433!2d-117.2340910766061!3d32.74964580211821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbfe28190f4b67%3A0x92fa4bca315a5951!2sGourmet%20Delights!5e0!3m2!1sen!2sus!4v1601955396977!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameborder="0"
        style="border: 0; border-radius: 10px;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>`;

  contentContainer.appendChild(contact);
})();

export { renderContactPage };
