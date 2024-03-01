import React from "react"
import UnactiveBananaIndicator from "../assets/unactive-banana-indicator.svg"
import FilledBananaIndicator from "../assets/filled-banana-indicator.svg"
import ActiveBarIndicator2 from "../assets/active-bar-indicator-2.svg"
import { useAppContext } from "../context/AppContext"

interface BananaIndicatorProps {
    active: boolean
}

const BananaIndicator: React.FC<BananaIndicatorProps> = ({ active }) => {

    const {moves, solvedCards} = useAppContext()
    
    const containerStyle: React.CSSProperties = {
    width: '40%',
    color: 'white', 
    textAlign: 'left',
    top: "10%",
    zIndex: 10,
    
    };
    
    
    return <div style={containerStyle}>
        <img src={solvedCards == 6 ? FilledBananaIndicator : solvedCards > 0 ? ActiveBarIndicator2 : UnactiveBananaIndicator} alt="" width={"100%"} />
    </div>
}


export default BananaIndicator
