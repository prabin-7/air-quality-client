import React from "react"
import "../styles/Header.css"

const Header: React.FC = () => {
    return (
        <div className="header-container">
            {/* <div className="college" >KEC</div> */}
            <div className="title">
                AIR QUALITY MONITORING SYSTEM
            </div>
            {/* <div className="git" >
                <AiFillGithub />
            </div> */}
        </div>
    )
}

export default Header;