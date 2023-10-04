import Login from "../../component/login/login"
import NavBar from '../../component/NavBar/NavBar'

import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {

    let nevigate = useNavigate();
    function login() {
        nevigate('/login')
    }
    return (
        <>
            <NavBar />
            <div>
                <div className="home">

                    <h1 className="title">Create a website <br />you'r proud of</h1>
                    <h3>Discovrer the platform that gives you the feedom to create, design,<br />
                        manage and develop tour web presence exactlt the way you want.</h3>
                    <br />


                </div>
                <Login />
                <img src={require('./img/1.png')} className='ImageHome'></img>
               
            </div>

        </>
    )
}