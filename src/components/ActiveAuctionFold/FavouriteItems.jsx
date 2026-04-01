import React from 'react';
import FavouriteItemCard from './FavouriteItemCard';

const FavouriteItems = ({getFavouriteItems, handleDelete}) => {
    console.log(getFavouriteItems);
    return (
        <div className='space-y-1 py-1'>
            {
                getFavouriteItems.map(favouriteItem => <FavouriteItemCard favouriteItem={favouriteItem} key={favouriteItem.id} handleDelete={handleDelete}></FavouriteItemCard>)
            }
        </div>
    );
};

export default FavouriteItems;