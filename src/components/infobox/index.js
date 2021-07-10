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
    Date,
    ActivityTime,
    Duration,
    Club,
    Sala,
    WaitingBeforeMe,
    ButtonText
} from './styles/infobox';

export default function Infobox({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Infobox.Frame = function InfoboxFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Infobox.Group = function InfoboxGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Infobox.Grid = function InfoboxGrid({ children, ...restProps }) {
    return <Grid {...restProps}>{children}</Grid>;
}

Infobox.GridColumn = function InfoboxGridColumns({ children, ...restProps }) {
    return <GridColumn {...restProps}>{children}</GridColumn>
}

Infobox.GridTitle = function InfoboxGridTitle({ children, ...restProps }) {
    return <GridTitle {...restProps}>{children}</GridTitle>;
}

Infobox.GridValue = function InfoboxGridValue({ children, ...restProps }) {
    return <GridValue {...restProps}>{children}</GridValue>;
}

Infobox.Image = function InfoboxImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

Infobox.Title = function InfoboxTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Infobox.Date = function InfoboxDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>;
}

Infobox.ActivityTime = function InfoboxActivityTime({ children, ...restProps }) {
    return <ActivityTime {...restProps}>{children}</ActivityTime>;
}

Infobox.Duration = function InfoboxDuration({ children, ...restProps }) {
    return <Duration {...restProps}>{children}</Duration>;
}

Infobox.Club = function InfoboxClub({ children, ...restProps }) {
    return <Club {...restProps}>{children}</Club>;
}

Infobox.Sala = function InfoboxSala({ children, ...restProps }) {
    return <Sala {...restProps}>{children}</Sala>;
}

Infobox.WaitingBeforeMe = function InfoboxWaitingBeforeMe({ children, ...restProps }) {
    return <WaitingBeforeMe {...restProps}>{children}</WaitingBeforeMe>;
}

Infobox.ButtonText = function InfoboxButtonText({ children, ...restProps }) {
    return <ButtonText {...restProps}>{children}</ButtonText>;
}
