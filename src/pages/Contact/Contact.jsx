
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    // Check empty fields
    if (!name || !email || !subject || !message) {
      toast.error("Please fill all the fields!");
      return;
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    try {
      setLoading(true);

      // Send data to backend
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Thank you for contacting TOA!");

      // Clear form after successful submission
      form.reset();

    } catch (error) {
      console.error("Contact Error:", error);

      toast.error(
        error.message || "Something went wrong. Please try again!"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">

      <div className="contact-info">

        <span className="contact-tag">GET IN TOUCH</span>

        <h2>
          Contact <span>TOA</span>
        </h2>

        <p>
          Have a question about our homemade banana chips
          or other products? We would love to hear from you!
        </p>

        <div className="contact-details">

          <h3>📍 Address</h3>
          <p>Your Store Address</p>

          <h3>📧 Email</h3>
          <p>presvin10@gmail.com</p>

          <h3>📞 Phone</h3>
          <p>+971 52 847 1068</p>

        </div>

      </div>

      <div className="contact-form">

        <h3>Send Us a Message</h3>

        <form onSubmit={handleSubmit} noValidate>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            disabled={loading}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
