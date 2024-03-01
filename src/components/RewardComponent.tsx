import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Reward from "../assets/reward.svg"
import OkBtnImage from "../assets/okay-btn.svg"

const RewardComponent: React.FC = () => {
    const [isBobble, setIsBobble] = useState(false);
    const {moves, solvedCards, setScreen, setSolvedCards, setMoves } = useAppContext();

    const calculateReward = () => {
        if (moves !== 12 as number) {
            return moves * (6 - (moves - 6)) + solvedCards;
        } else {
            return moves * 0.5 + solvedCards;
        }
    }
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        left: "50%",
        top: "45%",
        transform: "translate(-50%, -50%)",
        width: '30vw',
        height: 'fit-content',
        color: 'white', 
        textAlign: 'left', 
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        zIndex: 0,
        
    };

    const textStyle: React.CSSProperties = {
        position: 'absolute',
        top: "21%",
        paddingTop: '-58%',
        fontSize: "1.5vw",
        fontWeight: "800",
        color: "#fff",
        whiteSpace: "normal",
        height: "fit-content",
    
  };
    const textStyle2: React.CSSProperties = {
        position: 'absolute',
        marginTop: '-35%',
        fontSize: "3.5vw",
        fontWeight: "800",
        color: "#fff",
        whiteSpace: "normal",
        height: "fit-content",
    
    };
    const BtnTextStyle: React.CSSProperties = {
        position: 'absolute',
        top: '78%',
        fontSize: "3vw",
        fontWeight: "800",
        color: "#fff",
        whiteSpace: "normal",
        height: "fit-content",
    
    };
    
    const imageStyle: React.CSSProperties = {
        display: "block",
        margin: "auto",
        width: "100%",
    };
    const iconStyle: React.CSSProperties = {
        width: "70%",
        position: "absolute",
        top: "85%"
    }
    
      
    return <div style={{backgroundColor: "#000000a6", width: "100vw", height: "100vh", position: "absolute", top: "0"}}>
        <div style={containerStyle}>
            <img src={Reward} alt="" style={imageStyle} />
            <p style={textStyle}>Earned</p>
            <p style={textStyle2}>{calculateReward()} Banana’s </p>
            <img className={isBobble ? 'bobble-button' : ''} onClick={() => {
                setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)   
              setScreen(0)
              setMoves(0)
              setSolvedCards(0)
            
          }, 200);
            }} src={OkBtnImage} style={iconStyle} alt="" />
            <p className={isBobble ? 'bobble-button' : ''} onClick={() => {
                setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)   
              setScreen(0)
              setMoves(0)
              setSolvedCards(0)
            
          }, 200);
            }} style={BtnTextStyle} >YAY, OK!</p>
        </div>
    </div>
  
}

export default RewardComponent