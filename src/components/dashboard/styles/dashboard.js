import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    justify-content: space-around;
    background: url(${`${process.env.PUBLIC_URL}/images/dashboard/dashboard-background.jpg`});
    background-repeat: no-repeat;
    background-size: auto;
    height: 403px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        line-height: 22px;
        padding-top: 1rem;
        height: auto;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`

export const Title = styled.h4`
    margin-top: 15px;
    margin-bottom: 15px;
    color: ${ ({ color }) => color };
    font-weight: 600;
    font-type: 
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 90%;
    width: 420px;
    margin-right: ${ ({marginRight}) => marginRight };
    margin-left: ${ ({marginLeft}) => marginLeft };

    @media (max-width: 1024px) {
        margin-right: 0px;
        margin-left: 0px;
    }
`