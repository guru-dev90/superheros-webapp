import React, {useContext} from 'react';
import { Accordion, Dashboard, HeartIcon } from '../components';
import { Infobox } from '../containers';
import { Context } from '../context/Context';
import MediumHeartIcon from '../icons/medium-heart/medium-heart.svg';
import MediumFilledHeartIcon from '../icons/medium-filled-heart/medium-filled-heart.svg';

import _ from "lodash";


export default function AccordionContainer() {

    const {heros,setHeros,likedList,setLikedList} = useContext(Context)

    return (
        <Accordion>
            <Accordion.Frame>
                <Accordion.Item>
                    <Accordion.Header>
                        <HeartIcon>
                            <HeartIcon.Container>
                                <HeartIcon.Icon active={false} src={MediumHeartIcon}/>
                            </HeartIcon.Container>
                            <h4 style={{
                                fontWeight: '700',
                                letterSpacing: '2px',
                                fontSize: '1.2em',
                                margin: '0 0 0 0.3em'
                            }}>
                                Liked
                            </h4>
                        </HeartIcon>
                        
                    </Accordion.Header>

                    <Accordion.Body>
                        <Dashboard>
                            <Dashboard.Frame>
                            {
                                
                                likedList.map( item => (
                                    <Infobox 
                                        key={item.id}
                                        onClick={ () => {
                                            
                                            const likedListResult = likedList.filter( elem => elem !== item );
                                            let herosCopy = _.cloneDeep(heros);
                                            herosCopy.push(item)
                                            setLikedList(likedListResult) 
                                            setHeros(herosCopy)
                                        }} 
                                        iconType={MediumFilledHeartIcon} 
                                        data={item}
                                    />
                                ))
                                    
                            }    
                            </Dashboard.Frame>
                        </Dashboard>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion.Frame>
        </Accordion>
    );
}