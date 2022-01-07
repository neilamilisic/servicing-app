import React from "react"
import styled from "styled-components"
import {Button} from "../button/index.js"
import {BrandLogo} from "../brandLogo/index.js"
import StandOutImg from "../../images/farming.png"
import {Marginer} from "../marginer/index.js"
import { useMediaQuery } from "react-responsive"
import { deviceSize } from "../responsive/index.js"

const AdContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #264653;
    padding: 2em 0em;

    @media screen and (max-width: ${deviceSize.mobile}px){
        flex-direction: column;
    }
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: ${deviceSize.mobile}px){
        margin-bottom: 1em;
    }
`
const TheStandOutImage = styled.div`
    height: 30em;
    width: 40em;

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: ${deviceSize.mobile}px){
        height: 17em;
        width: 25em;
    }
`     
const SpecialistText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 23px;
    align-text: left;
    margin-top: 10px;
    color: #fff;
`
export function SpecialistAd(props){
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    return(
        <AdContainer>
            <LogoContainer>
                <BrandLogo logoSize={isMobile ? 35:50} textSize={isMobile ? 30:35} />
                    <Marginer direction="vertical" margin={20}/>
                    <SpecialistText>
                        You're a Specialist, and you
                    </SpecialistText>
                    <SpecialistText>
                        have an outstanding
                    </SpecialistText>
                    <SpecialistText>
                        Service to offer?
                 </SpecialistText>
                 <Marginer direction="vertical" margin={30}/>
                <Button >
                    Join as Specialist
                </Button>
            </LogoContainer>
            <TheStandOutImage>
                <img src={StandOutImg} alt="#"/>
            </TheStandOutImage>
        </AdContainer>
    )
}