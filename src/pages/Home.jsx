import Notas from "../componets/notas";
import notas from "../data/notas.json";
import styled from "styled-components";
import { Formulario } from "../componets/Formulario";
import Button from "../componets/Button";
import { useState } from "react";

const Home = () => {
	const [mostrarFormulario, actualizarMostrar] = useState(false);
	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	const nota = notas.map((note) => {
		return <Notas key={note.id} titulo={note.titulo} parrafo={note.parrafo} />;
	});
	return (
		<>
			{/* <StyledMain>{nota}</StyledMain> */}
			{mostrarFormulario === true ? <Formulario /> : <></>}
			<Button cambiarMostrar={cambiarMostrar} />
		</>
	);
};

const StyledMain = styled.main`
	display: grid;
	place-items: center;
	margin-top: 1.2rem;
	position: relative;
`;
export default Home;
