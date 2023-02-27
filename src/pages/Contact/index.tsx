import { Box } from "@mui/material";
import { styles_contact } from "./styled";
import phonePNG from "../../chest/files/phone.png";

export default function Contact() {
  return (
    <Box sx={styles_contact}>
      <h2 className="regular-title">Contact</h2>
      <div className="form-container">
        <img src={phonePNG} alt="phone" />
        <form
          className="form-container"
          method="post"
          action="https://formspree.io/f/xzbogowd"
        >
          <div className="input-container">
            <label>Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              name="email"
              placeholder="Enter your email"
              type="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-container">
            <label>Subject</label>
            <input name="matter" placeholder="Subject" autoComplete="off" />
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write here your message"
              autoComplete="off"
            ></textarea>
          </div>
          <button className="contact-button" type="submit">
            Contact
          </button>
        </form>
      </div>
    </Box>
  );
}
