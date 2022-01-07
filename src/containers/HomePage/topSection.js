import React from "react"
import styled from "styled-components"
import TopSectionImg from "../../images/landing-page.jpg"
import StandOutImg from "../../images/Work only with the best.png"
import {BrandLogo} from "../../components/brandLogo/index.js"
import {Button} from "../../components/button/index.js"
import {Marginer} from "../../components/marginer/index.js"
import { useMediaQuery } from "react-responsive"
import { deviceSize } from "../../components/responsive"

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background: url(${TopSectionImg}) no-repeat;
  background-position: 0px -150px;
  background-size: cover;
  @media screen and (max-width: 1200px){
    background-position: center;
    height: 700px;
    
}
  `

const BackgroundFilter = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(38,70,83,0.9);
    display: flex;
    flex-direction: column;

`
const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const TheStandOutImage = styled.div`
    height: 30em;
    width: 40em;

    img {
        width: 100%;
        height: 100%;
    }
`


const LogoContainer = styled.div`
    display: flex;
    align-item: flex-start;
    flex-direction: column;
`

const SloganText = styled.h3`
    margin: 0px;
    line-height: 1.4;
    color: rgb(200,200,200);
    font-weight: 300;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    
    @media screen and (max-width: ${deviceSize.mobile}px){
        font-size: 22px;
    }
`
export function TopSection(props){
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    const {children} = props
    return (<TopSectionContainer>
                <BackgroundFilter>
                    {children}
                    <TopSectionInnerContainer>
                        <LogoContainer>
                            <BrandLogo logoSize={isMobile ? 30:50} textSize={isMobile ? 30:35}/>
                            <Marginer direction= "vertical" margin= {15}/>
                            <SloganText>
                                Find the right specialist
                            </SloganText>
                            <SloganText>
                                For the right job
                            </SloganText>
                            <Marginer direction="vertical" margin={20}/>
                            <Button>Join now</Button>
                        </LogoContainer>
                        {!isMobile && <TheStandOutImage>
                        <img src={StandOutImg} alt="StandOutImage"></img>
                        </TheStandOutImage>}
                    </TopSectionInnerContainer>
                </BackgroundFilter>
            </TopSectionContainer>)
}