import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ja">
                <Head>
                    <title>noavoice - presented by 望月のあ</title>
                    <meta
                        name="description"
                        content="望月のあの声がいつでも聞けるサービス。疲れが取れない、辛いことがあった、そんなあなたに癒しを。"
                    ></meta>
                    <link rel="shortcut icon" href="/static/images/icons/favicon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/static/images/icons/favicon.png"></link>
                    <meta name="theme-color" content="#faa65f" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@_noach" />
                    <meta name="twitter:title" content="のあぼいす" />
                    <meta name="twitter:image" content="https://noavoice.now.sh/static/twitter-ogp.png" />
                    <meta name="twitter:description" content="望月のあの声がいつでも聞けるサービス" />
                    {/*
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin></link>
                <link
                    href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese"
                    rel="stylesheet"
                ></link>

                <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="true" />
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
                */}
                    <style>{`
                    body {
                        margin: 0px;
                        font-family: sans-serif;
                        line-height: 1.7;
                        background-color: #fefefe;
                    }
                    `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
