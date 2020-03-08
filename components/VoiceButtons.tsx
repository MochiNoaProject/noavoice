import { memo, useRef } from "react"

import { voices } from "../constants/voices"
import Voice from "./Voice"

type Props = {}

const VoiceButtons: React.FC<Props> = props => {
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
