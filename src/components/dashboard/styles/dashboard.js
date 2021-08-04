import styled from 'styled-components';

export const Background = styled.section`

    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        
        font-size: 16px;
        line-height: 22px;
        padding-top: 1rem;
        height: auto;
        background-color: #53968;
    }

`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    max-width: 95%;
    margin-left: 2em;

`

export const Title = styled.h4`
    margin-top: 15px;
    margin-bottom: 15px;
    color: ${ ({ color }) => color };
    font-weight: 600;

    @media (max-width: 1024px) {
        margin-top: 30px;
    }
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 90%;
    width: 50%;
    margin-right: ${ ({marginRight}) => marginRight };
    margin-left: ${ ({marginLeft}) => marginLeft };

    @media (max-width: 1024px) {
        margin-right: 0px;
        margin-left: 0px;
    }
`