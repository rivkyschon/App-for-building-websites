import './TextArea.css'
import React, { useEffect, useState } from 'react';
import Draggable from "react-draggable";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function TextArea(props) {

    const [style, setStyle] = useState({
        "color": props.color,
        "value": props.text,
        "fontSize": props.size,
        "type": 1,
        "top": props.position.top,
        "left": props.position.left
    });

    const [buttons, setButtons] = useState(false);

    useEffect(() => {
        saveChanges();
    }, []);

    const eventLogger = async (e, data) => {
        debugger;
        // const x = JSON.parse(localStorage.getItem(`PositionX${props.id}`)) + data.x;
        // const y = JSON.parse(localStorage.getItem(`PositionY${props.id}`)) + data.y;
        //const a = data.getPosition();
        // const x = e.clientX-e.offsetX;
        // const y = e.clientY-e.offsetY;
        const x = style.left + data.lastX;
        const y = style.top + data.lastY;

        await setStyle(values => ({ ...values, "left": x }))
        await setStyle(values => ({ ...values, "top": y }))
    };

    const handleChange = (event) => {

        let name = event.target.name;
        const value = event.target.value;
        setStyle(values => ({ ...values, [name]: value }))

    }

    const textSizeChange = (bigger) => {

        let value = style.fontSize;
        debugger
        bigger ? value += 10 : value -= 10;
        setStyle(values => ({ ...values, "fontSize": value }))
    }

    const handleTextChange = (e) => {
        const value = e.currentTarget.innerText;
        setStyle(values => ({ ...values, "value": value }))
    }

    const saveChanges = () => {
        debugger
        setButtons(false)
        props.updeteChanges(style, props.id);
    }

    const onRelease = (e) => {
        debugger;
        console.log("pageX, pageY = " + e.nativeEvent.pageX + ", " + e.nativeEvent.pageY);
        console.log("locX, locY = " + e.nativeEvent.locationX + ", " + e.nativeEvent.locationY)

    }

    return (

        <>
            <Draggable defaultPosition={{ x: 0, y: 0 }} onStop={eventLogger} handle=".handle"
                onDragRelease={onRelease}>
                <div style={{ "left": props.position.left, "top": props.position.top, height: "fitContent", width: "fitContent", "zIndex": 10 }} className="divvv">

                    <div className="handle" style={{ color: "white" }}> <h5> <i className="bi bi-arrows-move border border-secondary" ></i></h5></div>

                    <h1 className="basicText"
                        style={style}
                        contentEditable={true}
                        onInput={handleTextChange}
                        name="text"
                        onFocus={() => setButtons(true)}>  {props.text}
                    </h1>
                    {buttons && <div className="input-container">
                        <input id="grad-input-3" type="color" className="color-input" onChange={handleChange} name="color" />
                        <div id="custom-input-3" className="custom" />
                        <button onClick={() => textSizeChange(true)}>A</button>
                        <button onClick={() => textSizeChange(false)}>a</button>
                    </div>}

                    {buttons && <button onClick={saveChanges}>save</button>}
                </div>
            </Draggable>
        </>
    )
}


{/* <AvatarEditor
                image="https://via.placeholder.com/150"
                width={250}
                height={250}
                border={50}
                color={[255, 255, 255, 0.6]} // RGBA
                scale={1.2}
                rotate={0}
            /> 

            <form>
                <p>
                    <label htmlFor="file">Upload images</label>
                    <input
                        type="file"
                        id="file"
                        //onChange={changeHandler}
                        accept="image/*"
                        multiple
                    />
                </p>
            </form> */}



