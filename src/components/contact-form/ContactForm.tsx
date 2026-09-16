import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="ContactForm">
      <div className="ContactForm-container">

        <div className="ContactForm-heading">
          <p>Anything On Your Mind</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="ContactForm-fields">

          <div className="ContactForm-row">
            <input type="text" placeholder="YOUR NAME" />
            <input type="email" placeholder="YOUR EMAIL" />
          </div>

          <div className="ContactForm-row">
            <input type="text" placeholder="YOUR PHONE" />
            <input type="text" placeholder="YOUR SUBJECT" />
          </div>

          <textarea placeholder="YOUR MESSAGE"></textarea>

          <button className="ContactForm-button">
            <span>+</span>
            GET ACTION
          </button>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;