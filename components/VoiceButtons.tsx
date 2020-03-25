import { memo, useRef } from "react"

import { voices } from "../constants/voices"
import Voice from "./Voice"

type Props = {
    isWowWowMode: boolean
}

const VoiceButtons: React.FC<Props> = ({ isWowWowMode }) => {
    const playingVoiceRef = useRef<HTMLAudioElement | null>(null)
    return (
        <>
            {voices.map(voice => (
                <Voice
                    name={voice}
                    key={`voice-${voice}`}
                    playingAudioRef={playingVoiceRef}
                    isWowWowMode={isWowWowMode}
                />
            ))}
        </>
    )
}

export default memo(VoiceButtons)
