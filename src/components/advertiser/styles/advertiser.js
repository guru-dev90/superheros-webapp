import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        display: none
    }
`

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 40%;
    height: 141px;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 80%;
    margin-left: 5rem;
`

export const Container = styled.div`
    background: url(${`${process.env.PUBLIC_URL}/images/training-advertiser/banner.jpg`});
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    width: 967px;
    height: 141px;
`

export const Title = styled.h5`
    color: ${ ({color}) => color };
`

export const Button = styled.button`
    font-size: 0.8rem;
    margin: 0px;
    border:1px solid lightgray;
    background-color: #d4df64;
    display:inline-block;
    cursor:pointer;
    color:#053968;
    font-size:12px;
    font-weight:700;
    padding:8px 8px;
    text-decoration:none;
    width: 8rem;
`

