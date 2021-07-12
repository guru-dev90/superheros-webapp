import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
    height: 60px;

`

export const Group = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    width: ${ (width="115px") => width }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

    @media (min-width: 1024px) {
        justify-content: flex-end;
    }
`

export const InstagramIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 20px;

`

export const FacebookIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 20px;

`

export const YoutubeIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 20px;

`

export const FlagIcon = styled.img`
    height: 16px;
    width: 32px;
    margin-right: 5px;
`

export const Text = styled.p`
    font-size: 13px;

`

