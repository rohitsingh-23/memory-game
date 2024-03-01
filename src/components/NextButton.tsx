import React from 'react';
import NextBtnImage from "../assets/next-btn.png"

interface NextBtnProps {
  text: string;
    setScreen: Function;
}

const NextBtn: React.FC<NextBtnProps> = ({ text, setScreen }) => {
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
          setScreen((prev: number) => {
              if (prev >= 0 ) {
                  return prev + 1
              }
              return prev
          })
    }}>
        <img src={NextBtnImage} alt="" width={"100%"} />
        <p style={textStyle}>{text}</p>
    </div>
  );
};



export default NextBtn;


