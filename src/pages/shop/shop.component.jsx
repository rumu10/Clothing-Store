import React from 'react'
import Shop_data from './shop.data';
import CollectionPreview from '../../component/preview-collection/preview-collection.component';
class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            collections: Shop_data
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                     <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }
               
            </div>
        )
    }
}
export default ShopPage;