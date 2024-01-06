import Notas from "../componets/notas";
import styled from "styled-components";
import Form from "../componets/Form";
import Button from "../componets/Button";
import { useState, useEffect } from "react";
import Footer from "../componets/Footer";

const Home = () => {
	const [datos, setDatos] = useState([]);

	useEffect(() => {
		// Obtener datos del localStorage al cargar el componente
		const storedData = JSON.parse(localStorage.getItem("misDatos")) || [];
		setDatos(storedData);
	}, []);

	const eliminarNota = (id) => {
		// Filtrar las notas para obtener todas menos la que se va a eliminar
		const nuevasNotas = datos.filter((nota) => nota.id !== id);

		// Actualizar el estado con las nuevas notas
		setDatos(nuevasNotas);

		// Actualizar el localStorage con las nuevas notas
		localStorage.setItem("misDatos", JSON.stringify(nuevasNotas));
	};

	const [mostrarFormulario, actualizarMostrar] = useState(false);
	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	const nota = datos.map((note) => {
		return (
			<Notas
				key={note.id}
				titulo={note.titulo}
				parrafo={note.texto}
				id={note.id}
				eliminarNota={eliminarNota}
			/>
		);
	});
	return (
		<>
			<StyledMain className={mostrarFormulario ? "" : "no-formulario"}>
				<StyledSeccion> {nota}</StyledSeccion>

				{mostrarFormulario === true ? (
					<Form setDatos={setDatos} datos={datos} />
				) : (
					<></>
				)}
				<Button
					cambiarMostrar={cambiarMostrar}
					title={
						mostrarFormulario ? (
							<i className="gg-log-in"></i>
						) : (
							<i className="gg-add"></i>
						)
					}
				/>
			</StyledMain>
			<Footer />
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
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
		backdrop-filter: blur(5px);
	}

	& > button,
	form {
		z-index: 2;
	}
	&.no-formulario::before {
		content: none;
	}
`;

const StyledSeccion = styled.section`
	width: 90%;

	@media screen and (min-width: 720px) {
		max-width: 550px;
	}
`;
export default Home;
