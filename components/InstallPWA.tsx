import React, { useCallback, useEffect, useState } from "react"

let _installPrompt: any
window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault()
    _installPrompt = e
})

export default function AppInstallButton() {
    const [prompt, setInstallPrompt] = useState<any>(_installPrompt)
    useEffect(() => {
        if (_installPrompt) return
        const id = setInterval(() => {
            if (_installPrompt) {
                setInstallPrompt(_installPrompt)
                if (id) clearInterval(id)
            }
        }, 3000)
        return () => clearInterval(id)
    }, [])

    const onClickInstall = useCallback(() => {
        if (prompt) {
            prompt.prompt()
        }
    }, [prompt])

    return (
        <button disabled={!prompt} onClick={onClickInstall}>
            Install
        </button>
    )
}
