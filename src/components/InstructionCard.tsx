import React from 'react'

interface InstructionCardProps {
    title: string,
    subTitle: string,
    image: string,
    headingText: string | undefined,
    cardNumberIndicatorImage: string
}

const InstructionCard: React.FC<InstructionCardProps> = ({ title, subTitle, image, headingText, cardNumberIndicatorImage}) => {
    const cardStyle: React.CSSProperties = {
        position: "relative",
        backgroundColor: "#ffffff",
        borderRadius: "10%",
        width: "17%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1%"

    }
    
    const topHeadingTextStyle: React.CSSProperties = {
    width: "100%",
    fontSize: ".8vw" ,
    fontWeight: "800",
    color: "#A6C930",
    textAlign: "center",
    margin: 0,
    padding: 0,
    //  backgroundColor: "green",
  };
    const headingTextStyle: React.CSSProperties = {
    width: "12vw",
    fontSize: "1.8vw" ,
    fontWeight: "800",
    color: "#11AEC6",
    textAlign: "center",
    margin: 0,
    padding: 0,
  };
    const subTextStyle: React.CSSProperties = {
    width: "100%",
    fontSize: ".8vw" ,
    fontWeight: "800",
    color: "#A6C930",
    textAlign: "center",
    margin: 0,
    padding: 0,
  };
    const cardNumberStyle: React.CSSProperties = {
        width: "2.5vw",
        position: "absolute",
        left: 0,
        bottom: "30%",
  };
    return <div style={cardStyle}>
            <img src={image} width={"90%"} height={"90%"} alt="" />
            <img src={cardNumberIndicatorImage} style={cardNumberStyle} alt="" />
            <p style={topHeadingTextStyle}>{headingText}</p>
            <p style={headingTextStyle}> {title} </p>
            <p style={subTextStyle}>{subTitle}</p>
        </div>
}

export default InstructionCard