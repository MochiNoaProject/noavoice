import { useCallback, useRef, useState } from "react"
import clsx from "clsx"

const Voice: React.FC<{ name: string }> = ({ name }) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [duration, setDuration] = useState(0)
    const [active, setActive] = useState(false)
    const handleClick = useCallback(async () => {
        const el = audioRef.current

        if (el) {
            setDuration(el.duration)
            await el.play()
        }
    }, [audioRef])

    return (
        <figure onClick={handleClick} className={clsx({ active })}>
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
                ref={audioRef}
                src={`/static/voices/${name}.mp4`}
                onPlay={() => setActive(true)}
                onEnded={() => setActive(false)}
            ></audio>
        </figure>
    )
}

export default Voice
