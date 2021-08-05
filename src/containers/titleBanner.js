import React,{ useContext } from "react"
import { TitleBanner } from "../components"

import { Context } from '../context/Context';

export default function TitleBannerContainer({data}){

    const {searchTerm,setSearchTerm} = useContext(Context)

    return(
        <TitleBanner>
            <TitleBanner.Frame>
                <TitleBanner.Title>All Superheroes</TitleBanner.Title>
                
                <TitleBanner.InputBox
                    placeholder="Search"
                    value={searchTerm}
                    onChange={({ target }) => setSearchTerm(target.value)}
                />
            </TitleBanner.Frame>
        </TitleBanner>
    )
}