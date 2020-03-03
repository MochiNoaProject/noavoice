import { useCallback, useState } from "react"
import { version } from "../package.json"
import { voices } from "../constants/voices"
import InstallPWA from "../components/InstallPWA"
import Voice from "../components/Voice"

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
                main > header img {
                    object-fit: cover;
                }
                main > nav {
                    display: flex;
                    justify-content: space-between;
                    margin: 6px 32px;
                    flex-wrap: wrap;
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
                a button {
                    all: unset;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.75em 1em;
                    margin: 0.5em 0px;
                    border: 4px dotted #faa65f;
                }
            `}</style>
            <header>
                <picture>
                    <source srcSet="/static/header-min.webp" type="image/webp" />
                    <img src="/static/header-min.png" alt="header" height="150px" width="100%" loading="lazy" />
                </picture>
            </header>

            <nav>
                <div>
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
                </div>
                <a
                    href={encodeURI(
                        `https://twitter.com/intent/tweet?url=https://noavoice.now.sh&text=Vtuber望月のあボイスボタン&hashtags=のあぼいす`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        <img src="/static/twitter-blue.svg" width="28px" height="28px" alt="twitter" />
                        Twitterでシェアして応援！
                    </button>
                </a>
            </nav>
            <article>
                {voices.map(voice => (
                    <Voice name={voice} key={`voice-${voice}`} />
                ))}
            </article>
            <footer>
                <InstallPWA />
            </footer>
        </main>
    )
}

export default IndexPage
