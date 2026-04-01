import React from 'react';

const Links = ({perItem}) => {
    return (
        <li className='hover:bg-cyan-900 rounded-md'>
            {perItem.name}
        </li>
    );
};

export default Links;