import "./style.css"
import { useRouter } from "next/router"
import Head from "next/head"
import SWRegister from "../sw-register"

function IndexPage() {
    const { query } = useRouter()
    const name = decodeURI(query.name)

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
