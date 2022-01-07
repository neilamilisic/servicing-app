import React from "react"
import styled from "styled-components"
import {Marginer} from "../marginer/index.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

const CardContainer = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    width: 280px;
    min-height: 250px;
    background-color: #FFF;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.17);
    margin: 1em;
    font-family: 'Roboto', sans-serif;
    border: 1px solid lightgray;

`
const TopContainer = styled.div`
  width: 100%;
`

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 10.5em;


  img {
    width: 100%;
    height: 100%;
  }
`

const ContextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 15px 14px;
    align-items: flex-start;
`
const BottomContainer=styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgb(15, 15, 15, 0.19);
    padding: 0 10px;
`
const Title = styled.h2`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: #000;
`

const SpecialistName = styled.h4`
    margin: 0;
    color: rgba(151, 151, 151, 0.9);
    font-size: 15px;
    font-weight: 400;
`
const RatingContainer = styled.div`
    display: flex;
    color: #E8E204;
    font-size: 14px;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

const PriceText = styled.div`
   margin-left: 3px;
   color: #2A9D8F;
   font-weight: 800;
   font-size: 14px; 
`

const StartingText = styled.div`
    margin: 0;
    color: rgb(161, 161, 161);
    font-weight: 400;
    font-size: 14px;

`

export function ServiceCard(props){
  const {thumbnailUrl, specialist, title, rate, rating} = props 

    return <CardContainer>
                <TopContainer>
                    <ServiceThumbnail>
                        <img src={thumbnailUrl} alt={title} />
                    </ServiceThumbnail>
                </TopContainer>
                <ContextContainer>
                    <Title>{title}</Title>
                    <Marginer direction= "vertical" margin={10}/>
                    <SpecialistName>{specialist.fullName}</SpecialistName>
                </ContextContainer>
                <BottomContainer>
                    <RatingContainer>
                        <FontAwesomeIcon icon={faStar} size="sm"/>
                        <Marginer direction= "horizontal" margin={10}/>
                        {rating}
                    </RatingContainer>
                    <PriceContainer>
                        <StartingText>STARTING AT</StartingText>
                        <PriceText>
                            ${rate}/hr
                        </PriceText>
                    </PriceContainer>
                </BottomContainer>
           </CardContainer>
}
 