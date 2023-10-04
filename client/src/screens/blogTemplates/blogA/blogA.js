
import { useState } from 'react';
import TextArea from '../../../component/text area/TextArea';
import Image from '../../../component/image/image'
import website from '../../../actions/websiteAction'
import './blogA.css'
import WebsiteMsg from '../../../component/uploadedWebsiteMsg/websiteMsg';

export default function BlogA() {

    const [style, setStyle] = useState([]);
    const [saved, setSaved] = useState(false);
    const [images, setImages] = useState([{}]);


    const update = (childStyle, id) => {
        const change = [...style];
        change[id - 1] = childStyle;
        debugger
        setStyle(change)
    }
    const updateImages = async (childStyle, id) => {
        const change = [...images];
        change[id - 1] = childStyle;
        debugger
        await setImages(change)
    }

    const saveWeb = async () => {
        debugger
        const arr = [style, images]
        await website.saveWebsite(arr);
        setSaved(true);
    }


    return (
        <div>
            {saved && <WebsiteMsg link={`blog/A/user/${JSON.parse(localStorage.getItem('siteID'))}`} />}
            <button onClick={saveWeb}>✔save</button>
            <header class="container-fluid ks-page-header">
                <TextArea
                    text='Here is a page title, oh yeah!'
                    updeteChanges={update}
                    id={1}
                    color="white"
                    size={50}
                    position={{ "top": 450, "left": 610 }} />
            </header>

            <main class="container my-5 ks-article-content">
                <div class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_default_style" data-a2a-scroll-show="400">
                    <a class="a2a_button_facebook"></a>
                    <a class="a2a_button_twitter"></a>
                    <a class="a2a_button_pinterest"></a>
                    <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                </div>
                <div className='textBox'>
                    <TextArea
                        text='This is an awesome article heading level 2'
                        updeteChanges={update}
                        id={2}
                        color="black"
                        size={46}
                        position={{ left: 307, top: 1022 }} />
                </div>
                <div className='textBox'>
                    <TextArea
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto.'
                        updeteChanges={update}
                        id={3}
                        color="black"
                        size={20}
                        position={{ left: 306, top: 1108 }} />
                </div>
                <div className="imagBox">

                    <Image
                        class="w-100 mb-5 ks-article-image"
                        updeteChanges={updateImages}
                        id={1}
                        height={700}
                        width={1300}
                        src="https://picsum.photos/id/180/960/540"
                    />
                </div>
                <div className='bottomDiv'>
                    <TextArea
                        text='This is an awesome article heading level 2'
                        updeteChanges={update}
                        id={4}
                        color="black"
                        size={46}
                        position={{ left: 311, top: 2104 }} />
                    <TextArea
                        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto.'
                        updeteChanges={update}
                        id={5}
                        color="black"
                        size={20}
                        position={{ left: 302, top: 2194 }} />
                    <div style={{ height: 100, margin: 150 }}></div>
                </div>

                {/* <h2 class="display-5 ks-page-heading">This is an awesome article heading level 2</h2> */}
                {/* <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda aut repellendus blanditiis porro quisquam excepturi nihil, dolorem voluptatum repellat libero earum voluptate rerum provident eum eius! Eveniet exercitationem iure ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, enim id qui ipsum labore tenetur mollitia in tempore perspiciatis eligendi quisquam, ipsa magnam aliquam! Tenetur quisquam eius asperiores atque iusto.</p> */}
            </main>

            <script async src="https://static.addtoany.com/menu/page.js"></script>
        </div>
    )
}