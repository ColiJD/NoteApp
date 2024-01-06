import React from "react";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "../style/StyledForm";

const Notas = ({ titulo, parrafo, id, eliminarNota }) => {

	const handleEliminarNota = () => {
    eliminarNota(id);
  };
	return (
		<>
			<StyledContainer>
				<StyledTitulo>{titulo}</StyledTitulo>

				<StyledParrafo>{parrafo}</StyledParrafo>
				<StyledButton onClick={handleEliminarNota}><i className="gg-close-o"></i></StyledButton>
			</StyledContainer>
		</>
	);
};

const StyledContainer = styled.details`
	background-color: #96a1e3;
	margin-bottom: 1.2rem;
	width: 100%;
	padding: 0.75rem;
	color: #fff;
	line-height: 1.2;
	border-radius: 0.5rem;
	box-shadow: 2px 2px 2px 0px #5452b0;
`;
const StyledTitulo = styled.summary`
	font-size: 1.2rem;
	font-weight: bold;
	border-bottom: 2px solid #5452b0;
	margin-bottom: 0.5rem;
`;
const StyledParrafo = styled.p`
	font-size: 0.85rem;
	font-style: italic;
	width: 100%;
`;

export default Notas;
