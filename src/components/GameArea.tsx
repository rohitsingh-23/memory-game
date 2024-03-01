import React, { useEffect, useRef, useState } from "react";
import LeftCard from "../assets/left-card.svg"
import RightCard from "../assets/right-card.svg"
import AppleLeft from "../assets/apple-left.svg"
import AppleRight from  "../assets/apple-right.svg"
import OrangeLeft from "../assets/orange-left.svg"
import OrangeRight from  "../assets/orange-right.svg"
import { useAppContext } from "../context/AppContext";
import NextBtn from "./NextButton";

type cardItemType = {
  id: string;
  value: string;
  frontImage: string;
  backImage: string;
  active: boolean;
    matched: boolean;
};

const GameArea: React.FC = () => {
    const [leftCards, setLeftCards] = useState<cardItemType[]>([{
            id: "l-0",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,
            matched: false,
        },{
            id: "l-1",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,
            matched: false,
        },{
            id: "l-2",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
        active: false,
            matched: false,
        },{
            id: "l-3",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
            active: false,matched: false,
        },{
            id: "l-4",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,matched: false,
        },{
            id: "l-5",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
            active: false,matched: false,
        }]);
    const [rightCards, setRightCards] = useState<cardItemType[]>([{
            id: "l-0",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            matched: false,
        },{
            id: "l-1",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            matched: false,
        },{
            id: "l-2",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            matched: false,
        },{
            id: "l-3",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            matched: false,
        },{
            id: "l-4",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            matched: false,
        },{
            id: "l-5",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            matched: false,
        }]);
    const [selectedLeftCard, setSelectedLeftCard] = useState<cardItemType>()
    const [selectedRightCard, setSelectedRightCard] = useState<cardItemType>()
    const matchedContainerRef = useRef<HTMLDivElement>(null);
    const { moves, setMoves, solvedCards, setSolvedCards, screen, setScreen } = useAppContext();
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const matchedContainer = matchedContainerRef.current;

            if (
                matchedContainer 
            ) {
                setTimeout(() => {
                    
                    setSelectedLeftCard(undefined)
                    setSelectedRightCard(undefined)
                }, 300)
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < 6; i++){
            if (leftCards[i].matched) {
               count++
           }
        }
        setSolvedCards(count);
    })

    useEffect(() => {
            setLeftCards((prev) => {
                return prev.map((item) => {
                    let temp = item
                    if (item.id == selectedLeftCard?.id) {
                       {selectedLeftCard?.value == selectedRightCard?.value ? temp.matched=true : temp.active =  false }
                    }
                    return temp
                })
            })
            setRightCards((prev) => {
                return prev.map((item) => {
                    let temp = item
                    if (item.id == selectedRightCard?.id) {
                       {selectedLeftCard?.value == selectedRightCard?.value? temp.matched=true : temp.active = false}
                    }
                    return temp
                })
            })
    }, [selectedRightCard])



    const leftContainerStyle: React.CSSProperties = {
        flexWrap: "wrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        margin: "auto"
        
    }
    const rightContainerStyle: React.CSSProperties = {
        flexWrap: "wrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        margin: "auto"
    }
    const cardStyle: React.CSSProperties = {
        width: "80%",
    }

    
    return <div style={{display: "flex", marginTop: "3%"}}>
        <div className="left" style={leftContainerStyle}>
            {leftCards.map((item) => {
                return <div key={item.id} style={{ width: "30%", opacity: `${item.matched ? "0" : "100%" }` }} onClick={() => {
                    if (!selectedLeftCard) {
                    if (!item.active) {
                        setLeftCards((prev) => {
                                return prev.map((temp) => {
                                if (temp.id === item.id) {
                                    return { ...temp, active: !temp.active };
                                }
                                return temp;
                                });
                        }); 
                    }
                        setSelectedLeftCard(item)
                    }
                    
                }} >
                    <img src={item.active ? item.backImage :item.frontImage}  style={cardStyle} alt="" />
                </div>
            })}
        </div>
        <div className="right" style={rightContainerStyle}>
            {rightCards.map((item) => {
                return <div key={item.id} style={{ width: "30%", opacity: `${item.matched ? "0" : "100%"}` }} onClick={() => {                   
                    if (!selectedRightCard && selectedLeftCard) {
                        if (selectedLeftCard) {
                        setRightCards((prev) => {
                                return prev.map((temp) => {
                                    if (temp.id === item.id) {
                                    return { ...temp, active: !temp.active };
                                }
                                return temp;
                                });
                        });
                    }
                    setMoves((prev) => prev + 1)
                    
                    setTimeout(() => {
                        setSelectedRightCard(() => {
                            return item
                        });
                    }, 500)
                    }
                }} >
                    <img src={item.active ? item.backImage :item.frontImage} style={cardStyle} alt="" />
                </div>
            })}
        </div>
        {selectedLeftCard && selectedRightCard ? <div className="matched-container" ref={matchedContainerRef}>
              <p className={  selectedLeftCard.value !== selectedRightCard.value ? "unmatched-text" :  moves ==12 ? "out-of-moves-text" : "matched-text" }>{selectedLeftCard.value !== selectedRightCard.value ? "It’s not a match !" :  moves ==12 ? "Out of moves" : "It’s a match !" }</p>
            <div className="matched-card-container">
                <img className="matched-image-one" src={selectedLeftCard?.backImage} alt="" />
                <img className="matched-image-two" src={selectedRightCard?.backImage} alt="" />
            </div>
            {moves == 12  || solvedCards == 6 ? <NextBtn text="Next" setScreen={setScreen}/> :null}
        </div>: null}
    </div>
}


export default GameArea


//   <p className={  selectedLeftCard.value !== selectedRightCard.value ? "It’s not a match !" :  moves ==2 ? "Out of moves" : "It’s a match !" }>{selectedLeftCard.value !== selectedRightCard.value ? "It’s not a match !" :  moves ==2 ? "Out of moves" : "It’s a match !" }</p>