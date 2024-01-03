import React from "react";
import styled from "styled-components";

const Button = (props) => {
	return <>
    <StyledButton onClick={props.cambiarMostrar}>Agregar</StyledButton>
  </>;
};

export const StyledButton = styled.button`
	background-color: #4caf50;
	color: white;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;
  position: absolute;
  right: 20px;
  bottom: 50px;

	&:hover {
		background-color: #45a049;
	}
`
export default Button;
