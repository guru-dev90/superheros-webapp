import React from "react"
import { Titlebanner } from "."
import { TitleBanner } from "../components"

export default function TitleBannerContainer({data}){
    return(
        <TitleBanner>
            <TitleBanner.Frame>
                <TitleBanner.Title>All Superheroes</TitleBanner.Title>
                
                <TitleBanner.InputBox
                    placeholder="Search"
                />
            </TitleBanner.Frame>
        </TitleBanner>
    )
}