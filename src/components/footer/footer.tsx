import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer">

      <div className="main-footer-container">

        <div className="footer-about">

          <div className="footer-brand">
            <img
              src="http://localhost:5173/src/components/header/header%20image/logo.png"
              alt="MediDove"
            />
          </div>

          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>

          <div className="footer-contact-info">
            <p>✉ &nbsp; info@examplemedical.com</p>
            <p>▣ &nbsp; examplemedical.com</p>
            <p>⚑ &nbsp; 227 Marion Street, Columbia</p>
          </div>

        </div>

        <div className="footer-departments">

          <h3>Departments</h3>

          <div className="footer-department-grid">
            <p>Surgery and Radiology</p>
            <p>Departments</p>

            <p>Family Medicine</p>
            <p>Our Doctors</p>

            <p>Women's Health</p>
            <p>News</p>

            <p>Optician</p>
            <p>Shop</p>

            <p>Pediatrics</p>
            <p>Contact Us</p>

            <p>Dermatology</p>
            <p>Book an Appointment</p>
          </div>

        </div>

        <div className="footer-news">

          <h3>News Feeds</h3>

          <div className="footer-news-item">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=120&q=80"
              alt="News"
            />

            <div>
              <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
              <span>14 Feb 2022</span>
            </div>
          </div>

          <div className="footer-news-item">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=120&q=80"
              alt="News"
            />

            <div>
              <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
              <span>14 Feb 2022</span>
            </div>
          </div>

          <div className="footer-news-item">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=120&q=80"
              alt="News"
            />

            <div>
              <h4>Lorem ipsum dolor sit amet, consectetur.</h4>
              <span>14 Feb 2022</span>
            </div>
          </div>

        </div>

      </div>

      <div className="main-footer-bottom">
        Copyright by@ BasicTheme - 2022
      </div>

    </footer>
  );
}

export default Footer;