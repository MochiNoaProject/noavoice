import { useCallback, useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed"
        platform: string
    }>
    prompt(): Promise<void>
}

let cache: BeforeInstallPromptEvent
if (typeof window !== "undefined") {
    console.warn("005")
    window.addEventListener("beforeinstallprompt", e => {
        console.warn("004")
        e.preventDefault()
        cache = e as BeforeInstallPromptEvent
    })
}

export const useInstallPWA = () => {
    const [event, setEvent] = useState<BeforeInstallPromptEvent>(cache)

    useEffect(() => {
        if (cache) return
        const id = setInterval(() => {
            console.warn("000")
            if (cache) {
                console.warn("001")
                setEvent(cache)
                if (id) {
                    console.warn("002")
                    clearInterval(id)
                }
            }
        }, 3000)
        return () => clearInterval(id)
    }, [])

    const handleClick = useCallback(async () => {
        if (event) {
            await event.prompt()
        }
    }, [event])

    return [Boolean(event), handleClick] as const
}
