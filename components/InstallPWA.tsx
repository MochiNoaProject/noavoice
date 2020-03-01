import { useInstallPWA } from "./useInstallPWA"
import React from "react"

export default function AppInstallButton() {
    const [installable, handleClick] = useInstallPWA()

    return (
        <button disabled={!installable} onClick={handleClick}>
            Install
        </button>
    )
}
