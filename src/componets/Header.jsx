import styled, { keyframes } from "styled-components";
import "../style/burger.css";
import React, { useState } from "react";
import navegacion from "../data/navegacion.json";
import { Link } from "react-router-dom";

const Header = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const handleButtonClick = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	const menuesUx = navegacion.map((menu) => {
		return (
			<Lista key={menu.id}>
				<StyledLink to={menu.link}>{menu.label}</StyledLink>
			</Lista>
		);
	});
	return (
		<>
			<Container>
				<div>
					<button
						className={`menu ${isMenuOpened ? "opened" : ""}`}
						onClick={handleButtonClick}
						aria-label="Main Menu">
						<svg width="50" height="50" viewBox="0 0 100 100">
							<path
								className="line line1"
								d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
							/>
							<path className="line line2" d="M 20,50 H 80" />
							<path
								className="line line3"
								d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
							/>
						</svg>
					</button>
					{isMenuOpened === true ? (
						<Navegacion>
							<ul>{menuesUx}</ul>
						</Navegacion>
					) : (
						<></>
					)}
				</div>
				<Titulo>NotesJD</Titulo>
			</Container>
		</>
	);
};

const Container = styled.section`
	padding: 2px;
	display: flex;
	align-items: center;
	position: relative;
	max-height: 80px;
	background-color: #5452b0;
	z-index: 3;
`;

const Titulo = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2.2rem;
	font-weight: bold;
	color: #fff;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navegacion = styled.nav`
	position: absolute;
	left: 0;
	color: #fff;
	background-color: #5452b0;
	padding-top: 0.75rem;
	animation: ${fadeIn} 1s ease-in-out;
	box-shadow: 2px 2px 2px 0px #5452b0;
`;

const Lista = styled.li`
	margin-bottom: 0.75rem;
	padding-left: 10px;
	padding-right: 10px;
	font-size: 1.2rem;
	width: 120px;
	line-height: 1.5;
	transition: all 1s ease;

	:hover {
		border-bottom: 2px solid #fff;
	}
`;

const StyledLink = styled(Link)``;

export default Header;
