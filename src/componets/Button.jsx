import React from "react";
import styled from "styled-components";
import {  StyledButton, Span1, Span2, Span3, Span4 } from "../style/StyledForm";

const Button = (props) => {
	const { cambiarMostrar, title } = props;
	return (
		<>
			<ButtonStyled onClick={cambiarMostrar}>
				<Span1></Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Span4></Span4>
				{title}
			</ButtonStyled>
		</>
	);
};

export const ButtonStyled = styled(StyledButton)`
	position: fixed;
	right: 20px;
	bottom: 50px;
	margin:0;
	font-size: 25px;
	border-radius: .95rem;
	padding-right: 15px;
	padding-left: 15px;
`;
export default Button;
