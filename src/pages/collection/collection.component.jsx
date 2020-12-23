import React from 'react'
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ match }) => {
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollection(match.params.collectionId)
  }))

  const { title, items } = collections;

  return (
    <div className="collection-page">
      <h2 className='title'>{title}</h2>
      <div className="items">
        {items.map(({...otherProps}) => <CollectionItem key={otherProps.id} {...otherProps} />)}
      </div>
    </div>
  )
}

export default CollectionPage;
