import { MutableRefObject, useCallback, useRef, useState } from "react"
import { useWowWowMode } from "./WowWowModeProbider"

type Props = {
    name: string
    playingAudioRef: MutableRefObject<HTMLAudioElement | null>
}

const Voice: React.FC<Props> = ({ name, playingAudioRef }) => {
    const { isWowWowMode } = useWowWowMode()
    const audioRef = useRef<HTMLAudioElement>(null)
    const [active, setActive] = useState(false)

    const handleClick = useCallback(async () => {
        const el = audioRef.current
        if (playingAudioRef.current) {
            if (!isWowWowMode) {
                playingAudioRef.current.pause()
            }
        }
        if (el) {
            el.currentTime = 0
            await el.play()
            playingAudioRef.current = el
        }
    }, [audioRef, isWowWowMode, playingAudioRef])

    const handleActivate = useCallback(() => {
        setActive(true)
    }, [])
    const handleDeactivate = useCallback(() => {
        setActive(false)
    }, [])

    return (
        <figure onClick={handleClick}>
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
                    background-color: ${active ? "#f06808" : "#faa65f"};
                    border-left: 12px solid #fcdfa1;
                    transition: 0.3s ease-in-out;
                    border-radius: 1ex;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
            `}</style>
            <figcaption>{name}</figcaption>
            <audio
                src={`/static/voices/${name}.mp3`}
                ref={audioRef}
                onPlay={handleActivate}
                onEnded={handleDeactivate}
                onPause={handleDeactivate}
            ></audio>
        </figure>
    )
}

export default Voice
