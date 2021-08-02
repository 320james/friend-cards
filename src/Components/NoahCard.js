import React from 'react';
import noah from '../Images/noah.jpg';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const NoahCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 100 } }));
    return (
        <CardStyled
            onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >

            <div className="left-content">
                <ImageStyled src={noah} alt="" />
            </div>

            <div className="right-content">
                <h2>Noah D.</h2>
                <h3>Psychology @ JMU | Class of 2023</h3>
                <p><strong>Description:</strong> Has ultimate compassion for all animals and living things.</p>
                <p><strong>Special Ability:</strong> Knows all the recent hit songs and can talk to dogs.</p>
                <p><strong>Weakeness:</strong> Poor recovery in awkward situations.</p>
            </div>

        </CardStyled>
    );
}

const CardStyled = styled(animated.div)`

    display: grid;
    grid-template-columns: 200px 400px;
    grid-auto-rows: 17rem;
    grid-gap: 2rem;

    padding: 2rem;
    background: rgba(58, 15, 98, 0.5);
    border-radius: 15px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 5px solid rgba(244, 186, 75, 0.9);
    background-clip: border-box;
    cursor: pointer;
    margin: 2rem 0;

    @media screen and (max-width: 770px) {
        grid-template-columns: 280px;
        grid-auto-rows: 12rem;
        grid-gap: 1.3rem;
    }

    .left-content {
        display: grid;
        align-items: center;
        justify-items: center;

    }

    .right-content {
        /* this will make its children flex-items */
        display: inline-flex;
        /* align-items items in column */
        flex-direction: column;
        /* center items vertically */
        justify-content: center;

        @media screen and (max-width: 770px) {
            h2, h3 {
                text-align: center;
            }
        }
    }

    h2 {
        line-height: 1.5;           
        letter-spacing: 1.15;
    }

    h3 {
        line-height: 1.5;           
        letter-spacing: 1.15;
        font-size: 20px;
    }
    
    p {
        padding-top: 5px;
    }
    

`

const ImageStyled = styled.img`
    width: 200px;
    height: auto;
    border: 5px solid rgba(244, 186, 75, 0.9);
    border-radius: 50%;

`

export default NoahCard;