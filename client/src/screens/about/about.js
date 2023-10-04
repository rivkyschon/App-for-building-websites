import Navbar from '../../component/NavBar/NavBar'
import './about.css'

export default function About() {


    return (
        <>
        <Navbar/>
            <div style={{ backgroundColor: "black", color: "white", padding: "182px" }}>
                <h5 style={{ padding: "5px" }}>ABOUT US</h5>
                <h1>web design is a platform that helps small business owners thrive. We’re your biggest fans, cheering you on to online success.</h1>
            </div>
            <div className="displayAbout">

                <h2    style={{margin: 71}} >
                    Anything is possible with the right website builder.</h2>
                <p style={{marginTop: 90}}>We provide a world-class platform to over 200 million users worldwide, empowering anyone to express themselves and build their online presence. Whether you’re an entrepreneur, designer, developer, musician, photographer or restaurant owner, you’ll find specialized features to create a professional website and manage your business.

                    We’re continually developing new tools to enable you to succeed. Ascend by Wix provides you with an all-in-one business solution so you can connect with customers and automate your workflow. With Wix Stores, you can sell your products and get paid online. Design a customized logo using Wix Logo Maker to establish your own brand and discover a complete set of SEO tools to help you compete in organic search. Create promotional videos in seconds using Wix Video Maker and share your story with your online community with a Wix Blog.  Build advanced web applications using serverless computing and hassle-free coding with our open development platform, Velo by web design.


                    Discover these and 100s of other powerful tools you can use to design and manage your website.</p>
                    <img src={require('./img/About.png')} className="imageAbout"></img>
            </div>
        </>
    );
}