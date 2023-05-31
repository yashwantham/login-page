import { useState } from "react"
// import emailjs from '@emailjs/browser';
import sgMail from '@sendgrid/mail';


export function ContactForm() {

  const [emailAddresses, setEmailAddresses] = useState('');

  const handleInputChange = (event) => {
    setEmailAddresses(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipients = emailAddresses.split(',').map((email) => email.trim());
    sendEmail(recipients);
  };

  sgMail.setApiKey('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');

  const sendEmail = (recipients) => {
    const msg = {
      to: recipients, // Pass the dynamically entered email addresses as an array
      from: 'sender@example.com', // Replace with your email address
      subject: 'Hello from React.js!',
      text: 'This is the email content.',
    };
  
    sgMail.send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return(
    <>
      <section>
      <form onSubmit={handleSubmit}>
      <input type="text" value={emailAddresses} onChange={handleInputChange} />
      <button type="submit">Send Email</button>
    </form>
      </section>
    </>
  )
}