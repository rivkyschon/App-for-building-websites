import { useEffect, useState } from "react";
import './image.css'
import Draggable from "react-draggable";

export default function DraggableImage(props) {

    const [buttons, setButtons] = useState(false)

    const [style, setStyle] = useState({
        "position": "absolute",
        "left": props.position.left,
        "top": props.position.top,
        "src": props.src,
        "height": props.height,
        "width": props.width
    });

    useEffect(() => {
        localStorage.setItem('positionX', props.position.left);
        localStorage.setItem('positionY', props.position.top);
    }, [])

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const eventLogger = (e, data) => {

        const x = JSON.parse(localStorage.getItem('positionX')) + data.x;
        const y = JSON.parse(localStorage.getItem('positionY')) + data.y;
        debugger
        localStorage.setItem('positionX', JSON.stringify(x));
        localStorage.setItem('positionY', JSON.stringify(y));
        setStyle(values => ({ ...values, "left": x }))
        setStyle(values => ({ ...values, "top": y }))
    };

    const save = async () => {
        setButtons(false)
        let left = localStorage.getItem('positionX');
        let top = localStorage.getItem('positionY');
        await setStyle(values => ({ ...values, "top": top }));
        await setStyle(values => ({ ...values, "left": left }));
        props.updeteChanges(style, props.id);
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setStyle(values => ({ ...values, "value": base64 }))
    };

    return (
        <Draggable defaultPosition={{ x: 0, y: 0 }} onStop={eventLogger}>
            <div style={style}>
                <img src={style.value} onClick={() => setButtons(true)} style={{ height: style.height, width: style.width }} ></img>

                {buttons && <div>
                    <input type="file" onChange={handleFileUpload} ></input>
                    <button onClick={save}>save</button>
                </div>}
            </div>
        </Draggable>
    )
}
