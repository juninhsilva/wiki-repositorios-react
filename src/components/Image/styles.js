import styled from "styled-components";

export const ImageContainer = styled.img`
    width: 100%;
    border: 1px solid #fff
    border-radius: 8px;
    padding: 2px;

    .logo{
        height: 32px;
    }

    &:hover{
        opacity: .6;
        cursor: pointer;
    }
`;