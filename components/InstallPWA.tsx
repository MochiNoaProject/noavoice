import React, { useCallback, useEffect, useState } from "react"

let _installPrompt: any
if (typeof window !== "undefined") {
    window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault()
        console.error("beforeinstallprompt")
        _installPrompt = e
    })
}

export default function AppInstallButton() {
    const [prompt, setInstallPrompt] = useState<any>(_installPrompt)
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeinstallprompt", async e => {
                // beforeinstallprompt Event fired
                try {
                    // e.userChoice will return a Promise.
                    //@ts-ignore
                    const choiceResult = await e.userChoice
                    if (choiceResult.outcome === "dismissed") {
                        /* eslint-disable no-console */
                        console.log("User cancelled home screen install")
                        /* eslint-enable no-console */
                    } else {
                        /* eslint-disable no-console */
                        console.log("User added to home screen")
                        /* eslint-enable no-console */
                    }
                } catch (error) {
                    /* eslint-disable no-console */
                    console.error("user choice prompt promise failed to resolve, error: ", error)
                    /* eslint-enable no-console */
                }
            })
        }
    }, [])
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
