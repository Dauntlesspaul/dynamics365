'use client';
import React, { useEffect, useState } from 'react';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { leadsCarousel } from '@/lib/placeholder';
import CircleIcon from '@mui/icons-material/Circle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import medalIcon from '@/public/images/medal.png';
import sheildIcon from '@/public/images/shield.png';
import chartIcon from '@/public/images/pie-chart.png';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import messageIcon from '@/public/images/mail.png';
import autoIcon from '@/public/images/stars-svg.svg';
import rateIcon from '@/public/images/rate.jpg';




function LeadInfo({closeModal, leadIndex}: {closeModal: ()=> void, leadIndex: number}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
     setCurrentIndex(leadIndex)
  },[leadIndex])

  const totalSlides = leadsCarousel.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };


  const handleClose = ()=>{
    closeModal()
  }
  

  return (
    <>
      <div className="relative w-full -top-[10px] max-w-4xl bg-gradient-to-r from-blue-700 via-[#b8dbf0] to-[#ba98d7] shadow-xl shadow-[#a0a0a0ce] rounded-2xl">
  <div className="overflow-hidden rounded-lg">
    <div
      className="flex transition-transform duration-500"
      style={{
        width: `${totalSlides * 100}%`,
        transform: `translateX(-${(currentIndex /totalSlides) * 100}%)`,
        scrollSnapType: 'x mandatory', 
        display: 'flex',
        scrollBehavior: 'smooth', 
      }}>
            {leadsCarousel.map((lead, index) => (
        <div key={index} className=' p-[2px] w-full overflow-hidden h-[84vh] '>
        <div className='w-full p-5 h-full bg-gradient-to-b from-white via-white to-[#d8dbe1] bg-white rounded-2xl'>
          <div className='flex justify-between px-4'>
            <div className='flex items-center gap-2'>
                    <Image
                        src={messageIcon}
                        width={18}
                        height={18}
                        className=''
                        alt="message"
                    />
                    <p className='text-sm font-semibold'>Engage with {lead.name}</p>
                </div> 
                <button onClick={handleClose}>
                    <CloseOutlinedIcon  sx={{fontSize: '18px'}}/>
                </button>
            </div>  
            <div className='flex p-4 rounded-md mt-3 shadow-md shadow-slate-300 items-center gap-2'>
                <div className='rounded-full size-8  overflow-hidden'>
                    <Image
                    src={lead.image}
                    className=' object-cover w-full h-full object-center'
                    alt={lead.name}
                    />
                </div>
                <div>
                    <p className='font-semibold text-sm'>{lead.name}</p>
                    <p className='relative text-xs text-[#888888]'>COO <CircleIcon sx={{marginTop: '-8px', fontSize: '5px', color: '#888888]'}}/> Engage Northwind Traders</p>
                </div>
            </div>
            <div className='p-4 mt-4 rounded bg-gradient-to-b from-white via-white to-[#dbdee3]'>
                <div className='bg-gradient-to-r from-[#ebf3fe] to-[#ebebfd] rounded-lg p-3'>
                    <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <Image
                        alt='auto'
                        src={autoIcon}
                        width={17}
                        height={17}
                        />
                        <p className='text-xs font-bold bg-gradient-to-r from-blue-700 to-[#aa9acf] text-transparent bg-clip-text'>{(lead.name.split(' ')[0])} may be interested in upgrading esspreso machines for her in-store coffee shop.</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='px-2 py-[3px] cursor-pointer shadow-md rounded-sm bg-white flex items-center gap-[2px]'>
                            <ModeOutlinedIcon sx={{fontSize: '15px', color:'#3d56ce'}}/>
                            <p className='text-xs text-[#3d56ce] '>Edit</p>
                        </div>
                        <div className='px-2 cursor-pointer py-[3px] rounded-sm bg-gradient-to-r from-[#3d56ce] to-[#8032e6] bg-white flex items-center gap-[2px]'>
                            <SendOutlinedIcon sx={{fontSize: '15px', color: 'white'}}/>
                            <p className='text-xs text-white whitespace-nowrap'>Approve and send</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='mt-4 rounded-md  shadow-md'>
                    <button className='relative group text-sm p-3'>
                        Engage
                        <span className='absolute group-hover:bg-[#3d56ce] left-0 right-0 mx-auto w-[60%] bottom-0 h-1'></span>
                    </button>
                    <button className='relative group text-sm p-3'>
                        Research
                        <span className='absolute group-hover:bg-[#3d56ce] left-0 w-[60%] mx-auto right-0 bottom-0 h-1'></span>
                    </button>
                </div>

                <div className='mt-4 bg-gradient-to-b from-white to-[#f6f7f8] rounded-xl p-4 shadow-md'>
                    <div className='p-4 relative bg-gradient-to-r from-[#eef4fe] rounded-tr-[30px]  to-[#f0f0f8] rounded-lg'>
                        <div className='absolute -right-2 -top-1 p-1 rounded-full bg-white flex justify-center items-center'>
                            <Image
                            alt='auto'
                            src={autoIcon}
                            width={17}      
                            height={17}
                            />
                        </div>
                        <h3 className='bg-gradient-to-r from-blue-700 to-[#b7a4e2] text-transparent bg-clip-text text-sm'>Why i picked this lead</h3>
                       {lead.quality()}
                        <div>
                            <div className='flex gap-2 mt-3'>
                                <div className='p-3  bg-white  shadow-md rounded-lg'>  
                                {lead.decision()}  
                                </div>
                                <div className='p-3 bg-white  shadow-md rounded-lg'>
                                <div className='flex gap-3'>
                                        <Image
                                        alt='medal'
                                        src={medalIcon}
                                        width={45}
                                        height={45}
                                        />
                                    <div>
                                       
                                    {lead.deal()}
                                    </div>
                                </div>    
                                </div>
                                <div className='p-3 bg-white  shadow-md rounded-lg'>
                                <div className='flex gap-3'>
                                        <Image
                                        alt='decision icon'
                                        src={rateIcon}
                                        width={45}
                                        height={45}
                                        />
                                    <div>
                                    {lead.intent()}
                                    </div>
                                </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <div className='flex rounded-sm w-fit items-center gap-1'>
                            <div className='px-[3px] py-[2.5px] bg-[#ededed] border w-fit'>
                                <Image
                                alt='secure'
                                src={sheildIcon}
                                width={13}
                                height={13}
                                />
                            </div>
                            <div className='flex h-full bg-[#ededed] items-center border rounded-sm px-1 p-[1px]'>
                                <span className='text-[10px]'>1</span>
                                <span className='h-3 w-[2px] bg-gray-300 mx-[6px]'></span>
                                <Image
                                alt='secure'
                                src={chartIcon}
                                width={12}
                                height={12}
                                />
                                <span className='text-[11px]'>D365 Sales</span>
                            </div>
                            <div className='p-[1px]  py-[1.5px] rounded-sm bg-[#ededed] px-1 h-auto shadow-sm text-[10px] border w-fit'>
                                +2
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-[10px] p-[1px] px-[5px] rounded-sm bg-[#ededed] w-fit'>Ai-generated content may be incorrect</p>
                            <div className='flex gap-1 items-center'>
                                <ThumbsUp size={10}/>
                                <ThumbsDown size={10}/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='mt-4 bg-gradient-to-b from-[#f1f2f4] to-[#d8dbe1] p-4 rounded-xl shadow-md '>
                    <h2 className='text-sm font-semibold'>About {lead.name}</h2>
                    <p className='text-sm'>
                       {lead.about()}
                    </p>
                </div>
            </div>
        </div>
      </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 border border-gray-500 -left-4 -translate-y-1/2 p-[2px] bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeftOutlined sx={{ color: '#1d4ed8' }} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 border border-gray-500 -right-4 -translate-y-1/2 p-[2px] bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRightOutlined sx={{ color: '#1d4ed8' }} />
        </button>

        {/* Pagination Dots */}
        <div className="flex absolute bottom-[20px] left-0 right-0 justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-7 h-1 rounded-sm ${
                index === currentIndex ? 'bg-blue-700' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
        <p className='text-xs text-gray-500 absolute bottom-5 left-[55px]'>Showing {currentIndex + 1} of {leadsCarousel.length} </p>
      </div>
    </>
  );
};

export default LeadInfo;

