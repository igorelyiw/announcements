import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from 'antd';
import { H2 } from '../../components/Text';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
width:80%;
margin:0 auto;
    `;
const Image = styled.img`
    box-shadow: 0 0 10px rgba(0,0,0,0.5)
    `;
const Content = styled.div`
    max-width:30%;
    `;
const Title = styled(H2)``;
const Text = styled.p``;
const Date = styled.p``;
const ButtonWrapper = styled.div`
display:flex;
align-items:flex-end;
`;

const Product = props => {
    const { id, title, description, date, image, deletePost, openModal } = props;
    return (
        <Wrapper>
            <Image src={image} />
            <Content>
                <Title >{title}</Title>
                <Text>{description}</Text>
                <hr />
                <Date>{date}</Date>
                <ButtonWrapper>
                    <NavLink to='/'>
                        <Button type="primary" danger onClick={() => deletePost(id)}>
                            Delete
                         </Button>
                    </NavLink>

                    <Button type="primary" onClick={() => openModal()}>
                        Edit
                        </Button>
                </ButtonWrapper>
            </Content>
        </Wrapper>
    )
}

export default Product
