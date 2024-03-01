import React, { useState } from 'react';
import BackBtnImage from "../assets/back-btn.png"

interface BackBtnProps {
    setScreen: Function
}

const BackBtn: React.FC<BackBtnProps> = ({ setScreen }) => {
    const [isBobble, setIsBobble] = useState(false);
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    width: '10vw',
    height: '110px', 
    backgroundImage: `url(${BackBtnImage})`,
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: 'white', 
    textAlign: 'center', 
    top: "5vh",
    left: "3vw",
    zIndex: 10,
  };


  return (
      <div style={containerStyle} className={isBobble ? 'bobble-button' : ''} onClick={() => {
          setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)
              setScreen((prev: number) => {
              if (prev > 0) {
                  return prev - 1;
                    }
            })
          }, 200);
          }}>
    </div>
  );
};

export default BackBtn;