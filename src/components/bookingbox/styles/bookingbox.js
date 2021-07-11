import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 2.5rem;
    width: 100%;

`

export const Group = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: ${ ({ width="auto" }) => width };
    padding-left: ${ ({padding="1em"}) => padding };
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const GridTitle = styled.h4`
    margin: 0px;
`

export const GridValue = styled.p`
    margin: 0px;
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 0.5rem;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

    &:last-of-type{
        margin-bottom: 0rem;
    }

`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    min-width: 800px;
`

export const Image = styled.img`
    width: 130px;
    height: 60px;
    
`

export const Title = styled.h5`
    font-size: 0.8rem;
    margin: 0.8rem 0rem;
    color: #053968;
`

export const ActivityTime = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    color: #656060d1;
`

export const Duration = styled.p`
    font-size: 0.8rem;
    color: #656060d1;
`

export const ButtonCancel = styled.button`
    font-size: 0.8rem;
    margin: 0px;
    background-color: white;
    border: 1px solid #fc922a;
    display: inline-block;
    cursor: pointer;
    color: #053968;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 85%;
`

export const ButtonSubscribe = styled.button`
    font-size: 0.8rem;
    margin: 0px;
    border: 1px solid lightgrey;
    background-color: #d4df64;
    display: inline-block;
    cursor: pointer;
    color: #053968;
    font-size: 12px;
    font-weight: 700;
    padding: 8px 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 85%;
`

export const ButtonOnHold = styled.button`
    font-size: 0.8rem;
    margin: 0px;
    background-color: white;
    border: 1px solid #053968;
    display: inline-block;
    cursor: pointer;
    color: #053968;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 85%;
`

export const ButtonActivityNotOpen = styled.button`
    font-size: 0.8rem;
    margin: 0px;
    background-color: #80808054;
    border: 1px solid lightgray;
    display: inline-block;
    cursor: pointer;
    color: #92929291;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
    width: 85%;
`

