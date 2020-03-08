import { memo, useRef } from "react"

import { voices } from "../constants/voices"
import Voice from "./Voice"

type Props = {}

const VoiceButtons: React.FC<Props> = props => {
    const plaingVoiceRef = useRef<HTMLAudioElement | null>(null)
    return (
        <>
            {voices.map(voice => (
                <Voice name={voice} key={`voice-${voice}`} playingAudioRef={plaingVoiceRef} />
            ))}
        </>
    )
}

export default memo(VoiceButtons)
