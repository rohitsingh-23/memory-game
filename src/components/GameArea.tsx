import React, { useEffect, useRef, useState } from "react";
import LeftCard from "../assets/left-card.svg"
import RightCard from "../assets/right-card.svg"
import AppleLeft from "../assets/apple-left.svg"
import AppleRight from  "../assets/apple-right.svg"
import OrangeLeft from "../assets/orange-left.svg"
import OrangeRight from  "../assets/orange-right.svg"

type cardItemType = {
  id: string;
  value: string;
  frontImage: string;
  backImage: string;
  active: boolean;
  opened: boolean;
};

const GameArea: React.FC = () => {
    const [leftCards, setLeftCards] = useState<cardItemType[]>([{
            id: "l-0",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,
            opened: false,
        },{
            id: "l-1",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,
            opened: false,
        },{
            id: "l-2",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
        active: false,
            opened: false,
        },{
            id: "l-3",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
            active: false,opened: false,
        },{
            id: "l-4",
            value: "apple",
            frontImage: LeftCard,
            backImage: AppleLeft,
            active: false,opened: false,
        },{
            id: "l-5",
            value: "orange",
            frontImage: LeftCard,
            backImage: OrangeLeft,
            active: false,opened: false,
        }]);
    const [rightCards, setRightCards] = useState<cardItemType[]>([{
            id: "l-0",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            opened: false,
        },{
            id: "l-1",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            opened: false,
        },{
            id: "l-2",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            opened: false,
        },{
            id: "l-3",
            value: "apple",
            frontImage: RightCard,
            backImage: AppleRight,
            active: false,
            opened: false,
        },{
            id: "l-4",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            opened: false,
        },{
            id: "l-5",
            value: "orange",
            frontImage: RightCard,
            backImage: OrangeRight,
            active: false,
            opened: false,
        }]);
    const [selectedLeftCard, setSelectedLeftCard] = useState<cardItemType>()
    const [selectedRightCard, setSelectedRightCard] = useState<cardItemType>()
    const matchedContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const matchedContainer = matchedContainerRef.current;

            if (
                matchedContainer 
                // event.target &&
                // !matchedContainer.contains(event.target as Node) &&
                // !event.target.toString().includes("matched-card-container")
            ) {
                // Clicked outside the matched-card-container
                // Add your logic here, for example, to reset selected cards
                
                // setLeftCards((prev) => {
                //     return prev.map(()=> {})
                // })

                setSelectedLeftCard(undefined)
                setSelectedRightCard(undefined)
                console.log("clicked outside")
                setSelectedLeftCard(undefined);
                setSelectedRightCard(undefined);
            }
        };

        // Attach the event listener to the document
        document.addEventListener("click", handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
            setLeftCards((prev) => {
                return prev.map((item) => {
                    let temp = item
                    if (item.id == selectedLeftCard?.id) {
                       {selectedLeftCard?.value == selectedRightCard?.value ? temp.opened=true : temp.active =  false }
                    }
                    return temp
                })
            })
            setRightCards((prev) => {
                return prev.map((item) => {
                    let temp = item
                    if (item.id == selectedRightCard?.id) {
                       {selectedLeftCard?.value == selectedRightCard?.value? temp.opened=true : temp.active = false}
                    }
                    return temp
                })
            })
        // } else {
        //     setLeftCards((prev) => {
        //         return prev.map((item) => {
        //             let temp = item
        //             if (item.id == selectedLeftCard?.id) {
        //                temp.active=false
        //             }
        //             return temp
        //         })
        //     })
        //     setRightCards((prev) => {
        //         return prev.map((item) => {
        //             let temp = item
        //             if (item.id == selectedRightCard?.id) {
        //                temp.active=false
        //             }
        //             return temp
        //         })
        //     })
        // }
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
                return <div key={item.id} style={{ width: "30%", opacity: `${item.opened ? "0" : "100%" }` }} onClick={() => {
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
                    
                }} >
                    <img src={item.active ? item.backImage :item.frontImage}  style={cardStyle} alt="" />
                </div>
            })}
        </div>
        <div className="right" style={rightContainerStyle}>
            {rightCards.map((item) => {
                return <div key={item.id} style={{ width: "30%", opacity: `${item.opened ? "0" : "100%" }` }} onClick={() => {
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
                    setTimeout(() => {
                        setSelectedRightCard(item);
                    }, 500)
                }} >
                    <img src={item.active ? item.backImage :item.frontImage} style={cardStyle} alt="" />
                </div>
            })}
        </div>
        {selectedLeftCard && selectedRightCard ? <div className="matched-container" ref={matchedContainerRef}>
            <p className={selectedLeftCard.value !== selectedRightCard.value ? "unmatched-text"  :"matched-text"}>{selectedLeftCard.value !== selectedRightCard.value ? "It’s not a match !" : "It’s a match !" }</p>
            <div className="matched-card-container">
                <img className="matched-image-one" src={selectedLeftCard?.backImage} alt="" />
                <img className="matched-image-two" src={selectedRightCard?.backImage} alt="" />
            </div>
        </div>: null}
    </div>
}


export default GameArea