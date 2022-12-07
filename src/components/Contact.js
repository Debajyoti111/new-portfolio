import React from "react";
import style from "../styles/contact.module.scss";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const Contact = () => {
  const swal = Swal;
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.name.value === "" ||
      e.target.subject.value === "" ||
      e.target.message.value === "" ||
      e.target.email.value === ""
    ) {
      swal.fire({
        icon: "error",
        title: "Input Error",
        text: "Please Fill All The Fields With Correct Values!",
      });
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        swal.fire({
          icon: "info",
          title: "Email Sent!",
          text: "Email Was Successfully Sent! I Will Get Back To You As Soon As Possible 😊",
        });
      })
      .catch((err) => {
        swal.fire({
          icon: "error",
          title: "Server Error!",
          text: "Email Couldn't Be Sent! Please Try Again Later!",
        });
      });

    e.target.reset();
  };
  return (
    <div className={style.contactContainer}>
      <h1>Contact Me</h1>
      <span className={style.smallText}>
        Do you have any interesting ideas to discuss with me? Then come join me
        for a cup of coffee
      </span>
      <span>😊</span>
      <div className={style.contactFormAndMapContainer}>
        <div className={style.contactFormContainer}>
          <form onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div>
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div>
              <textarea
                cols="65"
                placeholder="Your Message"
                name="message"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Send Message"
                className={style.submitButton}
              ></input>
            </div>
          </form>
        </div>
        {/* <div className={style.map}>This is where Map will go</div> */}
      </div>
    </div>
  );
};

export default Contact;