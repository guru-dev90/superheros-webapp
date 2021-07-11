
import React from 'react';
import { 
    Background,  
    Container, 
    OuterContainer
} from './styles/selectcontainer';

export default function SelectContainer({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

SelectContainer.OuterFrame = function SelectContainerOuterFrame({ children, ...restProps }) {
    return <OuterContainer {...restProps}>{children}</OuterContainer>;
}

SelectContainer.Frame = function SelectContainerFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
