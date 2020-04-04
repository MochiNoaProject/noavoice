import { createContext, useCallback, useContext, useState } from "react"
const WowWowModeContext = createContext({
    isWowWowMode: false,
    toggleWowWowMode: () => {}
})

const { Provider } = WowWowModeContext

export const WowWowModeProvider: React.FC = ({ children }) => {
    const [isWowWowMode, setIsWowWowMode] = useState(false)
    const toggleWowWowMode = useCallback(() => {
        setIsWowWowMode(prev => !prev)
    }, [])
    return <Provider value={{ isWowWowMode, toggleWowWowMode }}>{children}</Provider>
}

export const useWowWowMode = () => {
    return useContext(WowWowModeContext)
}
