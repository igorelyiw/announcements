import React from 'react';
import ReactDOM from 'react-dom';

import styled from "styled-components";

import { H1 } from './Text';
import { CrossIcon } from './assets/icons/reactIcon';

const Wrapper = styled.div`
position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
const ModalContent = styled.div`
width:500px;
min-height:300px;
background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  position:relative;
   `;
const Title = styled(H1)`
text-align:center;
`;
const CrossIconWrapper = styled.div`
cursor:pointer;
position:absolute;
top:5px;
right:5px;
`;

export const Modal = (props) => {
    const { children, onClose, title, isOpen, isClosable } = props;
    const el = document.getElementById('modals');
    React.createElement('div', { className: "modals" }, null);
    return ReactDOM.createPortal(
        (
            <>
                {isOpen ? (
                    <Wrapper>
                        <ModalContent>
                            {title && <Title isBold={true}>{title}</Title>}
                            {children}
                            {isClosable && (
                                <CrossIconWrapper onClick={onClose}>
                                    <CrossIcon />
                                </CrossIconWrapper>
                            )}
                        </ModalContent>
                    </Wrapper>
                ) : null}
            </>
        ), el
    );
}