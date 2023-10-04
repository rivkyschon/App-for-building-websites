import TextArea from '../../component/text area/TextArea.js'
import { useState, useEffect } from 'react';


export default function UserPortfolioA(props) {

    const [styles, setStyle] = useState([]);
    const [loadingOver, setLoadingOver] = useState(false);
    const port = 8080;

    const getWebDesign = async () => {
        try {
            let data = await fetch("http://localhost:" + port + "/api/users-website/" + JSON.stringify(localStorage.get('siteID')));
            data = await data.json();
            setStyle(data);
            setLoadingOver(true)
            if (!data) {
                throw ("you don't exist, please sign up");
            }
            else {
                console.log(data);
            }
        }
        catch (err) {
            alert(err);
        }

    }

    useEffect(() => {
        getWebDesign();
    }, [])


    return (
        loadingOver &&
        <body className="Pbody">
            <div class="website">
                <div class="line-above-nav">
                </div>
                <div class="nav">
                    <div class="contact-me">
                        <ul>
                            <li> Contact me </li>
                        </ul>
                    </div>
                    <div class="nav-icons">
                        <ul>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-instagram"></i>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- end of nav --> */}

            <div class="main-page">
                <div class="banner">
                    <div class="banner-text">
                        <h1> {styles[0][0].value} </h1>
                        <p> {styles[0][1].value} </p>
                    </div>
                </div>

                {/* <!-- --------- --> */}
                <div class="about-me">
                    <div class="about-me-text">
                        <h2>{styles[0][2].value}</h2>
                        <p> {styles[0][3].value}</p>
                        <p> {styles[0][4].value}</p>
                    </div>
                </div>
                {/* <!-- -------------------- --> */}
                {/* <div class="image-grid">
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][0].src} className="image" />
                    </div>
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][1].src} className="image"/>
                    </div>
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][2].src} className="image"/>
                    </div>
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][3].src} className="image"/>
                    </div>
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][4].src} className="image"/>
                    </div>
                    <div class="grid-image" style={{height:250,width:250}}>
                        <img src={styles[1][5].src} className="image"/>
                    </div>
                </div> */}
            </div>

            {/* <!-- end of main page --> */}
            <div class="block">
                <div class="block-text">
                    <h3> Want to talk? </h3>
                    <a href="#"> Let's talk! </a>
                </div>
            </div>

            <div class="footer">
                <div class="footer-text">
                    <p>  copyright © Rivky & Rivky</p>
                </div>
                <div class="icons-footer">
                    <ul class="ul-icons">
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-instagram"></i>
                    </ul>
                </div>

            </div>
        </body >
    )


}







