import React, {useState, useEffect} from "react"

import { StateProvider } from "./context/Context"
import { Home } from "./pages"

export default function App(){

    const [heros, setHeros] = useState([])
   
    useEffect( () => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then( response => response.json() )
        .then( data => setHeros(data) )
        //<-------------------------------------------------------------------------
    }, [] )

    return(
        
        <StateProvider value={heros}>
            <Home />
        </StateProvider>
        
    )
}