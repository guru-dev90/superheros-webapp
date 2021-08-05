import React, {useContext,useEffect, useState} from "react"

import { Context } from '../context/Context'

import { Dashboard } from "../components"
import { Infobox } from "../containers"
import MediumHeartIcon from '../icons/medium-heart/medium-heart.svg'
import Fuse from 'fuse.js'
import _ from "lodash";

export default function DashboardContainer(){

    const {heros, setHeros, likedList, setLikedList, searchTerm, herosNumber} = useContext(Context)
    const [herosCopy, setHerosCopy] = useState([])
    
    useEffect(() => {
        if ( heros.length + likedList.length === herosNumber){
            setHerosCopy(heros)
        }
    }, [searchTerm])

    useEffect(() => {
        const fuse = new Fuse(heros, { keys: ['name', 'biography.fullName'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
        
        if (heros.length > 0 && results.length > 0) {
            setHeros(results)
        } else if ( searchTerm.length === 0 ) {
            setHeros(herosCopy)
        }
        else{
            setHeros(herosCopy)
        }
    }, [searchTerm])
    
    return(
        <Dashboard>
            <Dashboard.Frame>
            {
                heros.map( item => (
                    <Infobox 
                        key={item.id}
                        onClick={ () => {
                            
                            let likedListCopy = _.cloneDeep(likedList);
                            likedListCopy.push(item)
                            const herosResult = heros.filter( elem => elem !== item );
                            setLikedList(likedListCopy) 
                            setHeros(herosResult)

                        }} 
                        iconType={MediumHeartIcon} 
                        data={item}
                    />
                ))
            }    
            </Dashboard.Frame>
        </Dashboard>
    )
}