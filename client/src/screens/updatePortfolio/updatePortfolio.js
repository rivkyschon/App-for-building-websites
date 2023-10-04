
import { useState, useEffect } from 'react';
import TextArea from '../../component/text area/TextArea';
import Image from '../../component/image/image';
import $ from 'jquery'
import Alert from '../../component/alert/alert';

export default function UpdatePortfolio() {
    const [styles, setStyle] = useState([]);
    const [images, setImages] = useState([]);
    const [showAlert, setAlert] = useState({show:false,msg:""});
    const [loadingOver, setLoadingOver] = useState(false);
    const port = 8080;

    const update = async (childStyle, id) => {
        const change = [...styles];
        change[id - 1] = childStyle;
        debugger
        console.log(styles);
        await setStyle(change);
        console.log(styles);
    }

    const updateImages = (childStyle, id) => {
        const change = [...images];
        change[id - 1] = childStyle;
        debugger
        setImages(change)
    }

    const setData = async (data) => {
        debugger
        const s = [
            { "color": "", "value": "", "fontSize": 0, "type": 0, "top": 0, "left": 0 },
            { "color": "", "value": "", "fontSize": 0, "type": 0, "top": 0, "left": 0 },
            { "color": "", "value": "", "fontSize": 0, "type": 0, "top": 0, "left": 0 },
            { "color": "", "value": "", "fontSize": 0, "type": 0, "top": 0, "left": 0 },
            { "color": "", "value": "", "fontSize": 0, "type": 0, "top": 0, "left": 0 }];
        const img = [
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },
            { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250 },]

        for (let i = 0; i < 5; i++) {
            s[i].color = data[0][i].color;
            s[i].type = data[0][i].element_type;
            s[i].value = data[0][i].value;
            s[i].top = data[0][i].top;
            s[i].left = data[0][i].position_left;
            s[i].fontSize = data[0][i].size;
        }
        // for (let i = 0; i < 6; i++) {
        //     img[i].src = data[1][i].src;
        //     img[i].height = data[1][i].height;
        //     img[i].width = data[1][i].width;
        // }
        console.log("ssss   " + s);
        console.log("iiii   " + img);
        await setStyle(s);
        // await setImages(img);
        setLoadingOver(true);

    }

    const getWebDesign = async () => {
        try {
            debugger
            let data = await fetch("http://localhost:" + port + "/api/users-website/1");
            data = await data.json();
            setData(data)

            if (!data) {
                throw ("you don't exist, please sign up");
            }
            else {
                setAlert({show:true,msg:"successfuly updated your design!",})
            }
        }
        catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getWebDesign();
    }, [])



    const updateWebsite = async () => {
        const arr = [styles, images]
        console.log(arr);
        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(arr)
        };
        try {
            debugger
            let data = await fetch("http://localhost:" + port + "/api/website/1", requestOptions);
            data = await data.json();
            if (!data) {
                throw ("you don't exist, please sign up");
            }
            else {
                console.log(data);
                //nevigate('/portfolioA')
            }
        }
        catch (err) {
            alert(err);
        }
    }

    $(function () {
        $(".js-nav a, .js-connect").click(function (e) {
            e.preventDefault();
            $("body, html").animate(
                {
                    scrollTop: $($.attr(this, "href")).offset().top
                },
                750
            );
        });
    });





    return (
        loadingOver &&
        <body className='body Pbody'>
            <Alert msg={showAlert.msg}  success/>
            <button onClick={updateWebsite}>✔save</button>
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
                        <TextArea
                            text={styles[0].value}
                            updeteChanges={update}
                            id={1}
                            color={styles[0].color}
                            size={styles[0].fontSize}
                            position={{ "top": styles[0].top, "left": styles[0].left }} />
                        {/* <h1> Welcome </h1> */}

                        <TextArea
                            text={styles[1].value}
                            updeteChanges={update}
                            id={2}
                            color={styles[1].color}
                            size={styles[1].fontSize}
                            position={{ "top": styles[1].top, "left": styles[1].left }} />
                        {/* <p> This is my portfolio website </p> */}
                    </div>
                </div>

                {/* <!-- --------- --> */}
                <div class="about-me">
                    <div class="about-me-text">
                        <TextArea
                            text={styles[2].value}
                            updeteChanges={update}
                            id={3}
                            color={styles[2].color}
                            size={styles[2].fontSize}
                            position={{ "top": styles[2].top, "left": styles[2].left }} />
                        {/* <h2> A little about me </h2> */}

                        <p className='longText'>

                            <TextArea
                                text={styles[3].value}
                                updeteChanges={update}
                                id={4}
                                color={styles[3].color}
                                size={styles[3].fontSize}
                                position={{ "top": styles[3].top, "left": styles[3].left }} />

                            <TextArea
                                text={styles[4].value}
                                updeteChanges={update}
                                id={5}
                                color={styles[4].color}
                                size={styles[4].fontSize}
                                position={{ "top": styles[4].top, "left": styles[4].left }} />
                        </p>
                        {/* <p> I am a just-starting-out front end developer in a big world of code, trying to learn. <br /> Im dutch, 20 years old and living in Kampen. I love to go out on walks with my dog and partner. <br />I love design! Before this job i studied as a graphic designer. Which comes in handy for this field of work.<br /> Currently i have good knowledge of HTML, CSS, (SASS) and im working on my Javascript. <br /><br /> Below here are some examples of my work </p> */}
                    </div>
                </div>


                {/* <!-- -------------------- --> */}
                {/* <div class="image-grid">
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={1}
                            height={250}
                            width={250}
                            src={images[0].src}
                        />
                    </div>
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={2}
                            height={250}
                            width={250}
                            src={images[1].src}
                        />          </div>
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={3}
                            height={250}
                            width={250}
                            src={images[2].src}
                        />          </div>
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={4}
                            height={250}
                            width={250}
                            src={images[3].src}
                        />            </div>
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={5}
                            height={250}
                            width={250}
                            src={images[4].src}
                        />           </div>
                    <div class="grid-image">
                        <Image
                            updeteChanges={updateImages}
                            id={6}
                            height={250}
                            width={250}
                            src={images[5].src}
                        /></div>
                </div>*/}
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
                        <p> copyright © Rivky & Rivky </p>
                    </div>
                    <div class="icons-footer">
                        <ul class="ul-icons">
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-instagram"></i>
                        </ul>
                    </div>

                </div>
        </body>


    )
}