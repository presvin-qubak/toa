
import React from "react";
import "./Services.css";

import fastDelivery from "../../assets/fast-delivery.jpeg";
import hygieneSafety from "../../assets/hygiene-safety.jpeg";
import onTimeService from "../../assets/on-time-service.jpeg";
import pureQuality from "../../assets/pure-quality.jpeg";

const services = [
  {
    id: 1,
    icon: "🚚",
    title: "Fast Delivery",
    image: fastDelivery,
    description:
      "Fast and reliable delivery to your doorstep.",
  },
  {
    id: 2,
    icon: "🧼",
    title: "Hygiene & Safety",
    image: hygieneSafety,
    description:
      "Clean and safe food products prepared with care.",
  },
  {
    id: 3,
    icon: "⏰",
    title: "On-Time Service",
    image: onTimeService,
    description:
      "Reliable service and on-time delivery every time.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "Pure Quality",
    image: pureQuality,
    description:
      "Quality products made with care and love.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      {/* Heading */}
      <div className="services-heading">
        <span>WHAT WE OFFER</span>

        <h2>
          Our <strong>Services</strong>
        </h2>

        <p>
          Quality products, trusted service and a better
          shopping experience with TOA.
        </p>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>

            {/* Image */}
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            {/* Content */}
            <div className="service-content">
              <h3>
                <span>{service.icon}</span>{" "}
                {service.title}
              </h3>

              <p>{service.description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;
