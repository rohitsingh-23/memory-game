import React from 'react';
import PickCardImage from  "../assets/pick-card-image.svg"
import SelectCardImage from  "../assets/select-card-image.svg"
import MatchCardImage from  "../assets/match-card-image.svg"
import CardOneIndicator from  "../assets/card-one-indicator.svg"
import CardTwoIndicator from  "../assets/card-two-indicator.svg"
import CardThreeIndicator from  "../assets/card-three-indicator.svg"
import InstructionCard from './InstructionCard';

const InstructoinsCard: React.FC = () => { 

    const cardsData = [{
        title: 'Select a pink card.',
        subTitle: 'It has images.',
        image: PickCardImage,
        cardNumberIndicatorImage: CardOneIndicator
    },
        {
        title: 'Select a blue card.',
        subTitle: 'It has alphabets.',
        image: SelectCardImage,
        cardNumberIndicatorImage: CardTwoIndicator
    }, {
        headinText: "If they’re same",
        title: 'Its a match !',
        subTitle: 'otherwise retry :(',
        image: MatchCardImage,
        cardNumberIndicatorImage: CardThreeIndicator
    }]
    
    const containerStyle: React.CSSProperties = {
        gap: "10%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        transform: `translate(${0}px, -50%)`,
        width: "100%"
        
    }

    return <div style={containerStyle}>
        {cardsData.map((item) => {
            return <InstructionCard title={item.title} subTitle={item.subTitle} image={item.image} headingText={item.headinText} cardNumberIndicatorImage={ item.cardNumberIndicatorImage} />
            
        })}
    </div>
}

export default InstructoinsCard