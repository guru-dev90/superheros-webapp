import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    background-color: red;
    height: 125px;
    width: 18.5%;
    margin: 0.3em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: 300px;
        width: 250px;
    }

`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (max-width: 1024px) {
        width: 100%;
    }

`

export const Image = styled.img`
    margin: 0.5em;
    border-radius: 5px;
    max-height: 110px;
`

export const Title = styled.h5`
    font-size: 0.8rem;
    margin: 0.8rem 0rem;
    color: white;

    @media (max-width: 1024px) {
        margin-left: 0.8rem;
    }
`

export const Text = styled.h6`
    font-size: 0.7rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
    color: #797a7dc2;

    @media (max-width: 1024px) {
        margin-left: 0.8rem;
    }
`

export const Icon = styled.img`
    font-size: 0.7rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
    color: #797a7dc2;

    @media (max-width: 1024px) {
        margin-left: 0.8rem;
    }
`