import React from "react"
import {PageContainer, InnerPageContainer} from "../../components/pageContainer/index.js"
import {TopSection} from "./topSection.js"
import {Navbar} from "../../components/navbar/index.js"
import styled from "styled-components"
import {deviceSize} from "../../components/responsive/index.js"
import {Services} from "./services.js"
import {SpecialistAd} from "../../components/specialistAd/index.js"
import {Marginer} from "../../components/marginer/index.js"
import {Footer} from "../../components/footer/index.js"


const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export function HomePage(props){
    return (
     <PageContainer>
             <TopSection>
                <Navbar useTransparent="transparent"/>
             </TopSection>
             <InnerPageContainer>
                <ContentContainer>
                    <Services />
                </ContentContainer>
             </InnerPageContainer>
             <Marginer direction="vertical" margin={40}/>
             <SpecialistAd/>
             <Footer />
     </PageContainer>
     )
}