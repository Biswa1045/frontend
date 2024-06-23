import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'

import Typewriter from 'typewriter-effect';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {""}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: "",
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{"It is a established fact that a reader will be distracted by the content of a page when looking at this layout."}</SubTitle>
                        <ResumeButton href={""} target='display'>Meet a Doctor</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={""} alt="biswajit-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection