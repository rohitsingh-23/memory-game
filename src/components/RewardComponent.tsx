import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Reward from "../assets/reward.svg"
import OkBtnImage from "../assets/okay-btn.svg"
import BananaImage from "../assets/banana.svg"

const RewardComponent: React.FC = () => {
    const [isBobble, setIsBobble] = useState(false);
    const {moves, solvedCards, setScreen, setSolvedCards, setMoves } = useAppContext();

    const calculateReward = () => {
        if (solvedCards == 0) {
            return 0
        }else if (moves !== 12 as number) {
            return moves * (6 - (moves - 6)) + solvedCards;
        } else {
            return moves * 0.5 + solvedCards;
        }
    }

    return <div style={{backgroundColor: "#000000a6", width: "100vw", height: "100vh", position: "absolute", top: "0"}}>
        {solvedCards >0 ? <div>
            <img className="rewarded-banana-common rewarded-banana-1" src={BananaImage} alt=""  loading="lazy"/>
            <img className="rewarded-banana-common rewarded-banana-2" src={BananaImage} alt=""  loading="lazy"/>
            <img className="rewarded-banana-common rewarded-banana-3" src={BananaImage} alt=""  loading="lazy"/>
            <img className="rewarded-banana-common rewarded-banana-4" src={BananaImage} alt=""  loading="lazy"/>
            <img className="rewarded-banana-common rewarded-banana-5" src={BananaImage} alt=""  loading="lazy"/>
        </div> : null}
        <div className="containerStyle">
            <img src={Reward} alt="" className="imageStyle"  loading="lazy"/>
            <p className="textStyle">Earned</p>
            <p className="textStyle2">{calculateReward()} Banana’s </p>
            <img className={isBobble ? 'bobble-button iconStyle' : 'iconStyle'} onClick={() => {
                setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)   
              setScreen(0)
              setMoves(0)
              setSolvedCards(0)
            
          }, 200);
            }} src={OkBtnImage}  alt="" loading="lazy"/>
            <p className={isBobble ? 'bobble-button btnTextStyle' : 'btnTextStyle'} onClick={() => {
                    setIsBobble(true);
            setTimeout(() => {
                setIsBobble(false)   
                setScreen(0)
                setMoves(0)
                setSolvedCards(0)
                
            }, 200);
            }}>YAY, OK!</p>
        </div>
    </div>
  
}

export default RewardComponent