import './login.css'
import * as yup from 'yup';
//import * as Icon from 'react-bootstrap-icons';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import user from '../../actions/loginAction.js'
import 'reactjs-popup/dist/index.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
   import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function Login() {

    let navigate = useNavigate();

    const [loginClass, setLoginClass] = useState("login noDisplay");
    const [containerClass, setContainerClass] = useState("lcontainer");
    const [inputs, setInputs] = useState({});

    const signUp = async (e) => {
        await setContainerClass("right-panel-active lcontainer")
    };

    const signIn = async () => {
        await setContainerClass("lcontainer")
    };

    const handleChange = (event) => {
        let name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const validateUser = async () => {
        debugger
        const valid = await user.login(inputs);
        if (valid) navigate('/starting')
    }

    const addUser = async () => {
        debugger
        const valid = await user.signUp(inputs);
        console.log(valid);
        if (valid) navigate('/starting');
    }


    const forgotPassword = async () => {
        const password = await user.forgotPassword(inputs.email);
        console.log(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }




    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#yourAppElement');

    function App() {
        let subtitle;
        const [modalIsOpen, setIsOpen] = React.useState(false);

        function openModal() {
            setIsOpen(true);
        }

        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#f00';
        }

        function closeModal() {
            setIsOpen(false);
        }

        return (
            <div>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }

    // return (

    //     <>
    //         <div class="text-box">
    //             <button className="btn btn-white btn-animate a " onClick={() => setLoginClass("login")} style={{ marginLeft: "45%" }}>sign up now</button>
    //             {/* <a href="#" class="">click me</a> */}
    //         </div>
    //         {/* <button onClick={() => setLoginClass("login")} type="button" className="btn btn-primary button" style={{ "margin": "21px" }}>Get started</button> */}
    //         <body>

    //             <div class="container">
    //                 <h2>Fading Modal</h2>
    //                 <p>Add the "fade" class to the modal container if you want the modal to fade in on open and fade out on close.</p>

    //                 {/* <!-- Button to Open the Modal --> */}
    //                 <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    //                     Open modal
    //                 </button>

    //                 {/* <!-- The Modal --> */}
    //                 <div class="modal fade" id="myModal">
    //                     <div class="modal-dialog">
    //                         <div class="modal-content">

    //                             {/* <!-- Modal Header --> */}
    //                             <div class="modal-header">
    //                                 <h4 class="modal-title">Modal Heading</h4>
    //                                 <button type="button" class="close" data-dismiss="modal">&times;</button>
    //                             </div>

    //                             {/* <!-- Modal body --> */}
    //                             <div class="modal-body">
    //                                 Modal body..
    //                             </div>

    //                             {/* <!-- Modal footer --> */}
    //                             <div class="modal-footer">
    //                                 <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    //                             </div>

    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>

    //         </body>
    //         <div className={loginClass}>
    //             <div class={containerClass} id="container" style={{ width: 815 }}>

    //                 <div class="form-container sign-up-container">
    //                     <form onSubmit={handleSubmit}>
    //                         <h1>Create Account</h1>
    //                         <div class="social-container">
    //                             <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    //                             <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    //                             <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    //                         </div>
    //                         <span>or use your email for registration</span>
    //                         <input type="text" placeholder="Name" onChange={handleChange} name="name" />
    //                         <input type="email" placeholder="Email" onChange={handleChange} name="email" />
    //                         <input type="password" placeholder="Password" onChange={handleChange} name="password" />
    //                         <button onClick={addUser} type="submit">Sign Up</button>
    //                     </form>
    //                 </div>
    //                 <div class="form-container sign-in-container">
    //                     <form action="#" onSubmit={handleSubmit}>
    //                         <h4 className='h4' ><i className="bi bi-x-lg" onClick={() => setLoginClass("login noDisplay")}></i></h4>

    //                         <h1>Sign in</h1>
    //                         <div class="social-container">
    //                             <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
    //                             <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
    //                             <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
    //                         </div>
    //                         <span>or use your account</span>
    //                         <input type="email" placeholder="Email" onChange={handleChange} name="email" />
    //                         <input type="password" placeholder="Password" onChange={handleChange} name="password" />
    //                         <a href="#" onClick={forgotPassword}>Forgot your password?</a>
    //                         <button onClick={validateUser} type="submit">Sign In</button>
    //                     </form>
    //                 </div>
    //                 <div class="overlay-container">
    //                     <div class="overlay">
    //                         <div class="overlay-panel overlay-left">
    //                             <h1>Welcome Back!</h1>
    //                             <p>To keep connected with us please login with your personal info</p>
    //                             <button class="ghost" id="signIn" onClick={signIn}>Sign In</button>
    //                         </div>
    //                         <div class="overlay-panel overlay-right">
    //                             <h1>Hello, Friend!</h1>
    //                             <p>Enter your personal details and start journey with us</p>
    //                             <button class="ghost" id="signUp" onClick={signUp}>Sign Up</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //     </>
    // )
}


















// import './login.scss'
// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";


// export default function Login() {
//     let nevigate = useNavigate();
//     const port = 8080;
//     // const [scrollDown, setScrollDown] = useState("flex");
//     const [show, setShow] = useState(true);
//     const [inputs, setInputs] = useState({});
//     const [view, setView] = useState("login");

//     // const body = document.querySelector("body");
//     // const modal = document.querySelector(".modal");
//     // let isOpened = false;

//     function openModal() {
//         debugger;
//         setShow(true);
//         // body.style.overflow = "hidden";
//     };

//     function closeModal() {
//         debugger;
//         setShow(false);
//         //  body.style.overflow = "initial";
//     };

//     // function scroll() {
//     //     if (window.scrollY > window.innerHeight / 3 && !isOpened) {
//     //         isOpened = true;
//     //         setScrollDown("none");
//     //         openModal();
//     //     }
//     // };

//     const handleChange = (event) => {
//         let name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))

//     }



//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//         switch (view) {
//             case "login":
//                 validateUser();
//                 break;
//             case "signUp":
//                 postUser();
//                 break;
//             default:
//                 break;
//         }
//     }



//     // modalButton.addEventListener("click", openModal);
//     // closeButton.addEventListener("click", closeModal);

//     // document.onkeydown = evt => {
//     //     evt = evt || window.event;
//     //     evt.keyCode === 27 ? closeModal() : false;
//     // };

//     function currentView() {
//         switch (view) {
//             case "login":
//                 return (
//                     <form >
//                         <div className="modal">
//                             <div className="modal-container">
//                                 <div className="modal-left">
//                                     <h1 className="modal-title">Welcome!</h1>
//                                     <p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
//                                     <div className="input-block">
//                                         <label for="email" className="input-label">Email</label>
//                                         <input type="email" name="email" id="email" placeholder="Email" />
//                                     </div>
//                                     <div className="input-block">
//                                         <label for="password" className="input-label">Password</label>
//                                         <input type="password" name="password" id="password" placeholder="Password" />
//                                     </div>
//                                     <div className="modal-buttons">
//                                         <a href="" className="">Forgot your password?</a>
//                                         <button className="input-button">Login</button>
//                                     </div>
//                                     <p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
//                                 </div>
//                                 <div className="modal-right">
//                                     <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
//                                 </div>
//                                 <button className="icon-button close-button">
//                                 </button>
//                             </div>
//                             <button className="modal-button">Click here to login</button>
//                         </div>
//                     </form >)
//             case "signUp":
//                 return (
//                     <form >
//                         <div className={show ? "modal is-open" : "modal"}  >
//                             <div className="modal-container" >
//                                 <div className="modal-left">
//                                     <h1 className="modal-title">Welcome!</h1>
//                                     <p className="modal-desc">sign up</p>
//                                     <div className="input-block">
//                                         <label for="name" className="input-label">Name</label>
//                                         <input type="name" name="name" id="name" placeholder="name"
//                                             value={inputs.name || ""}
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="input-block">
//                                         <label for="email" className="input-label">Email</label>
//                                         <input type="email" name="email" id="email" placeholder="Email"
//                                             value={inputs.email || ""}
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="input-block">
//                                         <label for="password" className="input-label" >Password</label>
//                                         <input type="password" name="password" id="password" placeholder="Password"

//                                             value={inputs.password || ""}
//                                             onChange={handleChange} />
//                                     </div>
//                                     <div className="modal-buttons">
//                                         <a href="" className="">Forgot your password?</a>
//                                         <button className="input-button" type="submit" onClick={handleSubmit}>sign up</button>
//                                     </div>
//                                     <p className="sign-up">Don't have an account? <a href="#" onClick={() => setView("login")}>Log in now</a></p>
//                                 </div>
//                                 <div className="modal-right">
//                                     <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
//                                 </div>
//                                 <button className="icon-button close-button" onClick={closeModal}>
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
//                                         <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                         <button className="modal-button" onClick={openModal}>Click here to login</button>
//                     </form >
//                 )
//             default:
//                 break;
//         }
//     }

//     return (
//         <div >
//             <div className="container"></div>
//             {currentView()}
//         </div>

//     )
// }