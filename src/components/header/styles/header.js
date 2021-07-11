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
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

    @media (min-width: 1024px) {
        justify-content: flex-end;
    }
`

export const HomeIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 40px;

`

export const CalendarIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 40px;

`

export const BellIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 40px;

`

export const ProfilePicture = styled.img`
    height: 32px;
    width: 32px;
    margin-right: 40px;
    border-radius: 50%;

`