import React from 'react';
import {  
    Background,  
    Container, 
    Logo,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        
        <Logo {...restProps} />
        
    )
}

