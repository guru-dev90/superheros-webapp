import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.7rem;

`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 967px;
    height: inherit;
    margin: 0.5em;

    @media (max-width: 1024px) {
        width: 250px;
    }
`

export const Title = styled.h5`
    color: #053968;
    font-weight: 700;
`

export const ReadMore = styled.h5`
    color: #fc922a;
`