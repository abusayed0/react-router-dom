import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Us.</h3>
            <form>
                <label>
                    <span>Your Email :</span>
                    <input type="email" name="email" id="" required/>
                </label>
                <label>
                    <span>Your Message :</span>
                    <textarea  name="message" required>

                    </textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Contact;