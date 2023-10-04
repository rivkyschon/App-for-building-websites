import { useEffect, useState } from "react";
import './image.css'

export default function Image(props) {

    const [buttons, setButtons] = useState(false)

    const [style, setStyle] = useState({
        "src": props.src,
        "height":props.height,
        "width":props.width,
    });

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

    const save = async () => {
        setButtons(false);
        props.updeteChanges(style, props.id);
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setStyle(values => ({ ...values, "src": base64 }))
    };

    return (
            <div style={style}>
                <img src={style.src} style={{"height":props.height,"width":props.width}}onClick={() => setButtons(true)}  ></img>

                {buttons && <div>
                    <input type="file" onChange={handleFileUpload} ></input>
                    <button onClick={save}>save</button>
                </div>}
            </div>
    )
}
