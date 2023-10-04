import './contact.css'
import React from 'react'
import { useState } from 'react';
import message from '../../actions/messageAction'

export default function Contact() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        let name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const submit = (e) => {
        e.preventDefault()
        message.postMessage(inputs);
    }
    return (
        <body>
            <div class="container">
                <form class="form" onSubmit={submit}>
                    <h1 class="form-title">Message me</h1>
                    <div class="grid">
                        <div class="form-group">
                            <input type="text" name="name" id="name" placeholder="Full name" onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" id="email" placeholder="Your email" onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" id="subject" placeholder="Subject" onChange={handleChange} />
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="message" placeholder="Your message goes here" onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" class="btn" >Send message</button>
                    </div>
                </form>
            </div>
        </body>
    )
}