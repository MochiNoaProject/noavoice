import { useInstallPWA } from "./useInstallPWA"
import React from "react"

export default function AppInstallButton() {
    const [installable, showInstallPrompt] = useInstallPWA()

    return (
        <button onClick={showInstallPrompt} disabled={!installable}>
            <style jsx>{`
                button {
                    all: unset;
                    font-size: 1rem;
                    color: #ff7500;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.75em 1em;
                    margin: 0.5em 0px;
                    border: 4px dotted #faa65f;
                    cursor: pointer;
                    text-decoration: underline;
                }
                button:disabled {
                    cursor: wait;
                    color: gray;
                    border-color: gray;
                    text-decoration: none;
                }
            `}</style>
            {installable ? "アプリをインストールする" : "しばしまたれい"}
        </button>
    )
}
