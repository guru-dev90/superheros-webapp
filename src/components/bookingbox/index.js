import React from 'react';
import { 
    Group, 
    Grid,
    GridColumn,
    GridTitle,
    GridValue,
    Background,  
    Container, 
    Image,
    Title,
    ActivityTime,
    Duration,
    ButtonText
} from './styles/bookingbox';

export default function Bookingbox({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Bookingbox.Frame = function BookingboxFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Bookingbox.Group = function BookingboxGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Bookingbox.Grid = function BookingboxGrid({ children, ...restProps }) {
    return <Grid {...restProps}>{children}</Grid>;
}

Bookingbox.GridColumn = function BookingboxGridColumns({ children, ...restProps }) {
    return <GridColumn {...restProps}>{children}</GridColumn>
}

Bookingbox.GridTitle = function BookingboxGridTitle({ children, ...restProps }) {
    return <GridTitle {...restProps}>{children}</GridTitle>;
}

Bookingbox.GridValue = function BookingboxGridValue({ children, ...restProps }) {
    return <GridValue {...restProps}>{children}</GridValue>;
}

Bookingbox.Image = function BookingboxImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Bookingbox.Title = function BookingboxTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Bookingbox.Duration = function BookingboxDuration({ children, ...restProps }) {
    return <Duration {...restProps}>{children}</Duration>;
}

Bookingbox.ActivityTime = function BookingboxActivityTime({ children, ...restProps }) {
    return <ActivityTime {...restProps}>{children}</ActivityTime>;
}

Bookingbox.ButtonText = function BookingboxButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>;
}
