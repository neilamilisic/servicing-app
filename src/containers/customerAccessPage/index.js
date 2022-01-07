import React, {useState} from "react"
import {Navbar} from "../../components/navbar/index.js"
import {Footer} from "../../components/footer/index.js"
import {InnerPageContainer} from "../../components/pageContainer/index.js"
import styled from "styled-components"
import {LoginForm} from "./loginForm.js"
import { motion } from "framer-motion"
import {SignupForm} from "./signupForm.js"
import { AccountContext } from "./accountContext.js"
import { Marginer } from "../../components/marginer/index.js"
import { useParams } from "react-router-dom"
import { useEffect } from "react"


const AccessPageContainer = styled.div`
    width: 260px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-right: -30px;
    padding: 30px;
    padding-top: 50px;
`
const HeaderText = styled.h2`
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    line-height: 1.24;
    color: #fff;
    margin: 0;
    letter-spacing: 0.8px;
    
`
const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    font-family: "Roboto", sans-serif;
    margin-top: 7px;
`

const TopContainer = styled.div`
   width: 100%;
   height: 250px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;
   padding: 0 1.8em;
   padding-bottom: 5em;
`

const BackDrop = styled(motion.div)`
    width: 200%;
    transform: rotate(-10deg);
    height: 550px;
    postion: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(46,168,153);
    background: linear-gradient(90deg, rgba(46,168,153,1) 20%, rgba(77,89,112,1) 93%);
    margin-top: -50px;
    margin-right: -80px;
`

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const backdropVariants = {
    expanded: {
        width: "200%",
        height: "1000px",
        borderRadius: "20%",
        transform: "rotate(0deg)",
        marginBottom: "-400px"
        
    },
    collapsed: {
        width: "200%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(-10deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    striffnes: 30,
}

export function CustomerAccessPage(props) {

const [isExpanded, setExpanded] = useState(false)
const {action} = useParams()
const [active, setActive] = useState()

useEffect( () => {
    action === "register" && setActive("signup")
    action === "login" && setActive("signin")
}, [action])



const playExpandingAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
        setExpanded(false)
    }, expandingTransition.duration*1000-1500)
}

const switchToSignIn = () => {
    playExpandingAnimation()
    setTimeout(()=>{
        setActive("signin")
    }, 700)
}

const switchToSignUp = () => {
    playExpandingAnimation()
    setTimeout(()=>{
        setActive("signup")
    }, 700)
}

const contextValues = {switchToSignIn, switchToSignUp}

    return(
        <AccountContext.Provider value={contextValues}>
            <InnerPageContainer>
                <Navbar />
                <Marginer direction="vertical" margin={30}/>
                <AccessPageContainer>
                    <TopContainer>
                        <BackDrop initial={false} 
                        animate={isExpanded ? "expanded" : "collapsed"} 
                        variants={backdropVariants}
                        transition={expandingTransition}
                        />
                        <HeaderContainer>
                            {active==="signin" && 
                                    <div>
                                        <HeaderText>Welcome</HeaderText> 
                                        <HeaderText>Back </HeaderText> 
                                        <SmallText>Please sign in to continue!</SmallText>
                                    </div>
                            }
                            {active==="signup" && 
                                <div>
                                    <HeaderText>Create</HeaderText> 
                                    <HeaderText>Account </HeaderText> 
                                    <SmallText>Please sign up to continue!</SmallText>
                                </div>
                            }
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        {active==="signin" && <LoginForm />}
                        {active==="signup" && <SignupForm />}
                    </InnerContainer>
                </AccessPageContainer>
                <Marginer direction="vertical" margin={30}/>
                <Footer />
            </InnerPageContainer>
        </AccountContext.Provider>
    )
}