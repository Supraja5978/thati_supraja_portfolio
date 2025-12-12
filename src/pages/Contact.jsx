import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
    return(
        <section className="section container">
        <h3>Contact</h3>
        <h2><p>Let's Chat</p></h2>

        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you.'); }}>
        <label>
        <input type="text" placeholder="Name" name="name" required />
        </label>
        <label>
        <input type="email" placeholder="Email" name="email" required />
        </label>
        <label>
        <textarea name="message" placeholder="Message" rows="8" required />
        </label>
        <button type="submit" className="btn">Submit</button>
        </form>
        </section>
    );
}
export default Contact;