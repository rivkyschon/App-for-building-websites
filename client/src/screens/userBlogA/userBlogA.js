
import website from '../../actions/websiteAction';
import { useState, useEffect } from 'react';

export default function ShowUserBlogA() {


    const [styles, setStyle] = useState([]);
    const [loadingOver, setLoadingOver] = useState(false);

    const getWebDesign = async () => {
        debugger
        const data = await website.getWebDesign();
        await setStyle(data);
        setLoadingOver(true);
    }

    useEffect(() => {
        debugger
        getWebDesign();
    }, [])


    return (
        loadingOver &&
        <div>
            <header class="container-fluid ks-page-header">
                <h1 class="display-4 text-white ks-page-title" style={{
                    "margin-top": styles[0][0].top, "margin-left": styles[0][0].position_left, "font-size": styles[0][0].size,
                    color: `${styles[0][0].color} `
                }}>
                    {styles[0][0].value}
                </h1>
            </header>

            <main class="container my-5 ks-article-content">
                <div class="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_default_style" data-a2a-scroll-show="400">
                    <a class="a2a_button_facebook"></a>
                    <a class="a2a_button_twitter"></a>
                    <a class="a2a_button_pinterest"></a>
                    <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                </div>

                <h2 class="display-5 ks-page-heading" style={{
                    "margin-top": styles[0][1].top, "margin-left": styles[0][1].position_left, "font-size": styles[0][1].size,
                    color: `${styles[0][1].color} `
                }}>{styles[0][1].value}</h2>
                <p class="mb-5 ks-fancy-letter" style={{
                    "margin-top": styles[0][2].top, "margin-left": styles[0][2].position_left, "font-size": styles[0][2].size,
                    color: `${styles[0][2].color} `
                }}>
                    {styles[0][2].value}
                </p>
                {/* <img src={styles[1][0].value} alt="Open laptop computer with notebook and pen lying next to it" class="w-100 mb-5 ks-article-image" /> */}
                <h2 class="display-5 ks-page-heading" style={{
                    "margin-top": styles[0][3].top, "margin-left": styles[0][3].position_left, "font-size": styles[0][3].size,
                    color: `${styles[0][3].color} `
                }}>{styles[0][3].value}</h2>
                <p class="mb-5" style={{
                    "margin-top": styles[0][4].top, "margin-left": styles[0][4].position_left, "font-size": styles[0][4].size,
                    color: `${styles[0][4].color} `
                }}>{styles[0][4].value}</p>
            </main>


            <script async src={"https://static.addtoany.com/menu/page.js"}></script>
        </div>
    )
}