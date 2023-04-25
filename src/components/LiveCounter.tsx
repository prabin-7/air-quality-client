import React from "react"

import "../styles/LiveCounter.css"

interface Props {
    smoke: string,
    lpg: string,
    co: string
}



const LiveCounter: React.FC<Props> = ({co,lpg,smoke}) => {
    return (
        <div className="live-counter-container">
            <div className="gas" >
                <div className="title" >SMOKE</div>
                <div className="count" >{smoke}</div>
            </div>
            <div className="gas" >
                <div className="title" >LPG</div>
                <div className="count" >{lpg}</div>
            </div>
            <div className="gas" >
                <div className="title" >CO</div>
                <div className="count" >{co}</div>
            </div>
        </div>
    )
}

export default LiveCounter;