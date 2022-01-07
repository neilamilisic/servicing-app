import React from "react"
import styled from "styled-components"
import {BrandLogo} from "../brandLogo/index.js"
import {Button} from "../button/index.js"
import {Marginer} from "../marginer/index.js"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { deviceSize } from "../responsive/index.js"



const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({isMobile}) => isMobile ? "0 0.5em" : "0 1.5em"};
    background-color: ${({useTransparent}) => useTransparent ? "transparent" : "#264653"};
`
const AccessibiltyContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    
`
const AnchorLink = styled.a`
    font-size: ${({isMobile}) => isMobile ? "12px" : "14px"};
    color: lightgray;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    letter-spacing: 0.1px;
    padding: 0em 0.5em;
    
    &:hover {
        filter: contrast(0.6);
    }
    
`
const Separator = styled.div`
    height: 40%;
    width: 1px;
    background-color: lightgray;
`


export function Navbar(props) {
    const {useTransparent} = props
    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile})
    return (
        <NavbarContainer useTransparent={useTransparent} isMobile={isMobile}>
            <BrandLogo textSize={isMobile && 15} logoSize={isMobile && 25}/>
            <AccessibiltyContainer>
                <AnchorLink isMobile={isMobile}>Specialist Portal</AnchorLink>
                <Marginer direction="horizontal" margin={isMobile ? 0.5:10}/>
                <Separator />
                <Marginer direction="horizontal" margin={isMobile ? 10:20}/>
                <Link to="/access-page/register">
                    <Button size={14}> Register </Button>
                </Link>
                <Marginer direction="horizontal" margin={12}/>
                <Link to="/access-page/login">
                    <AnchorLink>Login</AnchorLink>
                </Link>
            </AccessibiltyContainer>
        </NavbarContainer>
    )
}