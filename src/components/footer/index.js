import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import { 
    Group, 
    Background,  
    Container, 
    InstagramIcon,
    FacebookIcon,
    YoutubeIcon,
    FlagIcon,
    Text
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Footer.Frame = function FooterFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Group = function FooterGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Footer.InstagramIcon = function FooterInstagramIcon({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <InstagramIcon {...restProps} />
        </ReachRouterLink>
    )
}

Footer.FacebookIcon = function FooterFacebookIcon({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <FacebookIcon {...restProps} />
        </ReachRouterLink>
    )
}

Footer.YoutubeIcon = function FooterYoutubeIcon({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <YoutubeIcon {...restProps} />
        </ReachRouterLink>
        
    )
}

Footer.Text = function FooterText(props) {
    return (
        
        <Text {...props} />
        
    )
}

Footer.FlagIcon = function FooterFlagIcon({ src, ...restProps }) {
    return (
        
        <FlagIcon src={src} {...restProps} />
        
    )
}