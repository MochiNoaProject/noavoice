import { memo, useRef } from "react"

import { voices } from "../constants/voices"
import Voice from "./Voice"

const VoiceButtons: React.FC = () => {
    const playingVoiceRef = useRef<HTMLAudioElement | null>(null)
    return (
        <>
            {voices.map(voice => (
                <Voice name={voice} key={`voice-${voice}`} playingAudioRef={playingVoiceRef} />
            ))}
        </>
    )
}

export default memo(VoiceButtons)
