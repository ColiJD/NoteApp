import React from "react";
import { Input, Label, UserBox,Textarea } from "../style/StyledForm";

const Campo = (props) => {
	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};
	return (
		<UserBox>
			<Input
				type="text"
				name=""
				required
				value={props.valor}
				onChange={manejarCambio}
			/>
			<Label>Titulo</Label>
		</UserBox>
	);
};

const CampoArea = (props) => {
	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};
	return (
		<UserBox>
			<Textarea
				type="text"
				name=""
				required
				value={props.valor}
				onChange={manejarCambio}
			/>
			<Label>Texto</Label>
		</UserBox>
	);
};

export { Campo, CampoArea };
