import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const buttonAnimation1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const buttonAnimation2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const buttonAnimation3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const buttonAnimation4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

const LoginBox = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 260px;
  padding: 0.75rem;
  padding-top: 15px;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255,0.75);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  animation: ${fadeIn} 1s ease;
`;

const UserBox = styled.div`
  position: relative;

  textarea:focus ~ label,
  input:focus ~ label,
  textarea:valid ~ label,
  input:valid ~ label {
    top: -10px;
    left: 0;
    color: #5452b0;
    font-size: 12px;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #5452b0;
  pointer-events: none;
  transition: 0.5s;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #5452b0;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #5452b0;
  outline: none;
  background: transparent;
`;
const Textarea = styled.textarea`
   width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #5452b0;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #5452b0;
  outline: none;
  background: transparent;
`

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background: #5452b0;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 2px;
  border-radius:0.75rem;
  cursor: pointer;

  &:hover {
    background: #5452b0;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #5452b0, 0 0 25px #5452b0, 0 0 50px #5452b0, 0 0 100px #5452b0;
  }
`;

const Span = styled.span`
  position: absolute;
  display: block;
`;

const Span1 = styled(Span)`
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #fff);
  animation: ${buttonAnimation1} 1s linear infinite;
`;

const Span2 = styled(Span)`
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #fff);
  animation: ${buttonAnimation2} 1s linear infinite;
  animation-delay: 0.25s;
`;

const Span3 = styled(Span)`
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #fff);
  animation: ${buttonAnimation3} 1s linear infinite;
  animation-delay: 0.5s;
`;

const Span4 = styled(Span)`
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #fff);
  animation: ${buttonAnimation4} 1s linear infinite;
  animation-delay: 0.75s;
`;

export {
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
};
