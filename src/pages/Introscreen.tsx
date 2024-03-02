import React, { useState } from 'react'
import SmilingMonkey from "../assets/smiling-monkey.svg"
import CommentBox from '../components/CommentBox';
import NextBtn from '../components/NextButton';
import BackBtn from '../components/BackButton';
import BananaIndicator from '../components/BananaIndicator';
import IndicatorCard from '../components/InstructionCards';
import GameArea from '../components/GameArea';
import { useAppContext } from '../context/AppContext';
import RewardComponent from '../components/RewardComponent';


interface IntoScreenProps {
    prop1: string;
    prop2: number; 
}
const IntoScreen: React.FC<IntoScreenProps> = ({ prop1, prop2 }) => {
    const { screen, setScreen } = useAppContext();
    
  return (
      <div style={{}}>
          {screen > 1 ?<div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
              <BananaIndicator active={false} />
          </div> : null}
          {screen !== 0 ? <BackBtn setScreen={ setScreen} /> : null}
          {screen < 3 ? <img className='introscreen-monkey' src={SmilingMonkey} alt="smiling-monkey" loading="lazy" />: null}
          {screen < 3 ? <CommentBox screen={screen} /> : null}
          {screen == 3 ? <IndicatorCard /> : null}
          {screen < 4 ? <NextBtn text={screen==1 ?'Next' : screen == 2 ? "Yes" : screen==3 ? "Play" : "Start"} setScreen={setScreen} /> : null}
          {screen == 4 ? <GameArea /> : null}
          {screen == 5 ? <RewardComponent/> : null}
    </div>
  );
};

export default IntoScreen;


