import Image from 'next/image'
import React from 'react'
import janeProfile from '@/public/images/jane.webp';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import autoIcon from '@/public/images/stars-svg.svg';

function Jane() {
  return (
    <div className='w-full max-w-[480px] rounded-lg p-3 border shadow-md'>
        <div className='flex items-center gap-2'>
            <div className='rounded-full size-8  overflow-hidden'>
                <Image
                src={janeProfile}
                className=' object-cover w-full h-fullobject-center'
                alt='jane'
                />
            </div>
            <div>
                <p className='font-semibold text-sm'>Jane Reyes</p>
                <p className='relative text-sm text-[#888888]'>COO <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> Engage Northwind Traders</p>
            </div>
        </div>
        <div className='bg-[#eef4fe] mt-2 w-full p-2 rounded-tr-[30px] relative'>
            <div className='absolute -right-2 -top-1 p-1 rounded-full bg-white flex justify-center items-center'>
                <Image
                alt='auto'
                src={autoIcon}
                width={17}
                height={17}
                />
            </div>
            <p className='text-sm my-1 font-semibold'><MarkEmailUnreadOutlinedIcon sx={{fontSize: '20px', marginTop: ''}}/> Engage with Jane Reyes</p>
            <p className='text-sm'>Jane may be interested in upgrading esspreso machines for her in-store coffee shop.</p>
        </div>    
        <p className='text-sm text-[#888888] my-2'>Expand business <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> High buying intent</p>
    </div>
  )
}

export default Jane