import { useWowWowMode } from "./WowWowModeProbider"
import React from "react"

const ToggleSwitch: React.FC = () => {
    const { isWowWowMode, toggleWowWowMode } = useWowWowMode()
    return (
        <>
            <style jsx>{`
                .button {
                    font-size: 1em;
                    height: 50px;
                    width: min-content;
                    background-color: #fcdfa1;
                    border-radius: 40px;
                    cursor: pointer;
                    display: flex;
                    position: relative;
                    user-select: none;
                    transition: flex-direction 10s;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
                .circle {
                    width: 50px;
                    height: 50px;
                    background-color: #faa65f;
                    border-radius: 50%;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .text {
                    color: #ff7500;
                    margin: auto;
                    padding: 0px 1em 0px 0.5em;
                    white-space: nowrap;
                }
            `}</style>
            <div
                className="button"
                style={isWowWowMode ? { flexDirection: "row-reverse" } : undefined}
                onClick={toggleWowWowMode}
            >
                <div className="circle" style={{ backgroundColor: isWowWowMode ? "#f06808" : "#faa65f" }}>
                    {isWowWowMode ? "ON" : "OFF"}
                </div>
                <div className="text">わーわーもーど</div>
            </div>
        </>
    )
}

export default ToggleSwitch
