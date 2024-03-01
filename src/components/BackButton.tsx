import React from 'react';
import BackBtnImage from "../assets/back-btn.png"

interface BackBtnProps {
    setScreen: Function
}

const BackBtn: React.FC<BackBtnProps> = ({setScreen}) => {
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    width: '110px',
    height: '110px', 
    backgroundImage: `url(${BackBtnImage})`,
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: 'white', 
    textAlign: 'center', 
    top: "5%",
      left: "2%",
    zIndex: 10,
  };


  return (
      <div style={containerStyle} onClick={() => {
          setScreen((prev: number) => {
              if (prev > 0) {
                  return prev - 1;
        }
    })}}>
    </div>
  );
};

export default BackBtn;