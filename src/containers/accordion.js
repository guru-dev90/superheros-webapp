import React, {useContext} from 'react';
import { Accordion, Dashboard } from '../components';
import { Infobox } from '../containers';
import { Context } from '../context/Context';


export default function AccordionContainer() {

    const heros = useContext(Context)
    
    return (
        <Accordion>
            <Accordion.Frame>
                <Accordion.Item>
                    <Accordion.Header>Liked</Accordion.Header>

                    <Accordion.Body>
                        <Dashboard>
                            <Dashboard.Frame>
                            {
                                
                                heros.map( item => (
                                    <Infobox data={item}/>
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