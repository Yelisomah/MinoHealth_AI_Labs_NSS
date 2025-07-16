import { useState } from "react";
import "./PricingComponent.css";

const plans = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];



export default function PricingComponent() {
  const [index, setIndex] = useState(2); // Default to 100K
  const [yearly, setYearly] = useState(false);

  const { views, price } = plans[index];
  const finalPrice = yearly ? (price * 0.75).toFixed(2) : price.toFixed(2);

  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <h1 className="pricing-title">Simple, traffic-based pricing</h1>
        <p className="pricing-subtitle">
          Sign-up for our 30-day trial. No credit card required.
        </p>

        <div className="pageviews">{views} Pageviews</div>

        <input
          type="range"
          min="0"
          max={plans.length - 1}
          value={index}
          onChange={(e) => setIndex(parseInt(e.target.value))}
          className="slider"
        />

        <div className="price-display">
          <span className="price">${finalPrice}</span>
          <span className="per-month">/ month</span>
        </div>

        <div className="billing-toggle">
          <span>Monthly Billing</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={yearly}
              onChange={() => setYearly(!yearly)}
            />
            <span className="slider-switch"></span>
          </label>
          <span>Yearly Billing</span>
          <span className="discount">25% discount</span>
        </div>

        <ul className="features-list">
          <li>✔ Unlimited websites</li>
          <li>✔ 100% data ownership</li>
          <li>✔ Email reports</li>
        </ul>

        <button className="trial-button">Start my trial</button>
      </div>
    </div>
  );
}
