import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s all ease;
    opacity: 0;    
    & > :first-child{
        transition: .5s all ease;
        transform: translate3d(0,-100px,0); 
    }
    &.openModal{
        opacity: 1;
        & > :first-child{
            transform: translate3d(0,0,0);
        }
    }    
    &.closingModal {
        opacity: 0;
        pointer-events: none;
        & > :first-child {
          transform: translate3d(0, -100px, 0);
        }
    }    
`;
