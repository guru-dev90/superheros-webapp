import styled from 'styled-components';
import img from '../../../icons/search/search.svg';
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
    width: 92vw;
    height: inherit;
    margin: 0.5em;

    @media (max-width: 1024px) {
        width: 250px;
    }
`

export const Title = styled.h4`
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
`

export const InputBox = styled.input`
    background: url(${img}) no-repeat scroll 7px 5px #403b3b;
    background-size: 18px 18px;
    padding-left:30px;
    width: 250px;
    height: 25px;
    border-radius: 25px;
    margin-top: 12px;
    border: none;
    color: white;
    outline: none;
`
