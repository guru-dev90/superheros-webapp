import React from "react"
import {
        Header as HeaderContainer, 
        Dashboard as DashboardContainer,
        Accordion as AccordionContainer,
        Titlebanner as TitleBannerContainer
} from "../containers"


export default function Home(){
    return(
       <>
           <HeaderContainer/>
           <AccordionContainer/>
           <TitleBannerContainer/>
           <DashboardContainer/>
       </>
    )
}


