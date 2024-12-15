import React from 'react'
import Link from 'next/link'
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import {
  Sheet,
  SheetContent,
 
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center p-3 w-full '>

<div className='flex flex-between gap-6 '>
    <Link href='/'>Home</Link>
    <Link href='shop'>Shop</Link>
    <Link href='/blog'>About</Link>
    <Link href='/contact'>Contact</Link>
</div>


<div className='flex gap-6 hidden md:flex'>
<Link href='/account'><User /></Link>
<Link href='/checkout'><Search /></Link>
<Link href=''><Heart /></Link>
<Link href='/card'><ShoppingCart /> </Link>
</div>
<Sheet> <SheetTrigger className=' text-white md:hidden'><AlignJustify className='flex justify-end items-center text-black'/></SheetTrigger >
<SheetContent className='flex justify-center items-center h-full backdrop-blur'>
<div className='flex gap-6 flex-col justify-center items-center '>
<Link href='/account'><User /></Link>
<Link href=''><Search /></Link>
<Link href=''><Heart /></Link>
<Link href='/card'><ShoppingCart /> </Link>
</div></SheetContent></Sheet>



</div>
  )
}

export default Navbar