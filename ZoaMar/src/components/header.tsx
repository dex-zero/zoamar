import { ShoppingCart, UserRound, Search, AlignJustify } from 'lucide-react'

export function Header(){
    return(
        <div className="h-12 w-full bg-zinc-900 text-white flex flex-row gap-5 items-center justify-between px-2">
            <div className="flex flex-row gap-2 items-center">
                <AlignJustify className='size-6'/>
                <h1 className='font-medium text-xl'>ZoaMar</h1>
            </div>
            <div className='flex flex-row gap-3'>
                <Search className='size-6'/>
                <UserRound className='size-6'/>
                <ShoppingCart className='size-6'/>
            </div>


        </div>
    )
}