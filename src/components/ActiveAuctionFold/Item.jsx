import { Heart } from 'lucide-react';
import React from 'react';


const Item = ({item, hanldeGetFavouriteItems}) => {
    console.log(item);
    return (
        <tr className='border-b border-b-lime-400 rounded-md'>
           <td className='flex gap-2 px-2 py-2 bg-amber-50'>
            <img className='w-20 h-12' src={item.image} alt="" />
            <h3>{item.name}</h3>
            </td> 

           <td className='px-2 py-2 bg-cyan-50 text-center'>{item.currentBid}</td> 

           <td className='px-2 py-2 bg-green-100 text-center'>{item.timeLeft}</td> 
           
           <td className='px-2 py-2 bg-blue-100'><span className='flex justify-center' onClick={()=>{hanldeGetFavouriteItems(item)}}><Heart color="#e40749" /></span></td> 
        </tr>
    );
};

export default Item;