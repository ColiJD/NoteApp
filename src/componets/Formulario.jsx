import React from "react";
import styled from "styled-components";

export const Formulario = () => {
	return (
		<>
			<FormContainer>
				<FormStyled>
					<Label htmlFor="titulo">Título:</Label>
					<Input type="text" id="titulo" name="titulo" required />

					<Label htmlFor="parrafo">Párrafo:</Label>
					<TextArea id="parrafo" name="parrafo" rows="4" required />

					<Button type="submit">Guardar Nota</Button>
				</FormStyled>
			</FormContainer>
		</>
	);
};

const FormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
`;

const FormStyled = styled.form`
	max-width: 400px;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 8px;
	color: #333;
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 16px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
`;

const TextArea = styled.textarea`
	width: 100%;
	padding: 10px;
	margin-bottom: 16px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
	resize: vertical;
`;

const Button = styled.button`
	background-color: #4caf50;
	color: white;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #45a049;
	}
`;
