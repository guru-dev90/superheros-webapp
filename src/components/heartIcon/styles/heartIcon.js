import styled from 'styled-components';

export const MainContainer=styled.div`
    display: flex;
`

export const Container=styled.span`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6554a8;
    border-radius: 50%;
    height: 35px;
    width: 35px;

    ${(props) => props.children.props.active ? `
        position: absolute;
        bottom: 10px;
        right: 3px;
    ` : null }

`

export const Icon = styled.img`
    width: 15px;
`