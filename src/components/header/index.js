import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { 
    Group, 
    Background,  
    Container, 
    HomeIcon,
    CalendarIcon,
    BellIcon,
    ProfilePicture
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Home = function HeaderHome({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <HomeIcon {...restProps} />
        </ReachRouterLink>
    )
}

Header.Bookings = function HeaderBookings({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <CalendarIcon {...restProps} />
        </ReachRouterLink>
    )
}

Header.Notification = function HeaderNotification({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <BellIcon {...restProps} />
        </ReachRouterLink>
    )
}

Header.ProfilePicture = function HeaderProfilePicture({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <ProfilePicture {...restProps} />
        </ReachRouterLink>
    )
}