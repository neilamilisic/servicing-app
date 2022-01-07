import styled from "styled-components"
import logoImg from "../../images/logos/logo.png"
import { Link } from "react-router-dom"


const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0px;
`
const LogoImage = styled.div`
    width: ${({size}) => (size ? size + "px" : "2em")};
    height: ${({size}) => (size ? size + "px" : "2em")};

        img {
            width: 100%;
            height: 100%;
        }
`

const LogoTitle = styled.h2`
    margin: 0;
    font-size: ${({ size }) => (size ? size + "px" : "21px")};
    color: #FFF;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin: 0em 0.5em;

    color: ${({ color }) => (color ? color : "#fff")};
`
const StyledLink = styled(Link)`
        text-decoration: none;
`

export function BrandLogo(props){
    const { logoSize, textSize, color, hideLogo } = props;

    return(
        <BrandLogoContainer>
            { !hideLogo && <Link to = "/"><LogoImage size={logoSize}>
                <img src={logoImg} alt="Servycing logo"/>
            </LogoImage> </Link>}
            <StyledLink to = "/">
                <LogoTitle size={textSize} color={color}>
                    Servycing
                </LogoTitle>
            </StyledLink>
        </BrandLogoContainer>
    )
}