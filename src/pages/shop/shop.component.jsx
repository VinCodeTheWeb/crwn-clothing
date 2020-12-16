import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionOverview from '../../components/collection-overview/colletion-overview.component';
import CollectionyPage from '../collection/collection.component';

import { firestore, converCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionsPageWithSpinner = WithSpinner(CollectionyPage);

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = converCollectionsSnapshotToMap(snapshot);

      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    })
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props} /> } />
    </div>
  )
}

export default ShopPage;
