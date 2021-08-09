import React, {useContext,useEffect, useState} from "react"
import { AutoSizer, List } from 'react-virtualized';

import { Context } from '../context/Context'

import { Dashboard } from "../components"
import { Infobox } from "../containers"
import MediumHeartIcon from '../icons/medium-heart/medium-heart.svg'
import Fuse from 'fuse.js'
import _ from "lodash";
import styled from "styled-components";


const ITEMS_COUNT = 20
const ITEM_SIZE = 200

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

    let results =  heros.map( item => (
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
        )
    )
    
    return(
        
                <AutoSizer>
                    {({ height, width }) => {
                    const itemsPerRow = Math.floor(width / ITEM_SIZE);
                    const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);
                    
                    return (
                        <List
                            scrollToAlignment='start'
                            width={width}
                            height={height}
                            rowCount={rowCount}
                            rowHeight={ITEM_SIZE}
                            rowRenderer={
                                ({ index, key, style }) => {
                                const items = [];
                                const fromIndex = index * itemsPerRow;
                                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);

                                for (let i = fromIndex; i < toIndex; i++) {
                                    items.push(results[i])
                                }

                                return (
                                    <div
                                    className="row"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxSizing: 'border-box',
                                        ...style
                                    }}
                                    key={key}
                                    >
                                    {items}
                                    </div>
                                )
                            }}
                        />
                    )
                    }}
                </AutoSizer> 
                      
    )
}