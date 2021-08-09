import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    background-image: url( ${ props => props.background} );


    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    display: flex;
    height: 165px;
    width: 280px;
    margin: 0 0.5em;
    border-radius: 10px;

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgb(103 90 90 / 72%);
    }

`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`

export const Image = styled.img`
    
    margin: 0.5em;
    border-radius: 5px;
    max-height: 150px;
`

export const Title = styled.h5`
    position: relative;
    font-size: 1em;
    margin: 0.8rem 0rem;
    color: white;

`

export const Text = styled.h6`
    position: relative;
    font-size: 0.9em;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
    color: #d3d9e8e3;

`

export const Icon = styled.img`
    position: relative;
    font-size: 0.9rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
    color: #797a7dc2;


`