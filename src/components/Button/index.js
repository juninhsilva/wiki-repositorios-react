import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ type, name, onClick}) => {
    return (
        <ButtonContainer type={type} onClick={onClick}>{name}</ButtonContainer>
    )
}

export default Button;