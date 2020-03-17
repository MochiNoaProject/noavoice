import React from "react"

type Props = {
    onClick: () => void
    active: boolean
}

const ToggleSwitch: React.FC<Props> = ({ onClick, active }) => (
    <div className="wrapper">
        <style jsx>{`
            .wrapper {
                height: 81px;
                display: flex;
                flex-direction: column;
                margin: auto 0;
            }
            .button {
                width: 260px;
                height: 60px;
                background-color: #fcdfa1;
                border-radius: 40px;
                cursor: pointer;
                display: flex;
                margin: auto;
                position: relative;
                user-select: none;
                transition: flex-direction 10s;
                box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12);
            }
            .circle {
                width: 60px;
                height: 60px;
                background-color: #faa65f;
                border-radius: 50%;
                color: #fff;
                display: flex;
            }
            .state {
                margin: auto;
            }
            .text {
                color: #ff7500;
                margin: auto;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
            }
        `}</style>
        <div className="button" style={active ? { flexDirection: "row-reverse" } : undefined} onClick={onClick}>
            <div className="circle">
                <span className="state">{active ? "ON" : "OFF"}</span>
            </div>
            <div className="text">わーわーもーど</div>
        </div>
    </div>
)

export default ToggleSwitch
