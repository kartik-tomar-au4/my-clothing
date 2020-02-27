import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
      {
          collections.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
          ))
      }
    </div>
)

const mapStateToProp = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProp)(CollectionOverview);