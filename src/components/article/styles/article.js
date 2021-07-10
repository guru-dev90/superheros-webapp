import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 300px;
    width: 100%;
    margin-bottom: 4rem;

`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 270px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding-bottom: 2rem;
`

export const Subgroup = styled.div`
    margin: 1rem 2.1rem 1rem 1rem;
    height: 135px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 967px;
    height: inherit;
`

export const HeaderTitle = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #053968;
`

export const HeaderReadMore = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #fc922a;
`

export const Image = styled.img`
    width: 230px;
    height: 135px;
    
`

export const Title = styled.p`
    font-size: 0.7rem;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #fc922a;
    font-weight: 600;
`

export const Date = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    color: #656060d1;
`

export const DescriptionContainer = styled.div`
    width: 100%;
    margin-bottom: 15px;
`

export const Description = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    
`


