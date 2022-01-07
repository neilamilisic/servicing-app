import React from "react"
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink } from "./common"
import { Marginer } from "../../components/marginer"
import { SigninButton } from "./common.js"
import { AccountContext } from "./accountContext"
import { useContext } from "react"


export function SignupForm(props){
    const {switchToSignIn} = useContext(AccountContext)
 return (
     <BoxContainer>
         <FormContainer>
            <Input type="text" placeholder="Full Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
        </FormContainer>
            <Marginer direction="vertical" margin={20}/>
            <SigninButton type="submit">Sign up</SigninButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">Already have an account?
                <BoldLink href="#" onClick={switchToSignIn}> Signin</BoldLink>
            </MutedLink>
     </BoxContainer>
 )   
}