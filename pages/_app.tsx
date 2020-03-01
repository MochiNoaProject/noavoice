import * as React from "react"
import { AppProps } from "next/app"
import Head from "next/head"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <style jsx global>{`
                body {
                    margin: 0px;
                    font-family: sans-serif;
                    line-height: 1.7;
                    background-color: #fefefe;
                }
            `}</style>

            <Head>
                <title>noavoice - presented by 望月のあ</title>
                <meta
                    name="description"
                    content="望月のあの声がいつでも聞けるサービス。疲れが取れない、辛いことがあった、そんなあなたに癒しを。"
                />
                <link rel="shortcut icon" href="/static/images/icons/favicon.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/static/images/icons/favicon.png"></link>
                <meta name="theme-color" content="#faa65f" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@_noach" />
                <meta name="twitter:title" content="のあぼいす" />
                <meta name="twitter:image" content="https://noavoice.now.sh/static/twitter-ogp.png" />
                <meta name="twitter:description" content="望月のあの声がいつでも聞けるサービス" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
