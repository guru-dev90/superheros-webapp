import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    background-color: white;
    height: 90px;
    width: 400px;
    margin-top: 0.7rem;

`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
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
    flex-direction: column;
    width: 33%;
    height: 100%;
`

export const Image = styled.img`
    width: 90px;
    height: 90px;
    
`

export const Title = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const ActivityTime = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const Duration = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const ButtonText = styled.button`
    font-size: 0.8rem;
    margin: 0px;
`

