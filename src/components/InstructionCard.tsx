import React from 'react'

interface InstructionCardProps {
    title: string,
    subTitle: string,
    image: string,
    headingText: string | undefined,
    cardNumberIndicatorImage: string
}

const InstructionCard: React.FC<InstructionCardProps> = ({ title, subTitle, image, headingText, cardNumberIndicatorImage}) => {
    return <div className='instructionCard'>
            <img src={image} width={"90%"} height={"90%"} alt="" loading="lazy"/>
            <img src={cardNumberIndicatorImage} className='instruction-card-number' alt="" loading="lazy"/>
            <p className='instruction-card-top-heading-text'>{headingText}</p>
            <p className='instruction-card-heading-text'> {title} </p>
            <p className='instruction-card-sub-text'>{subTitle}</p>
        </div>
}

export default InstructionCard