import React from 'react'
import CollectionItem from '../../component/collection-item/collection-item.component'

import './preview-collection.styles.scss';

const CollectionPreview = ({title,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
               items
                .filter((item,index)=> index < 4)
                .map(({id, ...otherItemProps}) => (
                   <CollectionItem key= {id} {...otherItemProps}/>
                // <div key ={item.id}>{item.name}</div>
               ))
            }
        </div>
    </div>
);
export default CollectionPreview;