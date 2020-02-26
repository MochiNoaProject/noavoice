import "./style.css"
import { useRouter } from "next/router"
import Head from "next/head"
import SWRegister from "../sw-register"

function IndexPage() {
    const {
        query: { name }
    } = useRouter()
    return (
        <>
            <Head>
                <title>noavoice - presented by 望月のあ</title>
                <meta
                    name="description"
                    content="noavoice。ボタンを押したら声が流れるアプリ。声：望月のあ @_noach"
                ></meta>
                <link rel="shortcut icon" href="/static/images/icons/favicon.png" />
                <link rel="manifest" href="/static/manifest.json" />
                <meta name="twitter:card" content="player" />
                <meta name="twitter:site" content="@TwitterDev" />
                <meta name="twitter:title" content="Sample Player Card" />
                <meta
                    name="twitter:description"
                    content="This is a sample video. When you implement, make sure all links are secure."
                />
                <meta name="twitter:image" content="https://yoursite.com/example.png" />
                <meta name="twitter:player" content="https://yoursite.com/container.html" />
                <meta name="twitter:player:width" content="480" />
                <meta name="twitter:player:height" content="480" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90236823-7"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            
                            gtag('config', 'UA-90236823-7');
                        `
                    }}
                ></script>
            </Head>
            {name && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <audio src={`/static/voices/${name}.mp4`} controls controlslist="nodownload" />
                </div>
            )}
            <SWRegister />
        </>
    )
}

export default IndexPage
