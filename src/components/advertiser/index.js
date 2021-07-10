import React from 'react';
import { 
    Group, 
    Background,  
    Container, 
    Title,
    Button,
    GroupContainer
} from './styles/advertiser';

export default function Advertiser({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Advertiser.Frame = function AdvertiserFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Advertiser.GroupContainer = function AdvertiserGroupContainer({ children, ...restProps }) {
    return <GroupContainer {...restProps}>{children}</GroupContainer>;
}

Advertiser.Group = function AdvertiserGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Advertiser.Title = function AdvertiserTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Advertiser.Button = function AdvertiserButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
}