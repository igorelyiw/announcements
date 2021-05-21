import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Modal } from '../../components/Modal';
import { deletePost, updatePost } from '../../store/itemSlice';
import { BackIcon } from '../../components/assets/icons/reactIcon';
import { AnnouncmentForm } from '../AnnouncmentForm';

import { ProductSimilar } from './ProductSimilar';
import Product from './Product';

const Wrapper = styled.div``;
const Content = styled.div`
height:100%;
margin:0 auto;
`;
function getSimilarAnnouncment(current, announcements) {
    const arrTitle = current.title.toLowerCase().split(" ");
    const arr = announcements.filter(item => {
        if (item.title !== '' && item.title.toLowerCase().indexOf(arrTitle[0]) != -1) {
            if (item.id !== current.id) return true
        }
    })
    return arr
}

const ProductContainer = () => {
    const state = useSelector(state => state.items.announcments)
    const dispatch = useDispatch();
    const { productId } = useParams()
    const product = state.filter((item) => item.id == productId)[0]
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const similar = getSimilarAnnouncment(product, state)

    return (
        <Wrapper>
            <NavLink to='/'><BackIcon /> Back</NavLink>
            <Content>
                {product ?
                    <Product
                        image={product.image}
                        description={product.description}
                        title={product.title}
                        date={product.date}
                        id={product.id}
                        deletePost={(id) => dispatch(deletePost(id))}
                        openModal={() => setIsOpenModal(true)}
                    />
                    : <Redirect to='/' />
                }
                <ProductSimilar similarProducts={similar} />
                {isOpenModal ?
                    <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} isClosable>
                        <AnnouncmentForm
                            image={product.image}
                            description={product.description}
                            title={product.title}
                            date={product.date}
                            id={product.id}
                            onHandleSubmit={(obj) => dispatch(updatePost(obj))}
                            onClose={() => setIsOpenModal(false)}
                        />
                    </Modal>
                    : null
                }
            </Content>
        </Wrapper>
    )
}

export default ProductContainer
