import React, { useState } from 'react'
import Image from 'next/image'
import instagramSVG from '../public/headerIcon/instagram.svg'
import tiktokSVG from '../public/headerIcon/tiktok.svg'
import telegramSVG from '../public/headerIcon/telegram.svg'
import cartSVG from '../public/headerIcon/cart.svg'
import favoritesSVG from '../public/headerIcon/favorites.svg'
import accountSVG from '../public/headerIcon/account.svg'



const Header = () => {
const [language, setLanguage] = useState('UK')
const [inCart, setInCart] = useState(0)

  return <div className='flex justify-between items-center px-[80px] py-[45px] text-white'>
		<div className='flex items-center'>
			<button className='rounded border-[0.5px] p-[10px] border-current' type='button'>{language}</button>
			<ul className='flex gap-4 ml-[90px] '>
				<li><a href=''><Image className='w-32px h-32px' src={instagramSVG} alt="instagram"/></a></li>
				<li><a href=''><Image className='w-32px h-32px' src={tiktokSVG} alt="tiktok"/></a></li>
				<li><a href=''><Image className='w-32px h-32px' src={telegramSVG} alt="telegram"/></a></li>
			</ul>
		</div>

		<div className='flex items-center'>
			<ul>
				<li><p>тел:  +380 97 071 32 25</p></li>
				<li><p>тел:  +380 97 071 32 25</p></li>
			</ul>
			<ul className='flex items-center gap-4 ml-[158px]'>
				<li><a href='' className='relative'><Image className='w-32px h-32px' src={cartSVG} alt="cart"/>
				<span className='absolute top-[2px] left-[29%]'>{inCart}</span>
				</a></li>
				<li><a href=''><Image className='w-32px h-32px' src={favoritesSVG} alt="favorites"/></a></li>
				<li><a href=''><Image className='w-32px h-32px' src={accountSVG} alt="account"/></a></li>
			</ul>
		</div>
	</div>
}

export default Header
