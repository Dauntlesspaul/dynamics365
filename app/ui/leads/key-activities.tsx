import Image from 'next/image'
import React from 'react';
import woodLandLogo from '@/public/images/Bank.jpg';
import CircleIcon from '@mui/icons-material/Circle';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import autoIcon from '@/public/images/stars-svg.svg';
import fabrikamIcon from '@/public/images/fabrikam.png';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


function KeyActivities() {
  return (
    <div>
        <p className='text-sm  mt-1 font-medium text-[#686868]'>Other key activities</p>
        <div className='mt-4 rounded-lg shadow-md pt-2 px-6 py-2'>
        <div className='flex items-center gap-2'>
            <div className='rounded-full size-8 bg-[gray] overflow-hidden'>
                <Image
                src={woodLandLogo}
                className=' object-cover w-full h-full object-center'
                alt='jane'
                />
            </div>
            <div>
                <p className='font-semibold text-sm'>Cafe A100 for Woodland Bank</p>
                <p className='relative text-xs text-[#888888]'>Woodland Bank <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> $280,000 <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> 8 days to close</p>
            </div>
         </div>
         <div className='w-full bg-[#eef4fe] p-[2px] pl-[7px] rounded-lg relative'>
         <div className='absolute -right-2 -top-1 p-1 rounded-full bg-white flex justify-center items-center'>
                <Image
                alt='auto'
                src={autoIcon}
                width={17}
                height={17}
                />
            </div>
            <p className='text-[11px] my-1 font-semibold'><MarkEmailUnreadOutlinedIcon sx={{fontSize: '18px', marginRight: '3px'}}/> Review draft and reply to Chris Naido</p>
         </div>
        </div>

        <div className='mt-4 rounded-lg shadow-md pt-2 px-6 py-2'>
        <div className='flex items-center gap-2'>
            <div className='rounded-full size-8 bg-[gray] overflow-hidden'>
                <Image
                src={fabrikamIcon}
                className=' object-cover w-full h-full object-center'
                alt='jane'
                />
            </div>
            <div>
                <p className='font-semibold text-sm'>Partnership opportunity for Fabrikam</p>
                <p className='relative text-xs text-[#888888]'>Fabrikam <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> $5,500,000 <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> 12 days to close</p>
            </div>
         </div>
         <div className='w-full bg-[#eef4fe] p-[2px] pl-[7px] rounded-lg relative'>
         <div className='absolute -right-2 -top-1 p-1 rounded-full flex justify-center items-center'>
                <Image
                alt='auto'
                src={autoIcon}
                width={17}
                height={17}
                />
            </div>
            <p className='text-[11px] my-1 font-semibold'><CalendarMonthOutlinedIcon sx={{fontSize: '16px',marginTop: '-2px', marginRight: '3px'}}/> Prepare me for Fabrikam&apos;s key stake holder meeting</p>
         </div>
        </div>
        <p className='my-3 h-fit'>
          <a  href='#' className=' text-blue-700 no-underline text-sm hover:text-blue-800'>Show all key activities</a>
        </p>
    </div>
  )
}

export default KeyActivities