import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = () => {
  const { collections } = useSelector(createStructuredSelector({
    collections: selectCollectionsForPreview
  }));
  
  return (
    <div className="collection-overview">
      {
        collections.map(({id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview;
