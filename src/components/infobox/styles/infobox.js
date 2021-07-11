import styled from 'styled-components';
//import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    display: flex;
    background-color: white;
    height: 135px;
    width: 420px;
    margin-top: 0.7rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: 300px;
        width: 250px;
    }

`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${ ({margin}) => margin };
`

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const GridTitle = styled.h4`
    color: #656060d1;
    font-size: 0.8rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
`

export const GridValue = styled.p`
    margin: 0px;
    font-size: 0.8rem;
    font-weight: 600;
`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: ${ ({size}) => size };
    height: 100%;

`

export const Image = styled.img`
    width: 135px;
    height: 135px;
    
`

export const Title = styled.h5`
    font-size: 0.8rem;
    margin: 0.8rem 0rem;
    color: #053968;
`

export const Date = styled.h5`
    font-size: 0.8rem;
    margin-top: 0rem;
    margin-bottom: 0.3rem;
    color: #053968;
`

export const ActivityTime = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const Duration = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    color: #656060d1;
`

export const Club = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const Sala = styled.p`
    font-size: 0.8rem;
    margin: 0px;
`

export const WaitingBeforeMe = styled.p`
    font-size: 0.8rem;
    margin: 0px;
    color: #fc922a;
`

export const ButtonText = styled.button`
    font-size: 0.8rem;
    margin: 0px;

	background-color: white;
	border:1px solid #fc922a;
	display:inline-block;
	cursor:pointer;
	color:#053968;
	font-size:12px;
	font-weight:bold;
	padding:6px 8px;
	text-decoration:none;
    width: 85%;
}
`

