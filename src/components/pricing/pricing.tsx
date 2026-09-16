import { useState } from "react";
import { Link } from "react-router-dom";
import "./pricing.css";
import Appointment from "../Appointment Button/Appointment";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="pricing-section">
      <div className="pricing-header-row">
        <div className="pricing-title-area">
          <span className="pricing-subtitle">Our Plans</span>
          <h2 className="pricing-main-title">Pricing &amp; Plans</h2>
        </div>

        <div className="billing-toggle-container">
          <button
            className={`toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
            onClick={() => setBillingCycle("monthly")}
          >
            MONTHLY
          </button>
          <button
            className={`toggle-btn ${billingCycle === "yearly" ? "active" : ""}`}
            onClick={() => setBillingCycle("yearly")}
          >
            YEARLY
          </button>
        </div>
      </div>

      <div className="pricing-container">
        <div className="pricing-card">
          <div className="pricing-image">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Professional"
            />
          </div>
          <h3>Professional</h3>
          <p>
            Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link to="/contact" className="pricing-card-link">
            <Appointment name={billingCycle === "yearly" ? "PRICE: $425.00" : "PRICE: $45.00"} />
          </Link>
        </div>

        <div className="pricing-card">
          <div className="pricing-image">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="Advanced"
            />
          </div>
          <h3>Advanced</h3>
          <p>
            Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link to="/contact" className="pricing-card-link">
            <Appointment name={billingCycle === "yearly" ? "PRICE: $455.00" : "PRICE: $55.00"} />
          </Link>
        </div>

        <div className="pricing-card">
          <div className="pricing-image">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80"
              alt="Advantage"
            />
          </div>
          <h3>Advantage</h3>
          <p>
            Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo.
          </p>
          <Link to="/contact" className="pricing-card-link">
            <Appointment name={billingCycle === "yearly" ? "PRICE: $489.00" : "PRICE: $65.00"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;