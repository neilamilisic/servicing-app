import styled from "styled-components"
import { Button } from "../../components/button" 

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    padding: 0px 10px;
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    width: 100%;
`

export const BoldLink = styled.a`
    font-size: 12px;
    color: #2a9d8f;
    font-weight: 500;
    text-decoration: none;
`
export const Input = styled.input`
    width: 90%;
    height: 42px;
    outline: none;
    border: 1px solid transparent;
    padding: 0px 10px;
    border-bottom: 1.4px solid lightgray;


        &:placeholder {
            color: rgba(200, 200, 200, 1);
        }

        &:focus {
            outline: none;
            border-bottom: 2px solid #2a9d8f;
        }
`
export const SigninButton = styled(Button)`
    padding: 0.5em 2em;
    font-size: 14px;
    width: 100%;
    background: rgb(46,168,153);
    background: linear-gradient(90deg, rgba(46,168,153,1) 20%, rgba(77,89,112,1) 93%);
`