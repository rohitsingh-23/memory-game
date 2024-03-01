import React, { useState } from 'react';
import OkBtnImage from "../assets/okay-btn.svg"

interface OkBtnProps {
  text: string;
setScreen: Function;
}

const OkBtn: React.FC<OkBtnProps> = ({ text, setScreen }) => {
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
      <div style={containerStyle} className={isBobble ? 'bobble-button' : ''} onClick={() => {
          setIsBobble(true);
          setTimeout(() => {
              setIsBobble(false)
            //   setScreen((prev: number) => prev + 1)
          }, 300);
    }}>
        <img src={OkBtnImage} alt="" width={"100%"} />
        <p style={textStyle}>{text}</p>
    </div>
  );
};



export default OkBtn;


