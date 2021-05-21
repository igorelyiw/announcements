import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import { Button } from 'antd'
import logo from '../components/assets/logo.png'
import { Modal } from '../components/Modal';
import { createPost } from '../store/itemSlice';

import { AnnouncmentForm } from './AnnouncmentForm';

const Image = styled.img`
width:150px;
`;
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;
const Navbar = () => {
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <NavLink to='/'>
                <Image src={logo} />
            </NavLink>
            <Button type="primary" onClick={() => setIsOpenModal(true)} >Add announcement</Button>
            {isOpenModal &&
                <Modal onClose={() => setIsOpenModal(false)} isOpen={isOpenModal} isClosable>
                    <AnnouncmentForm
                        onHandleSubmit={(arr) => dispatch(createPost(arr))}
                        onClose={() => setIsOpenModal(false)}
                    />
                </Modal>
            }
        </Wrapper>
    )
}

export default Navbar
