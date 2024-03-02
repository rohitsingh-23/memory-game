import React from 'react';
import CommentBoxImage from "../assets/comment-box.svg"
import BananaImage from "../assets/banana.svg"
import ThinkingImoji from "../assets/Thinking-Emoji.svg"

interface CommentBoxProps {
  screen: number;
}

const CommentBox: React.FC<CommentBoxProps> = ({ screen }) => {
    const text = ["Welcome Kiddo !","Hi , I am Mizo !\nand I love bananas", "Can you help me get some ?"]

    const textStyle: React.CSSProperties = {
    fontSize: `${ screen==0 ? "2.8vw": "2vw"}`,

    };
    
    const iconStyle: React.CSSProperties = {
        width: `${screen == 1 ? "10%" : "15%"}`,
        position: "absolute",
        top: `${screen == 1 ? "40%" : "38%"}`
    }

  return (
    <div className='comment-box-container'>
        <img src={CommentBoxImage} alt="" width={"100%"} loading="lazy" />
        <p className='comment-text-style' style={textStyle}> {text[screen]} </p>
        {screen == 1 || screen==2 ? <img src={screen==2 ? BananaImage: ThinkingImoji} style={iconStyle} alt="" loading="lazy" /> : null}
    </div>
  );
};



export default CommentBox;


