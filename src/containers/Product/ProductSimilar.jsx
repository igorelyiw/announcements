import React from 'react'
import styled from 'styled-components';

import { H2 } from '../../components/Text';
import ItemsCard from '../ItemsCard';

const WrapperProd = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
`;
const Wrapper = styled.div`
margin-top:20px;
`;
const Title = styled(H2)`
font-weight:bold;

`;

export const ProductSimilar = props => {
    const { similarProducts } = props;

    return (
        <Wrapper>
            <Title>
            <hr />
                Similar ads:
            </Title>
            <WrapperProd>
                {similarProducts.map(item => <ItemsCard key={item.id} title={item.title} image={item.image} id={item.id} />)}
            </WrapperProd>
        </Wrapper>
    )
}


