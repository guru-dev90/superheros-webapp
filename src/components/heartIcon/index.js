import React from 'react';
import {   
    MainContainer,
    Container, 
    Icon
} from './styles/heartIcon';

export default function HeartIcon({ children, ...restProps }) {
    return <MainContainer {...restProps}>{children}</MainContainer>;
}

HeartIcon.Container = function HeartIconContainer({ children, ...restProps }) {
    return (
        
        <Container {...restProps}>{children}</Container>
        
    )
}

HeartIcon.Icon = function HeartIconIcon({ children, ...restProps }) {
    return (
        
        <Icon {...restProps}>{children}</Icon>
        
    )
}

