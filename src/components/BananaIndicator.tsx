import React from "react"
import UnactiveBananaIndicator from "../assets/unactive-banana-indicator.svg"

interface BananaIndicatorProps {
    active: boolean
}

const BananaIndicator: React.FC<BananaIndicatorProps> = ({ active }) => {
    const containerStyle: React.CSSProperties = {
    // position: 'absolute',
    width: '40%',
    // height: '300px', 
    color: 'white', 
    textAlign: 'left', 
    right: "10%",
    top: "10%",
        // backgroundColor: "red"
    zIndex: 10,
  };
    return <div style={containerStyle}>
        <img  src={UnactiveBananaIndicator} alt="" width={"100%"}  />
    </div>
}


export default BananaIndicator
