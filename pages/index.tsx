import { WowWowModeProvider } from "../components/WowWowModeProbider"
import { version } from "../package.json"
import ToggleSwitch from "../components/ToggleSwitch"
import VoiceButtons from "../components/VoiceButtons"

const Header = () => {
    return (
        <>
            <style jsx>{`
                header {
                    height: 30vw;
                    width: 100%;
                    background-image: url("/static/header.webp"), url("/static/header.png");
                    background-attachment: fixed;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            `}</style>
            <header></header>
        </>
    )
}

const ShareButton = () => {
    return (
        <>
            <style jsx>{`
                a {
                    color: #ff7500;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5em 0.5em;
                    border: 4px dotted #faa65f;
                    width: min-content;
                    white-space: nowrap;
                }
                a:hover {
                    color: #faa65f;
                    text-decoration: underline;
                }
            `}</style>
            <a
                href={encodeURI(
                    `https://twitter.com/intent/tweet?url=https://noavoice.now.sh&text=Vtuber望月のあボイスボタン&hashtags=のあぼいす`
                )}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/static/twitter-blue.svg" width="28px" height="28px" alt="twitter" />
                Twitterでシェアして応援！
            </a>
        </>
    )
}

function IndexPage() {
    return (
        <main>
            <style jsx>{`
                main {
                    max-width: 900px;
                    margin: auto;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    background-color: #fff;
                    padding-bottom: 24px;
                }
                main > nav {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 12px 0px 12px;
                    flex-wrap: wrap;
                    box-shadow: 0 -5px 5px 0px rgba(0, 0, 0, 0.1);
                }
                main > nav > :global(*) {
                    margin: 6px;
                }
                main > article {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 6px 12px;
                }
                main > footer {
                    margin: 6px 32px;
                    display: flex;
                    justify-content: flex-end;
                }
                a {
                    color: #ff7500;
                    text-decoration: none;
                    transition: 0.3s;
                }

                a:hover {
                    color: #faa65f;
                    text-decoration: underline;
                }
            `}</style>
            <Header />

            <nav>
                <ToggleSwitch />
                <ShareButton />
            </nav>
            <article>
                <VoiceButtons />
            </article>
            <footer>
                <small>
                    <a href={`https://github.com/hrdtbs/noavoice/blob/v${version}/CHANGELOG.md#changelog`}>
                        noavoice: v{version}
                    </a>
                    <br />
                    <a href="https://twitter.com/_noach">声：望月のあ @_noach</a>
                    <br />
                    <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={`https://github.com/hrdtbs/noavoice/blob/v${version}/README.md#%E9%9F%B3%E5%A3%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AElicence%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6`}
                    >
                        音声ファイルのライセンスについて
                    </a>
                </small>
            </footer>
        </main>
    )
}

export default () => (
    <WowWowModeProvider>
        <IndexPage />
    </WowWowModeProvider>
)
