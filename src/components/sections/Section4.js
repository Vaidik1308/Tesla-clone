import React from 'react'
import styled from 'styled-components';
import img4 from '../images/model-y.jpg'
import svg from '../images/down-arrow.svg';
import Fade from 'react-reveal/Fade';


function Section4({title,description,leftBtnText,rightBtnText}) {

  return (
    <Wrap >
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
         
        <Buttons>
        <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>

                    { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <DownArrow src={svg} />
        </Buttons>
    </Wrap>
  )
}

export default Section4

const Wrap = styled.div
    `
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-image: url(${img4}) ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;  //vertical alignment
        align-item: center;  //horizontal alignment
    `;

    const ItemText = styled.div
    `
        padding-top:15vh;
        text-align: center;
    `;

    const ButtonGroup = styled.div
    `
        display: flex;
        margin-bottom: 30px;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px){
            flex-direction: column
        }

    `;

    const LeftButton = styled.div
    `
        background-color: rgba(23,26,32,0.8);
        height: 40px;
        width: 256px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        opacity: 0.85;
        text-transform: uppercase;
        font-size: 12px;
        cursor: pointer;
        margin: 8px;
    `;


    const RightButton = styled(LeftButton)`
        background-color: white;
        opacity: 0.65;
        color: black;
    `;
    // const RightButton = styled.div
    // `
    //     background-color: rgba(23,26,32,0.8);
    //     height: 40px;
    //     width: 256px;
    //     color: white;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     border-radius: 100px;
    //     opacity: 0.85;
    //     text-transform: uppercase;
    //     font-size: 12px;
    //     cursor: pointer;
    // `;

    const DownArrow = styled.img`
        overflow-x:hidden;
        height:40px;
        animation: animateDown infinite 1.5s;

    `
    const Buttons = styled.div`

    `