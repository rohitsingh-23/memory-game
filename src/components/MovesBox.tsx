import React from 'react';
import { useAppContext } from '../context/AppContext';

interface MovesBoxProps {
  screen: number;
}

const MovesBox: React.FC<MovesBoxProps> = ({ screen }) => {
    const text = ["Welcome Kiddo !","Hi , I am Mizo !\nand I love bananas", "Can you help me get some ?"]
    const { moves } = useAppContext();
    const textStyle: React.CSSProperties = {
    fontSize: `${ screen==0 ? "2.8vw": "2vw"}`,

    };
    
    const iconStyle: React.CSSProperties = {
        width: `${screen == 1 ? "10%" : "15%"}`,
        position: "absolute",
        top: `${screen == 1 ? "40%" : "30%"}`
    }

  return (
    <div className='moves-box-container'>
        <p className='moves-text-style'>Moves Left: {12 - moves}</p>
    </div>
  );
};



export default MovesBox;


