import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Input, Space } from 'antd';
import ItemsCard from './ItemsCard';

const { Search } = Input;
const filterByNames = (data, inputValue) => {
    return data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
};
const WrapperCard = styled.div`
    display:flex;
    height:100%;
    flex-wrap:wrap;
justify-content:space-around;
    `;
const Wrapper = styled.div``;

const ListItemContainer = () => {
    let state = useSelector(state => state.items.announcments);
    state = [...state].reverse();
    const [inputState, setInputState] = React.useState('');
    const result = !inputState ? state : filterByNames(state, inputState);
    return (
        <Wrapper>
            <Space direction="vertical">
                <Search placeholder="input search text" onChange={(e) => setInputState(e.target.value)} enterButton />
            </Space>
            <WrapperCard>
                {result.map(item => <ItemsCard key={item.id} title={item.title} image={item.image} id={item.id} />)}
            </WrapperCard>
        </Wrapper>
    )
}

export default ListItemContainer
