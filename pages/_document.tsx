import Document, { Head, Html, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    {/*
                    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese"
                        rel="stylesheet"
                    />

                    <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="true" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-90236823-7" />
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
