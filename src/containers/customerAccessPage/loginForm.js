import React from "react"
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink } from "./common"
import { Marginer } from "../../components/marginer"
import { SigninButton } from "./common.js"
import { AccountContext } from "./accountContext"
import { useContext } from "react"



export function LoginForm(props){
    const {switchToSignUp} = useContext(AccountContext)
 return (
     <BoxContainer>
         <FormContainer>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#">Forgot your Password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
            <SigninButton type="submit">Sign in</SigninButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">Don't have an account?
                <BoldLink href="#" onClick={switchToSignUp}> Signup</BoldLink>
            </MutedLink>
     </BoxContainer>
 )   
}