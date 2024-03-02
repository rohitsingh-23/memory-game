import React, { useState } from 'react';

interface BackBtnProps {
    setScreen: Function
}

const BackBtn: React.FC<BackBtnProps> = ({ setScreen }) => {
    const [isBobble, setIsBobble] = useState(false);
    
  return (
      <div className={isBobble ? 'bobble-button back-button-container' : 'back-button-container'} onClick={() => {
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