import React, {useState, useEffect, useRef} from "react"
import { Loading } from './components';
import { StateProvider } from "./context/Context"
import { Home } from "./pages"
import _ from "lodash";

export default function App(){

    const [heros, setHeros] = useState([])
    const [likedList, setLikedList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [herosNumber, setHerosNumber] = useState(0)
    const [loading, setLoading] = useState(true);
   
    useEffect( () => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then( response => response.json() )
        .then( data => {
            setHeros(data) 
            setHerosNumber(data.length)
            setLoading(false)
        })
        //<-------------------------------------------------------------------------
    }, [] )

    return(
        <>
            {loading ? <Loading /> : <Loading.ReleaseBody />}
            <StateProvider value={{heros,setHeros,likedList,setLikedList,searchTerm,setSearchTerm,herosNumber}}>
                <Home />
            </StateProvider>
        </>
        
    )
}