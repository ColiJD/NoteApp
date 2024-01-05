import React from "react";
import {
	LoginBox,
	UserBox,
	Input,
  Textarea,
	Label,
	StyledButton,
	Span1,
	Span2,
	Span3,
	Span4,
} from "../style/StyledForm"; // Asegúrate de importar los componentes desde el archivo adecuado

const Form = () => {
	return (
		<LoginBox>
			<UserBox>
				<Input type="text" name="" required />
				<Label>Titulo</Label>
			</UserBox>
			<UserBox>
				<Textarea type="text" name="" required />
				<Label>Texto</Label>
			</UserBox>
			<StyledButton>
				<Span1></Span1>
				<Span2></Span2>
				<Span3></Span3>
				<Span4></Span4>
				Save
			</StyledButton>
		</LoginBox>
	);
};

export default Form;
