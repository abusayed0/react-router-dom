import React from 'react';
import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
    const data = useActionData();
    return (
        <div className="contact">
            <h3>Contact Us.</h3>
            <Form method="post" action="/help/contact">
                <label>
                    <span>Your Email :</span>
                    <input type="email" name="email" id="" required/>
                </label>
                <label>
                    <span>Your Message :</span>
                    <textarea  name="message" required rows={5}>

                    </textarea>
                </label>
                {data && data.error && <p style={{"color":"red"}}>{data.error}</p>}
                <button>Submit</button>
            </Form>
        </div>
    );
};

export default Contact;
export const contactAction =async({request})=>{
    const data =await request.formData();
    const submission = {
        email : data.get("email"),
        message : data.get("message")
    };
    console.log(submission)

    // send post request 

    if(submission.message.length < 10){
        return {error:"message can't be less than 10 character."}
    }

    // redirect the user 
    return redirect("/");
}