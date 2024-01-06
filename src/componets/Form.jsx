import React, { useState } from "react";
import { LoginBox, StyledButton, Span1, Span2, Span3, Span4 } from "../style/StyledForm";
import { v4 } from "uuid";
import { Campo, CampoArea } from "./Input";

const Form = ({ datos, setDatos }) => {
	const [titulo, setTitulo] = useState("");
	const [texto, setTexto] = useState("");

	const manejarEnvio = (e) => {
		e.preventDefault();
		if (titulo === "" || texto === "") {
			alert("Por favor, complete todos los campos antes de guardar.");
			return;
		} else {
			let datos = {
				id: v4(),
				titulo,
				texto,
			};
			try {
				// Obtener datos existentes del localStorage
				const existingData = JSON.parse(localStorage.getItem("misDatos")) || [];
				// Agregar nuevos datos
				const newData = [...existingData, datos];
				setDatos(newData);
				// Guardar en el localStorage
				localStorage.setItem("misDatos", JSON.stringify(newData));
			} catch (error) {
				console.error("Error al guardar en el localStorage:", error);
				alert(
					"Hubo un error al intentar guardar. Por favor, inténtalo de nuevo."
				);
			}
		}
	};

	const Limpiar = (e) => {
		e.preventDefault();
		setTitulo("");
		setTexto("");
	};
	return (
		<LoginBox>
			<Campo valor={titulo} setValor={setTitulo} />
			<CampoArea valor={texto} setValor={setTexto} />.
			<StyledButton onClick={manejarEnvio}>
				<Span1></Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Span4></Span4>
				<i className="gg-check-o"></i>
			</StyledButton>
			<StyledButton onClick={Limpiar}>
				<Span1></Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Span4></Span4>
				<i className="gg-close-o"></i>
			</StyledButton>
		</LoginBox>
	);
};

export default Form;
