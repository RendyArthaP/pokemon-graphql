import styled from '@emotion/styled';
import { mediaQueries } from '../Global';

export const WrapperModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

export const Background = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  z-index: 0;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Modal = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  max-width: 320px;
  height: 200px;
  align-items: center;
  margin: auto;
  border-radius: 10px;
  background-color: #FFFFFF;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputName = styled.input`
  border: 1px solid #FF0000;  
  padding: 10px;
  border-radius: 10px;
  outline: 2px solid transparent;
  outline-offset: 2px;
`;

export const Button = styled.button`
  border: none;
  background-color: #FFDE00;
  color: white;
  font-family: 'Poppins', 'sans-serif';
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 10px;
`;