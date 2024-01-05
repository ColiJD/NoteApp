import Notas from "../componets/notas";
import notas from "../data/notas.json";
import styled from "styled-components";
import Form from "../componets/Form";
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
			<StyledMain className={mostrarFormulario ? "" : "no-formulario"}>
				<StyledSeccion> {nota}</StyledSeccion>

				{mostrarFormulario === true ? <Form /> : <></>}
				<Button
					cambiarMostrar={cambiarMostrar}
					title={mostrarFormulario ? "X" : "+"}
				/>
			</StyledMain>
		</>
	);
};

const StyledMain = styled.main`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-top: 1.2rem;
	position: relative;

	&::before {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3); /* Puedes ajustar el color y la opacidad aquí */
		z-index: 1; /* Asegúrate de que este valor sea mayor que el z-index del resto de tus elementos */
		backdrop-filter: blur(5px); /* Ajusta el desenfoque según sea necesario */
	}

	/* Contenedor para el contenido principal */
	& > button,
	form {
		z-index: 2; /* Asegúrate de que este valor sea mayor que el z-index del pseudo-elemento */
	}
	&.no-formulario::before {
		content: none;
	}
`;

const StyledSeccion = styled.section`
	width:90%;

`;
export default Home;
