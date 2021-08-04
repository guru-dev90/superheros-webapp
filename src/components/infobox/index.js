import React from 'react';
import {  
    Background,  
    Container, 
    Image,
    Title,
    Text,
    Icon
} from './styles/infobox';

export default function Infobox({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Infobox.Frame = function InfoboxFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Infobox.Image = function InfoboxImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Infobox.Title = function InfoboxTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Infobox.Text = function InfoboxText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Infobox.Icon = function InfoboxIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>;
}




