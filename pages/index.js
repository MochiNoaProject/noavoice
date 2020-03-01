import { useCallback, useState } from "react"
import { voices } from "../constants/voices"
import clsx from "clsx"

const sx = {
    title: {
        textAlign: "right",
        fontSize: "25px",
        fontFamily: "serif"
    },
    voiceGroup: {}
}

const Voice = ({ name }) => {
    const [el, setEl] = useState(null)
    const [duration, setDuration] = useState(0)
    const [active, setActive] = useState(false)
    const handleClick = useCallback(() => {
        if (el) {
            setDuration(el.duration)
            el.play()
        }
    }, [el])

    return (
        <figure onClick={handleClick} className={clsx(active && "active")}>
            <style jsx>{`
                figure {
                    position: relative;
                    display: inline-flex;
                    flex: 1 1 auto;
                    justify-content: space-between;
                    padding: 12px 20px 12px 32px;
                    margin: 6px;
                    overflow: hidden;
                    color: white;
                    cursor: pointer;
                    background-color: #faa65f;
                    border-left: 12px solid #fcdfa1;
                    border-radius: 10px;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
                figure::before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    height: 100%;
                    background-color: black;
                    mix-blend-mode: soft-light;
                    will-change: width;
                    transform: translate3d(0, 0, 0);
                }
            `}</style>
            <style jsx>{`
                figure.active::before {
                    animation: decrement ${duration}s ease-in-out;
                }
                @keyframes decrement {
                    0% {
                        width: 100%;
                    }
                    100% {
                        width: 0%;
                    }
                }
            `}</style>
            <figcaption>{name}</figcaption>
            <audio
                preload="metadata"
                ref={node => {
                    setEl(node)
                }}
                src={`/static/voices/${name}.mp4`}
                onPlay={() => setActive(true)}
                onEnded={() => setActive(false)}
            ></audio>
        </figure>
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
                    padding: 1em 0.5em;
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
                        <a href="https://github.com/hrdtbs/noavoice/blob/master/CHANGELOG.md">noavoice: v2.0.0</a>
                        <br />
                        <a href="https://twitter.com/_noach" style={sx.descriptionButton}>
                            声：望月のあ @_noach
                        </a>
                        <br />
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href="https://github.com/hrdtbs/noavoice#%E9%9F%B3%E5%A3%B0%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AElicence%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
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
                        <img src="/static/twitter-blue.svg" width="32px" height="32px" alt="twitter" />
                        Twitterでシェアして応援！
                    </button>
                </a>
            </nav>
            <article>
                {voices.map((voice, i) => {
                    return <Voice name={voice} key={`voice-${i}`} />
                })}
            </article>
        </main>
    )
}

export default IndexPage
