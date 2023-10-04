
import { assertCompletionStatement } from "@babel/types";
import { useState } from "react";
import action from '../../actions/loginAction.js';
import {useParams } from 'react-router-dom';

export default function ResetPassword() {

    let { email } = useParams();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        let name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.password1 === inputs.password2) {
            action.resetPassword(email, inputs.password1)
        }
        else
            alert("your passwords are not match")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="password" placeholder="Password" onChange={handleChange} name="password1" />
            <input type="password" placeholder="enter your password again" onChange={handleChange} name="password2" />
            <button type="submit">Submit</button>
        </form>
    )
}