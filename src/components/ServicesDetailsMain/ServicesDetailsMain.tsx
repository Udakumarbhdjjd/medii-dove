import "./ServicesDetailsMain.css";

function ServicesDetailsMain() {
  return (
    <section className="services-details-main-section">
      <div className="services-details-container">
        
        <div className="services-details-left">
          <span className="subtitle">Medical Services</span>
          <h1 className="main-title">
            We are here to help <br />
            when you need us.
          </h1>

          <p className="intro-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehender in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p className="secondary-paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">+</div>
              <div className="feature-content">
                <h3>Core Features</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">+</div>
              <div className="feature-content">
                <h3>Core Features</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="services-details-sidebar">
          

          <div className="sidebar-banner-img">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
              alt="Medical Team"
            />
          </div>


          <div className="sidebar-widget">
            <h3 className="widget-title">More Services</h3>
            <ul className="services-menu-list">
              <li><a href="#body-surgery">Body Surgery &rarr;</a></li>
              <li><a href="#dental-care">Dental Care &rarr;</a></li>
              <li><a href="#eye-care">Eye Care &rarr;</a></li>
              <li><a href="#blood-cancer">Blood Cancer &rarr;</a></li>
              <li><a href="#neurology-sargery">Neurology Surgery &rarr;</a></li>
              <li><a href="#allergic-issue">Allergic Issue &rarr;</a></li>
            </ul>
          </div>

  
          <div className="sidebar-widget">
            <h3 className="widget-title">Get Some Advice?</h3>
            <form className="advice-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <select defaultValue="">
                <option value="" disabled>Select Services</option>
                <option value="surgery">Body Surgery</option>
                <option value="dental">Dental Care</option>
                <option value="neurology">Neurology</option>
              </select>
              <button type="button" className="submit-btn">
                <span>+</span> REQUEST FOR A SCAN
              </button>
            </form>
          </div>

      
          <div className="sidebar-promo-card">
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80"
              alt="Healthcare Promo"
              className="promo-bg-img"
            />
            <div className="promo-overlay">
              <span className="promo-subtitle">24/7 ONLINE SUPPORT</span>
              <h3>Medical &amp; Health Care Services</h3>
              <button type="button" className="promo-btn">CONTACT US</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesDetailsMain;