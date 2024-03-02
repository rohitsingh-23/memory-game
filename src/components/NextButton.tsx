import React, { useState } from 'react';
import NextBtnImage from "../assets/next-btn.png"

interface NextBtnProps {
  text: string;
    setScreen: Function;
}

const NextBtn: React.FC<NextBtnProps> = ({ text, setScreen }) => {
    const [isBobble, setIsBobble] = useState(false);

    return (
        <div onClick={() => {
            setIsBobble(true);
            setTimeout(() => {
                setIsBobble(false)
                setScreen((prev: number) => prev + 1)
            }, 200);
    }} className={isBobble ? 'bobble-button next-button-container-style' : 'next-button-container-style'}>
        <img src={NextBtnImage} alt="" width={"100%"} loading="lazy"/>
        <p className='next-button-text-style'>{text}</p>
    </div>
    );
};



export default NextBtn;


