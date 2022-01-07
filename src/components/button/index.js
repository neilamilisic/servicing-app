import React from "react"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { deviceSize } from "../responsive"

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    color: #fff;
    padding: 0.5em 1.7em;
    font-size: ${({size}) => size ?  size + "px" : "18px"};
    font-weight: 600;
    border-radius: 3px;
    background-color: #2a9d8f;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    letter-spacing: 0.8px;
    font-family: 'Roboto', sans-serif;

        &:hover {
            background-color: #248b7f;

        &:focus {
            outline: none;
        }
`

export function Button(props){
   const {size} = props
   const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    return(<ButtonWrapper size={isMobile ? 13:size} className={props.className}>{props.children}</ButtonWrapper>)
}