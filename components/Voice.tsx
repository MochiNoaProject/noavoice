import { MutableRefObject, useCallback, useRef, useState } from "react"
import clsx from "clsx"

const Voice: React.FC<{ name: string; playingAudioRef: MutableRefObject<HTMLAudioElement | null> }> = ({
    name,
    playingAudioRef
}) => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [active, setActive] = useState(false)

    const handleClick = useCallback(async () => {
        const el = audioRef.current
        if (playingAudioRef.current) {
            playingAudioRef.current.pause()
            playingAudioRef.current.currentTime = 0
        }
        if (el) {
            playingAudioRef.current = el
            await el.play()
        }
    }, [audioRef, playingAudioRef])

    return (
        <figure onClick={handleClick} className={clsx({ active })}>
            <style jsx>{`
                figure {
                    user-select: none;
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
                    transition: 0.3s ease-in-out;
                    border-radius: 10px;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
            `}</style>
            <style jsx>{`
                figure.active {
                    background-color: #f06808;
                }
            `}</style>
            <figcaption>{name}</figcaption>
            <audio
                src={`/static/voices/${name}.mp3`}
                ref={audioRef}
                onPlay={() => setActive(true)}
                onEnded={() => setActive(false)}
                onPause={() => setActive(false)}
            ></audio>
        </figure>
    )
}

export default Voice
