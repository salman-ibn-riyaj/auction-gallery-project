import { X } from 'lucide-react';
import React from 'react';

const FavouriteItemCard = ({favouriteItem, handleDelete}) => {
    console.log(favouriteItem);
    return (
        <div className='flex justify-between gap-2 bg-amber-50 rounded-md'>
            <div className='flex'>
                <img className='w-10 h-10' src={favouriteItem.image} alt="" />
                <div>
                    <h2>{favouriteItem.name}</h2>
                    <h2>${favouriteItem.currentBid}</h2>
                </div>
            </div>
            <button onClick={()=>handleDelete(favouriteItem)}>
                    <X />
            </button>

            
        </div>
        
    );
};

export default FavouriteItemCard;