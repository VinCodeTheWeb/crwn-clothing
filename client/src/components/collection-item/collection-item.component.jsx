import React from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../cutsom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addItem({ id, name, imageUrl, price }));

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
          }}
      />
    
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={addToCart}> Add to cart </CustomButton>
    </div>
  );
}
export default CollectionItem;
