import React, { useState } from 'react';
import NextBtnImage from "../assets/next-btn.png"

interface NextBtnProps {
  text: string;
    setScreen: Function;
}

const NextBtn: React.FC<NextBtnProps> = ({ text, setScreen }) => {
    const [isBobble, setIsBobble] = useState(false);
const containerStyle: React.CSSProperties = {
    position: 'absolute',
    width: '20%',
    color: 'white',
    right: "5%",
    bottom: "5%",
    display: "flex",
    justifyContent: "center",
      alignItems: 'center',
    zIndex: 0,
    
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
      marginTop: '18%',
    marginLeft: "-5%",
    fontSize: "4vw",
    fontWeight: "800",
    color: "#fff",
    whiteSpace: "normal",
    paddingLeft: "0%",
      height: "fit-content",
    
  };

  return (
      <div style={containerStyle} onClick={() => {
          setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)
              setScreen((prev: number) => prev + 1)
          }, 200);
    }} className={isBobble ? 'bobble-button' : ''}>
        <img src={NextBtnImage} alt="" width={"100%"} />
        <p style={textStyle}>{text}</p>
    </div>
  );
};



export default NextBtn;

