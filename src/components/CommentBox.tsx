import React from 'react';
import CommentBoxImage from "../assets/comment-box.png"
import BananaImage from "../assets/banana.png"
import ThinkingImoji from "../assets/Thinking-Emoji.svg"

interface CommentBoxProps {
  screen: number;
}

const CommentBox: React.FC<CommentBoxProps> = ({ screen }) => {
const text = ["Welcome Kiddo !","Hi , I am Mizo !\nand I love bananas", "Can you help me get some ?"]
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    right: "20%",
    top: "15%",
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
    marginTop: '-4%',
    width: "80%",
    fontSize: `${ screen==0 ? "2.8vw": "2vw"}`,
    fontWeight: "800",
    color: "#11AEC6",
    whiteSpace: "normal",
    paddingLeft: "10%",
    height: "fit-content",
    
  };
    
    const iconStyle: React.CSSProperties = {
        width: `${screen == 1 ? "10%" : "15%"}`,
        position: "absolute",
        top: `${screen == 1 ? "40%" : "30%"}`
    }

  return (
    <div style={containerStyle}>
        <img src={CommentBoxImage} alt="" width={"100%"} />
        <p style={textStyle}> {text[screen]} </p>
        {screen == 1 || screen==2 ? <img src={screen==2 ? BananaImage: ThinkingImoji} style={iconStyle} alt=""  /> : null}
    </div>
  );
};



export default CommentBox;


