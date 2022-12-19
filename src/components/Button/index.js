import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ type, name}) => {
    return (
        <ButtonContainer type={type}>{name}</ButtonContainer>
    )
}

export default Button;