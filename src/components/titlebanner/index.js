
import React from 'react';
import { 
    Background,  
    Container, 
    Title,
    InputBox,
} from './styles/titlebanner';

export default function TitleBanner({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

TitleBanner.Frame = function TitleBannerFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

TitleBanner.Title = function TitleBannerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

TitleBanner.InputBox = function TitleBannerInputBox({ children, ...restProps }) {
    return <InputBox {...restProps}>{children}</InputBox>;
}
