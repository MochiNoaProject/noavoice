import { memo } from "react"

import { voices } from "../constants/voices"
import Voice from "./Voice"

type Props = {}

const VoiceButtons: React.FC<Props> = props => {
    return (
        <>
            {voices.map(voice => (
                <Voice name={voice} key={`voice-${voice}`} />
            ))}
        </>
    )
}

export default memo(VoiceButtons)
