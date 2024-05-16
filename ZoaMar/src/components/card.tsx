import React from 'react';

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
    name: string;
    price: string;
    stock: string;
    type: string;
    tag: string;
}

const Card: React.FC<CardProps> = ({title, content, imageUrl, name, price, stock, type, tag}) =>{
    return(
        <div className=' bg-zinc-0 border border-black/50 w-60 rounded overflow-hidden shadow-lg items-center '>
            <img className='bg-white m-2 rounded border border-black size-56' src={imageUrl} alt={title} />
            <div className='flex flex-col gap-2 px-6 py-4'>
                <input className='focus:valid:text-green-400 focus:outline focus:duration-100 focus:outline-2 focus:outline-green-400 duration-100 z-1111 absolute flex leading-5 p-1 rounded bg-transparent outline outline-2 outline-black' type="text" />
                <div className='focus:text-green-400 p-0.25 m-0.5'>Enter your name</div>
                <input className='p-1 rounded bg-transparent border border-white/10' placeholder={price} type="number" />
                <input className='p-1 rounded bg-transparent border border-white/10' placeholder={stock} type="number" />
                <input className='p-1 rounded bg-transparent border border-white/10' placeholder={type} type="number" />
                <input className='p-1 rounded bg-transparent border border-white/10' placeholder={tag} type="text" />
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{content}</p>
            </div>
        </div>
    )
}

export default Card