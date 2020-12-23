import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/colletion-overview.component';
import CollectionyPage from '../collection/collection.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionyPage);

const ShopPage = ({ match }) => {
  
  const dispatch = useDispatch();

  const { isFetching, collections } = useSelector(createStructuredSelector({
    isFetching: selectIsCollectionFetching,
    collections: selectIsCollectionLoaded
  }))

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionsPageWithSpinner isLoading={!collections} {...props} /> } />
    </div>
  )
}

export default ShopPage;
