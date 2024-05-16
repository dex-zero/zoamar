import React from 'react';

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({title, content, imageUrl}) =>{
    return(
        <div className='w-60 rounded overflow-hidden shadow-lg items-center'>
            <img className='size-60' src={imageUrl} alt={title} />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{content}</p>
            </div>
        </div>
    )
}

export default Card