import React from 'react';
import { 
    Background,  
    Container, 
    Title,
    Column
} from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Dashboard.Frame = function DashboardFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Dashboard.Title = function DashboardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Dashboard.Column = function DashboardColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>;
}

