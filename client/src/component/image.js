import { useState } from 'react'

function Image1() {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        debugger
        formData.append('file', image.data)
        const response = await fetch('http://localhost:8080/api/website/1/stroe-image', {
            method: 'POST',
            body:  formData,
        })
        if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

    async function get() {
        debugger
        const res = await fetch('http://localhost:8080/api/website/1/show-image');
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        const img = {
            preview: imageObjectURL
        }
        setImage(img);
        debugger
    }

    
    return (
        <div className='App'>
            <h1>Upload to server</h1>
            {image.preview && <img src={image.preview} width='100' height='100' />}
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input type='file' name='file' onChange={handleFileChange}></input>
                <button type='submit'>Submit</button>
            </form>
            {status && <h4>{status}</h4>}
            <button onClick={get}>Get</button>
        </div>
    )
}

export default Image1;