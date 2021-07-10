import React from 'react';
import { Accordion, Titlebanner } from '../components';
import faqsData from '../fixtures/faqs.json'

export default function AnnouncementsContainer() {
    return (
        <>
            <Titlebanner>
                <Titlebanner.Frame>
                    <Titlebanner.Title>AVVISI</Titlebanner.Title>
                    <Titlebanner.ReadMore>Mostra tutti</Titlebanner.ReadMore>
                </Titlebanner.Frame>
            </Titlebanner>
            <Accordion>
                <Accordion.Frame>
                    {faqsData.map((item, index) => (
                        index < 2 
                        ?
                            <Accordion.Item key={item.id}>
                                <Accordion.Header>{item.title}</Accordion.Header>

                                <Accordion.Body>{item.description}</Accordion.Body>
                            </Accordion.Item>
                        :
                            null
                    ))}
                </Accordion.Frame>
            </Accordion>
        </>
    );
}