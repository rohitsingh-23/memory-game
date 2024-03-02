import React, { useEffect, useRef, useState } from "react";
import LeftCard from "../assets/left-card.svg"
import RightCard from "../assets/right-card.svg"
import AppleLeft from "../assets/apple-left.svg"
import AppleRight from  "../assets/apple-right.svg"
import OrangeLeft from "../assets/orange-left.svg"
import OrangeRight from  "../assets/orange-right.svg"
import SelectCardOneIndicatorArrow from  "../assets/select-card-one-indicator-arrow.svg"
import SelectCardOneIndicatorText from  "../assets/select-card-one-indicator-text.svg"
import SelectCardTWoIndicatorText from  "../assets/select-card-two-indicator-text.svg"
import { useAppContext } from "../context/AppContext";
import NextBtn from "./NextButton";
import MovesBox from "./MovesBox";



type cardItemType = {
  id: string;
  value: string;
  frontImage: string;
  backImage: string;
  active: boolean;
    matched: boolean;
};

const generateCard = (id: string, value: string, frontImage: string, backImage: string): cardItemType => ({
    id,
    value,
    frontImage,
    backImage,
    active: false,
    matched: false,
});

const GameArea: React.FC = () => {
    const [leftCards, setLeftCards] = useState<cardItemType[]>([
        generateCard("l-0", "apple", LeftCard, AppleLeft),
        generateCard("l-1", "apple", LeftCard, AppleLeft),
        generateCard("l-2", "orange", LeftCard, OrangeLeft),
        generateCard("l-3", "orange", LeftCard, OrangeLeft),
        generateCard("l-4", "apple", LeftCard, AppleLeft),
        generateCard("l-5", "orange", LeftCard, OrangeLeft),]);
    const [rightCards, setRightCards] = useState<cardItemType[]>([
        generateCard("r-0", "orange", RightCard, OrangeRight),
        generateCard("r-1", "apple", RightCard, AppleRight),
        generateCard("r-2", "apple", RightCard, AppleRight),
        generateCard("r-3", "apple", RightCard, AppleRight),
        generateCard("r-4", "orange", RightCard, OrangeRight),
        generateCard("r-5", "orange", RightCard, OrangeRight),
    ]);
    const [selectedLeftCard, setSelectedLeftCard] = useState<cardItemType>()
    const [selectedRightCard, setSelectedRightCard] = useState<cardItemType>()
    const matchedContainerRef = useRef<HTMLDivElement>(null);
    const { moves, setMoves, solvedCards, setSolvedCards, screen, setScreen } = useAppContext();

    useEffect(() => {
        const shuffle = (array: cardItemType[]) => { 
            for (let i = array.length - 1; i > 0; i--) { 
                const j = Math.floor(Math.random() * (i + 1)); 
                [array[i], array[j]] = [array[j], array[i]]; 
            } 
            return array; 
        }; 
        setLeftCards(shuffle(leftCards))
        setRightCards(shuffle(rightCards))
    }, [])

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
        if (!(moves === 12 || solvedCards >= 5)) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [moves]);

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


    
    return <div style={{ display: "flex", marginTop: "3%", }}>
        <MovesBox screen={screen} />
        {moves ==0 && !selectedLeftCard ? <img style={{position: "absolute", top: "14vh", left: "30vw", width: "12vw"}} src={SelectCardOneIndicatorArrow} alt="" /> : null}
        {moves == 0 && !selectedLeftCard ? <img style={{position: "absolute", top: "10vh", left: "40vw", width: "12vw"}} src={SelectCardOneIndicatorText} alt="" /> : null}
       {moves == 0 && selectedLeftCard ? <img style={{position: "absolute", bottom: "10vh", right: "30vw", width: "12vw", transform: "scale(-1, -1)"}} src={SelectCardOneIndicatorArrow} alt="" /> : null}
        {moves == 0 && selectedLeftCard ? <img style={{position: "absolute", bottom: "20vh", right: "30vw", width: "12vw"}} src={SelectCardTWoIndicatorText} alt="" /> : null}
        <div className="left left-container-style">
            {leftCards.map((item) => {
                return <div key={item.id} style={{ width: "30%", cursor: "pointer", opacity: `${item.matched ? "0" : "100%" }` }} onClick={() => {
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
                    <img src={item.active ? item.backImage :item.frontImage} className="card-style" alt="" loading="lazy"/>
                </div>
            })}
        </div>
        <div className="right right-container-style">
            {rightCards.map((item) => {
                return <div key={item.id} style={{ width: "30%", cursor: "pointer", opacity: `${item.matched ? "0" : "100%"}`}} onClick={() => {                   
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
                    <img src={item.active ? item.backImage :item.frontImage} className="card-style" alt="" loading="lazy"/>
                </div>
            })}
        </div>
        {selectedLeftCard && selectedRightCard ? <div className="matched-container" ref={matchedContainerRef}>
              <p className={  selectedLeftCard.value !== selectedRightCard.value ? "unmatched-text" :   moves ==12 ? "out-of-moves-text" : "matched-text" }>{selectedLeftCard.value !== selectedRightCard.value ? "It’s not a match !" :  moves ==12 ? "Out of moves" : "It’s a match !" }</p>
            <div className="matched-card-container">
                <img className="matched-image-one" src={selectedLeftCard?.backImage} alt="" loading="lazy"/>
                <img className="matched-image-two" src={selectedRightCard?.backImage} alt="" loading="lazy" />
            </div>
            {moves == 12  || solvedCards == 6 ? <NextBtn text="Next" setScreen={setScreen}/> :null}
        </div>: null}
    </div>
}

export default GameArea
