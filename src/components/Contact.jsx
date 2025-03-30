import React from 'react';
import '../css/Contact.css';
import mailNew from '../assets/mailnew.png'; // Import the mail icon
import telephoneNew from '../assets/telephonenew.png'; // Import the phone icon
import locationNew from '../assets/locationnew.png'; // Import the location icon

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee0c04f7-df49-4db7-a090-ee76d36003a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-left">
        <h1>Let's talk</h1>
        <p>Let's take the time to discuss your projects in detail, and together we will work towards finding the most effective solution.</p>
        <div className="info-div">
          <img src={mailNew} alt="Email icon" /> {/* Use the imported variable */}
          kirubeladdis364@gmail.com<p></p>
        </div>
        <div className="info-div">
          <img src={telephoneNew} alt="Phone icon" /> {/* Use the imported variable */}
          <p>+251932760515</p>
        </div>
        <div className="info-div">
          <img src={locationNew} alt="Location icon" /> {/* Use the imported variable */}
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name'/>
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;