import React from "react"
import styled from "styled-components"
import {useEffect, useState} from "react"
import axios from "axios";
import {ServiceCard} from "../../components/serviceCard/index.js"
import {Button} from "../../components/button/index.js"
import { deviceSize } from "../../components/responsive/index.js";

const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (max-width: ${deviceSize.mobile}px){
        align-items: center;
    }
    
`
const Title = styled.h1`
    font-weight: 900;
    color: #000;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: ${deviceSize.mobile}px){
        font-size: 25px;
    }
`

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`

const WarningText = styled.h3`
    color: gray;
    font-weight: 500;
`

const ViewMoreButton = styled(Button)`
    background-color: #f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    color: #959595;
    font-size: 12px;

    &:hover {
        background-color: #f2f2f2;
        filter: contrast(0.8);
    }
    `

export function Services(props) {

    const [offeredServices, setOfferedServices] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const isServiceEmpty = !offeredServices || (offeredServices && offeredServices.length === 0)

    const fetchServices = async() => {
        setIsLoading(true)
        const response = await axios.get("http://localhost:9000/services").catch((err) => {
            console.log("Error: ", err)
        })
        if(response) {
            setOfferedServices(response.data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchServices()
    }, [])



    return (
    <ServicesContainer>
         <Title>
            Most used services & More
        </Title>
        <ServicesWrapper>
            {isServiceEmpty && !isLoading &&<WarningText>No services are published yet</WarningText>}
            {isLoading &&<WarningText>Loading...</WarningText>}
            {!isServiceEmpty && !isLoading && offeredServices.map((service) => <ServiceCard key={service.id} {...service}/>)}
        </ServicesWrapper>
        <BottomContainer>
            {!isServiceEmpty && !isLoading && ( <ViewMoreButton> View More </ViewMoreButton>)}
           
        </BottomContainer>
    </ServicesContainer>
    )
    }