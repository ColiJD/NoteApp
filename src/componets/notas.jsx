import React from "react";
import styled, { keyframes } from "styled-components";


const Notas = ({ titulo, parrafo }) => {
	return (
		<>
			<StyledContainer>
				<StyledTitulo>{titulo}</StyledTitulo>
				<StyledParrafo>{parrafo}</StyledParrafo>
			</StyledContainer>
		</>
	);
};

const expandContractAnimation = keyframes`
  0% {
    width: 100px;
    height: 100px;
  }
  50% {
    width: 200px;
    height: 200px;
  }
  100% {
    width: 100px;
    height: 100px;
  }
`;

const StyledContainer = styled.div`

	background-color: #96a1e3;
  margin-bottom: 1.2rem;
  width: 90%;
  padding: 0.75rem;
  color: #FFF;
  line-height: 1.2;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 0px #5452b0;
  height: 120px;


`;
const StyledTitulo = styled.h3`
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
