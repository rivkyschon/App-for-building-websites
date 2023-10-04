import './portfolioA.css'
import website from '../../../actions/websiteAction'
import TextArea from '../../../component/text area/TextArea.js'
import { useState } from 'react';
import Image from '../../../component/image/image'
import WebsiteMsg from '../../../component/uploadedWebsiteMsg/websiteMsg';
import $ from 'jquery'

export default function PotrfolioA() {
  const port = 8080;

  const [saved, setSaved] = useState(false);
  const [style, setStyle] = useState([
    { "color": "white", "value": "Welcome", "fontSize": 40, "type": 1, "top": 212, "left": 633 },
    { "color": "white", "value": "This is my portfolio website", "fontSize": 20, "type": 1, "top": 268, "left": 603 },
    { "color": "#4dd0e1 70%", "value": "A little about me", "fontSize": 25, "type": 1, "top": 415, "left": 553 },
    {
      "color": "#4dd0e1 70%", "value": "I am a just-starting-out front end developer in a big world of code, trying to learn. Im dutch, 20 years old and living in Kampen. I love to go out on walks with my dog and partner.I love design! Before this job i studied as a graphic designer. Which comes in handy for this field of work.Currently i have good knowledge of HTML, CSS, (SASS) and im working on my Javascript.",
      "fontSize": 15, "type": 1, "top": 450, "left": 580
    },
    { "color": "#4dd0e1 70%", "value": "Below here are some examples of my work ", "fontSize": 15, "type": 1, "top": 450, "left": 580 }
  ]);
  const [styleImages, setStyleImages] = useState([
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
    { "src": "http://via.placeholder.com/250x250", "height": 250, "width": 250, },
  ])

  const update = (childStyle, id) => {
    const change = [...style];
    change[id - 1] = childStyle;
    debugger
    setStyle(change)
  }

  const updateImages = (childStyle, id) => {
    const change = [...styleImages];
    change[id - 1] = childStyle;
    debugger
    setStyleImages(change)
  }

  const saveWeb = async () => {
    debugger
    const arr = [style, styleImages]
    await website.saveWebsite(arr);
    setSaved(true);
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


    // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <div className='body'>
      {saved && <WebsiteMsg link={`portfolio/A/user/${JSON.parse(localStorage.getItem('siteID'))}`} />}
      <body className='Pbody' >
        <button onClick={saveWeb}>✔save</button>
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
                text='Welcome'
                updeteChanges={update}
                id={1}
                color="white"
                size={40}
                position={{ "top": 212, "left": 600 }} />
              {/* <h1> Welcome </h1> */}

              <TextArea
                text='This is my portfolio website'
                updeteChanges={update}
                id={2}
                color="white"
                size={20}
                position={{ "top": 268, "left": 603 }} />
              {/* <p> This is my portfolio website </p> */}
            </div>
          </div>

          {/* <!-- --------- --> */}
          <div class="about-me">
            <div class="about-me-text">
              <TextArea
                text='A little about me'
                updeteChanges={update}
                id={3}
                color="#4dd0e1 70%"
                size={25}
                position={{ "top": 400, "left": 583 }} />
              {/* <h2> A little about me </h2> */}
              <p className='longText'>

                <TextArea
                  text='I am a just-starting-out front end developer in a big world of code, trying to learn.
              Im dutch, 20 years old and living in Kampen. I love to go out on walks with my dog and partner.
              I love design! Before this job i studied as a graphic designer. Which comes in handy for this field of work.
              Currently i have good knowledge of HTML, CSS, (SASS) and im working on my Javascript.'
                  updeteChanges={update}
                  id={4}
                  color="#4dd0e1 70%"
                  size={15}
                  position={{ "top": 450, "left": 590 }} />

                <TextArea
                  text='Below here are some examples of my work '
                  updeteChanges={update}
                  id={5}
                  color="#4dd0e1 70%"
                  size={15}
                  position={{ "top": 650, "left": 590 }} />
              </p>
              {/* <p> I am a just-starting-out front end developer in a big world of code, trying to learn. <br /> Im dutch, 20 years old and living in Kampen. I love to go out on walks with my dog and partner. <br />I love design! Before this job i studied as a graphic designer. Which comes in handy for this field of work.<br /> Currently i have good knowledge of HTML, CSS, (SASS) and im working on my Javascript. <br /><br /> Below here are some examples of my work </p> */}
            </div>
          </div>


          {/* <!-- -------------------- --> */}
          <div class="image-grid">
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={1}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />
              {/* <img src="http://via.placeholder.com/250x250" /> */}
            </div>
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={2}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />          </div>
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={3}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />          </div>
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={4}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />            </div>
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={5}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />           </div>
            <div class="grid-image">
              <Image
                updeteChanges={updateImages}
                id={6}
                height={250}
                width={250}
                src="http://via.placeholder.com/250x250"
              />           </div>
          </div>
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
            <p> copyright © kiralin </p>
          </div>
          <div class="icons-footer">
            <ul class="ul-icons">
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
            </ul>
          </div>

        </div>
      </body>

    </div>
  )
}

{/* <TextArea
        text='portfolio A'
        updeteChanges={update}
        id={1}
        color="blue"
        size={80}
        position={{ "top": 530, "left": 800 }} />

      <Image
        updeteChanges={updateImages}
        id={1}
        position={{ "top": 328, "left": 830 }}
        height={200}
        width={300}
        src="https://images.unsplash.com/photo-1538137524007-21e48fa42f3f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac9fa0975bd2ebad7afd906c5a3a15ab&auto=format&fit=crop&w=1834&q=80"
      />

      <TextArea
        text='TRIAL'
        updeteChanges={update}
        id={2}
        color="purple"
        size={100}
        position={{ "top": 190, "left": 850 }} />

      <button onClick={saveWebsite}>✔save</button> */}