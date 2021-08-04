import React, {useContext} from "react"

import { Context } from '../context/Context';

import { Dashboard } from "../components"
import { Infobox } from "../containers"

export default function DashboardContainer(){

    const heros = useContext(Context)
    
    return(
        <Dashboard>
            <Dashboard.Frame>
            {
                heros.map( item => (
                    <Infobox data={item}/>
                ))
            }    
            </Dashboard.Frame>
        </Dashboard>
    )
}