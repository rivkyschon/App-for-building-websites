

import React,{useState} from 'react';
 
export default function FileUpload(){
  const [postImage, setPostImage] = useState({
    myFile: "",
  });
  const [image, setImage]=useState("")

  const url = "http://localhost:8080/api/image";
  //const createImage = (newImage) => axios.post(url, newImage);

    // const createPost = async (post) => {
    //   try {
    //     await createImage(post);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // };

    async function postImageBase64() {
       debugger;
       const requestOptions = {
           method: 'POST',
           mode: 'cors',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               "imageBase64" : postImage.myFile
           })
       };
       try {
           let image = await fetch("http://localhost:8080/api/image", requestOptions);
           image = await image.json();
           console.log(image);
           if (!image) {
               throw ("you don't exist, please sign up");
           }
           else {
               console.log(image);
           }
       }
       catch (err) {
           alert(err);
       }
   }

    const handleSubmit = (e) => {
      e.preventDefault();
      postImageBase64();
    };


    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        debugger;
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
    const handleFileUpload = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      setPostImage({ ...postImage, myFile: base64 });
    };
///////////////////////////////////
   async function showImage(){
      try {
        let image = await fetch("http://localhost:8080/api/image/3");
        image = await image.json();
        console.log(image);
        setImage(image.base64Image)
        if (!image) {
            throw ("you don't exist, please sign up");
        }
        else {
            console.log(image);
        }
    }
    catch (err) {
        alert(err);
    }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            label="Image"
            name="myFile"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />

          <button>Submit</button>
        </form>
        <button onClick={showImage}>show pic 1</button>
        <img src={image} ></img>
      </div>
    );
        // return (
        //   <div className="App">
        //     <input type="file" onChange={saveFile} name="<NAME>"/>
        //     <button onClick={uploadFile}>Upload</button>
        //     <img src={fileUrl}></img>
        //   </div>
        // );
      
}






      // const [file, setFile] = useState();
      // const [fileUrl, setFileUrl] = useState();
      // const [base64, setbase64] = useState();

      // const [fileName, setFileName] = useState("");
 
      // const saveFile = (e) => {
      //   debugger;
      //   // setFile(e.target.files[0]);
        
      //   setFile(e.target.files[0]);
      //   setFileName(e.target.files[0].name)
      //   //console.log(e.target.files);
      //   setFileUrl(URL.createObjectURL(e.target.files[0]));
      //   ImgToBase64.getBase64String('file:///P://%D7%AA%D7%9E%D7%95%D7%A0%D7%95%D7%AA%20%D7%97%D7%92%D7%99%D7%9D%20%D7%99%D7%94%D7%93%D7%95%D7%AA//%D7%A2%D7%A9%D7%A8%20%D7%94%D7%9E%D7%9B%D7%95%D7%AA//maka8.jpg') //is is where you put image url from the ImagePicker
      //     .then(base64String =>
      //       setbase64(base64String)
      //     )
      //     .catch(err => console.log(err));
      // };
 
      // const uploadFile = async (e) => {
      //   const formData = new FormData();
      //   formData.append("file", file);
      //   formData.append("fileName", fileName);
      //   try {
      //     const res = await axios.post(
      //       "http://localhost:3000/upload",
      //       formData
      //     );
      //     console.log(res);
      //   } catch (ex) {
      //     console.log(ex);
      //   }
      // };
 
    
// import React, { useState } from "react";
// import axios from "axios";

// export default function ImageUploader() {
//   const [postImage, setPostImage] = useState({
//     myFile: "",
//   });





// import { useEffect, useState } from 'react';

// const imageMimeType = /image\/(png|jpg|jpeg)/i;

// function App() {
//   const [file, setFile] = useState(null);
//   const [fileDataURL, setFileDataURL] = useState(null);

//   const changeHandler = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.match(imageMimeType)) {
//       alert("Image mime type is not valid");
//       return;
//     }
//     setFile(file);
//   }
//   useEffect(() => {
//     let fileReader, isCancel = false;
//     if (file) {
//       fileReader = new FileReader();
//       fileReader.onload = (e) => {
//         const { result } = e.target;
//         if (result && !isCancel) {
//           setFileDataURL(result)
//         }
//       }
//       fileReader.readAsDataURL(file);
//     }
//     return () => {
//       isCancel = true;
//       if (fileReader && fileReader.readyState === 1) {
//         fileReader.abort();
//       }
//     }

//   }, [file]);

//   return (
//     <>
//       <form >
//         <p>
//           <label htmlFor='image'> Browse images  </label>
//           <input
//             type="file"
//             id='image'
//             accept='.png, .jpg, .jpeg'
//             onChange={changeHandler}
//           />
//         </p>
//         <p>
//           <input type="submit" label="Upload" />
//         </p>
//       </form>
//       {fileDataURL ?
//         <p className="img-preview-wrapper">
//           {
//             <img src={fileDataURL} alt="preview" />
//           }
//         </p> : null}
//     </>
//   );
// }
// export default App;








// // import React from 'react';
// // import 'react-dropzone-uploader/dist/styles.css'
// // import Dropzone from 'react-dropzone-uploader'
// // import { getDroppedOrSelectedFiles } from 'html5-file-selector'

// // const FileUploadComponent = () => {
// //     const fileParams = ({ meta }) => {
// //         return { url: 'https://httpbin.org/post' }
// //     }
// //     const onFileChange = ({ meta, file }, status) => { 
// //         console.log(status, meta, file) 
// //     }
// //     const onSubmit = (files, allFiles) => {
// //         allFiles.forEach(f => f.remove())
// //     }
// //     const getFilesFromEvent = e => {
// //         return new Promise(resolve => {
// //             getDroppedOrSelectedFiles(e).then(chosenFiles => {
// //                 resolve(chosenFiles.map(f => f.fileObject))
// //             })
// //         })
// //     }
// //     const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
// //         const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
// //         return (
// //             <label className="btn btn-danger mt-4">
// //                 {textMsg}
// //                 <input
// //                     style={{ display: 'none' }}
// //                     type="file"
// //                     accept={accept}
// //                     multiple
// //                     onChange={e => {
// //                         getFilesFromEvent(e).then(chosenFiles => {
// //                             onFiles(chosenFiles)
// //                         })
// //                     }}
// //                 />
// //             </label>
// //         )
// //     }
// //     return (
// //         <Dropzone
// //             onSubmit={onSubmit}
// //             onChangeStatus={onFileChange}
// //             InputComponent={selectFileInput}
// //             getUploadParams={fileParams}
// //             getFilesFromEvent={getFilesFromEvent}
// //             accept="image/*,audio/*,video/*"
// //             maxFiles={5}
// //             inputContent="Drop A File"
// //             styles={{
// //                 dropzone: { width: 600, height: 400 },
// //                 dropzoneActive: { borderColor: 'green' },
// //             }}            
// //         />
// //     );
// // };
// // export default FileUploadComponent;