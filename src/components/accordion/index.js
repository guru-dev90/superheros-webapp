import React, { useState, useContext, createContext } from 'react';
import { Body, Header, Container, Inner, Item, Frame } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src={process.env.PUBLIC_URL + '/images/assets/arrow-up/arrow-up.svg'} alt="Close" />
            ) : (
                <img 
                    src={process.env.PUBLIC_URL + '/images/assets/arrow-up/arrow-up.svg'} 
                    style={{
                        WebKitTransform: 'rotate(180deg)',
                        MozTransform: 'rotate(180deg)',
                        MsTransform: 'rotate(180deg)',
                        OTransform: 'rotate(180deg)',
                        transform: 'rotate(180deg)',
                        transition: '0.3s ease'
                    }}
                    alt="Open" 
                />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}