import './started.css'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function GettingStarted() {
    let nevigate = useNavigate();
    const port = 8080;
    const [inputs, setInputs] = useState({ kind: "", websiteName: "", templateType: "" });
    let arr = [true, false, false, false];
    const [curenrtStep, setCurenrtStep] = useState(0);
    const [step, setStep] = useState(arr);
    const [value, setvalue] = useState("");
    const [kind, setKind] = useState("")
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setvalue(value);

        switch (value) {
            case "portfolio":
                setKind("portfolio")
                value = 1;
                break;
            case "Blog":
                setKind("blog")
                value = 2;
                break;
        }

        setInputs(values => ({ ...values, [name]: value }))

    }

    const chosenTemplate = (value) => {


        setInputs(values => ({ ...values, "templateType": value }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const changeStep = (event) => {
        const set = [...step];
        set[curenrtStep] = false;
        set[curenrtStep + 1] = true;
        setStep(set)
        let current = curenrtStep + 1;
        setCurenrtStep(current)
    }

    const startDesigning = async () => {
        console.log(inputs);
        debugger;
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        try {
            let res = await fetch(`http://localhost:${port}/api/website/${JSON.parse(localStorage.getItem('userID'))}/create`, requestOptions);
            res = await res.json();
            debugger
            if (!res.insertId) {
                throw ("you don't exist, please sign up");
            }
            else {

                const templateType = String.fromCharCode(inputs.templateType + 64);
                localStorage.setItem('siteID', res.insertId)
                nevigate(`/${kind}/${templateType}/create`)
            }
        }
        catch (err) {
            alert(err);
        }
        debugger;
    }

    return (
        <>
            {step[0] &&
                <>
                    <h1>What kind of website are you creating?</h1>
                    <div className="text">
                        <input type="text" value={value} ></input>
                        {value && <input type="button" value="Next" onClick={changeStep} />}
                    </div>
                    <br />
                    <button onClick={handleChange} value="portfolio" name="kind">portfolio</button>
                    <br />
                    <br />
                    <button onClick={handleChange} value="Blog" name="kind">Blog</button>
                </>
            }
            {step[1] && <>
                <h1>What would you like to call your website?</h1>
                <h4>You can change it anyTime.</h4>
                <div>
                    <input type="text" name="websiteName" onChange={handleChange}></input>
                    {inputs.websiteName && <input type="button" value="Next" onClick={changeStep} />}
                </div>
            </>}
            {step[2] && <>

                <h1>Which template do you want to start with?</h1>
                <div className='images'>
                    <div className='img1 img' name={1} onClick={() => chosenTemplate(1)}></div>
                    <div className='img2 img' name={2} onClick={() => chosenTemplate(2)}></div>
                    <div className='img3 img' name={3} onClick={() => chosenTemplate(3)}></div>
                </div>
                {inputs.templateType && <input type="button" value="Next" onClick={changeStep} />}
            </>}
            {step[3] && <>

                <h4>You're ready for your next step!</h4>
                <h1>Continue setting up your</h1>
                <h1>website in your Dashboard</h1>
                <div>
                    <input type="button" value="Go to DashBoard" onClick={startDesigning} className="goDashBoard" />
                </div>
            </>}
        </>
    )
}