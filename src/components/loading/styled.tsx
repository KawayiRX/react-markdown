import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    color: aliceblue;
    padding-top: 100px;
    background: rgba(55, 40, 65, .8);
    z-index: 100;
`;

export const Loading = styled.div`

`;

export const Wrapper = styled.div`
    height: 100%;
    margin: 0 auto;
    font-size: 0;
`;

const move = keyframes`
    0% {
        height: 50px;
    }
    50% {
        height: 5px;
    }
    100% {
        height: 50px;
    }
`;

export const Item = styled.div`
    background: crimson;
    width: 15px;
    height: 0;
    display: inline-block;
    font-size: 0;
    margin: 0 5px;
    position: relative;
    transform: translateY(145px);
    &::before {
        position: absolute;
        display: inline-block;
        content: "";
        height: 50px;
        width: 15px;
        bottom: 0;
        left: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background: blueviolet;
    }
    &::after {
        position: absolute;
        display: inline-block;
        content: "";
        height: 50px;
        width: 15px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        top: 0;
        left: 0;
        background: blueviolet;
    }

    &:nth-child(1)::before {
        animation: ${move} 2s infinite 0s;
    }
    &:nth-child(2)::before {
        animation:  ${move} 2s infinite .2s;
    }
    &:nth-child(3)::before {
        animation:  ${move} 2s infinite .4s;
    }
    &:nth-child(4)::before {
        animation:  ${move} 2s infinite .6s;
    }
    &:nth-child(5)::before {
        animation: ${move} 2s infinite .8s;
    }
    &:nth-child(1)::after {
        animation: ${move} 2s infinite 0s;
    }
    &:nth-child(2)::after {
        animation: ${move} 2s infinite .2s;
    }
    &:nth-child(3)::after {
        animation: ${move} 2s infinite .4s;
    }
    &:nth-child(4)::after {
        animation: ${move} 2s infinite .6s;
    }
    &:nth-child(5)::after {
        animation: ${move} 2s infinite .8s;
    }
`;
