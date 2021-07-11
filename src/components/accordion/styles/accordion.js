import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    margin-bottom: 3.5em;
`;

export const Frame = styled.div`
    margin-bottom: 10px;
    width: 967px;

    @media (max-width: 1024px) {
        width: 250px;
    }
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 967px;
    margin: auto;

    @media (max-width: 1024px) {
        width: 250px;
    }
`;

export const Item = styled.div`
    color: #3e3838;
    margin-bottom: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    
`;

export const Header = styled.div`
    display: flex;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 1px;
    font-size: 13px;
    font-weight: 700;
    background: white;
    padding: 1.2em 3em 1.2em 5em;
    user-select: none;
    align-items: center;
    width: 100%;
    color: #053968;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    
    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media (max-width: 1024px) {
        padding: 1.8em 1.2em;
    }
`;

export const Body = styled.div`
    box-sizing: border-box;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    background: white;
    padding: 1.2em 3em 1.2em 5em;
    user-select: none;
    align-items: center;
    width: 100%;
    color: #053968;
    text-align: justify;
    
    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media (max-width: 1024px) {
        padding: 1.8em 1.2em;
    }
`;