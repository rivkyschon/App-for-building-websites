import { useState } from "react";
import message from '../../actions/messageAction';
import './reply.css'

export default function Reply(props) {

    const [inputs, setInputs] = useState(props.details);

    const handleChange = (event) => {
        let name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const send = async () => {
        message.updateMessage(inputs);
        props.replyed(props.details);
    }

    return (
        <div className="back">
            <div className="form">
                <h1 class="form-title">reply</h1>
                <h4 className="msg">to: {props.details.email}</h4>

                <div class="form-group">
                    <input type="text" name="subject" id="subject" placeholder="Subject" onChange={handleChange} />
                </div>
                <div class="form-group">
                    <textarea name="message" id="reply" placeholder="Your reply goes here" onChange={handleChange}></textarea>
                </div>
                <button class="btn" onClick={send}>Send</button>

            </div>
        </div>
    )
}