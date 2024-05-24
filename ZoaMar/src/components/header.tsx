import { ShoppingCart, UserRound, Search, AlignJustify, X } from 'lucide-react';
import React, {useState} from 'react'

const Header: React.FC = () => {
    const[showInput, setShowInput] = useState(false)

    const handleButtonClick = () => {
        setShowInput(true)
    }

    const handleCloseClick = () => {
        setShowInput(false)
    }

    return(
        <div className="h-16 w-full bg-zinc-900 text-white flex flex-row gap-5 items-center justify-between px-2">


            <div className="flex flex-row gap-2 items-center">
                <AlignJustify className='size-6'/>
                <h1 className='font-medium text-xl'>ZoaMar</h1>
            </div>
            <div className='flex w-full gap-3'>
                <div className='flex flex-row gap-3 w-full justify-end items-center'>
                    {showInput &&(
                        <div className='flex w-full items-center px-2'>
                            <input className=' p-3 h-8 w-full rounded text-white bg-transparent border border-white/50' type="text" placeholder="Pesquisar Produto" />
                            <X className='hover:cursor-pointer' onClick={handleCloseClick}/>
                        </div>
                    )
                }
                <Search onClick={handleButtonClick} className='hover:cursor-pointer size-6'/>
                </div>
                <div className='flex gap-3 items-center'>
                    <UserRound className='size-6'/>
                    <ShoppingCart className='size-6'/>
                </div>
            </div>
        </div>
    )
}

export default Header