import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

import { H3 } from '../components/Text';

const Wrapper = styled.div`
width:400px;
text-align:center;
padding:20px;
box-shadow:inset 0 0 10px #000000;
cursor:pointer;
margin-top:20px;
    `;
const Image = styled.img`
    width:100%;
    height:350px;
    `;
const Title = styled(H3)``;

const ItemsCard = props => {
    const { image, title, id } = props;

    return (
        <Wrapper>
            <NavLink to={'/product/' + id}>
                <Image src={image} alt='There must be image' />
            </NavLink>
            <Title bold>{title}</Title>
        </Wrapper>
    )
}

export default ItemsCard
