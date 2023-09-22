import styled from 'styled-components';

export const MobileViewContainer = styled.div`
    border: 2px solid  rgb(11, 212, 28);
    height:calc(100vh - 4px);
    width: calc(100vw - 4px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow:hidden;
`;

export const MobileViewText = styled.div`
    font-size: 2rem;
    overflow:hidden;
`;