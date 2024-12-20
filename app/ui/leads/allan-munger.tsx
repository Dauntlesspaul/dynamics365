import Image from 'next/image'
import React from 'react'
import allanProfile from '@/public/images/allanmunger.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import autoIcon from '@/public/images/stars-svg.svg';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

function Allan() {
  return (
    <div className='w-full max-w-[480px] rounded-lg p-3 border shadow-md'>
        <div className='flex items-center gap-2'>
            <div className='rounded-full size-8  overflow-hidden'>
                <Image
                src={allanProfile}
                className='object-cover w-full h-full object-top'
                alt='jane'
                />
            </div>
            <div>
                <p className='font-semibold text-sm'>Allan Munger</p>
                <p className='relative text-sm text-[#888888]'>Head of real Estate Development <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> Contosso coffee</p>
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
            <p className='text-sm my-1 font-semibold'><CalendarMonthOutlinedIcon  sx={{fontSize: '18px', marginTop: '-4px'}}/> Prepare for meeting with Allan</p>
            <p className='text-sm'>Prepare for high buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.</p>
        </div>    
        <p className='text-sm text-[#888888] my-2'>Upcoming meeting <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> Due today</p>
    </div>
  )
}

export default Allan