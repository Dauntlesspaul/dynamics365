'use client';
import React, { useState } from 'react';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Image from 'next/image';
import { leadsCarousel } from '@/lib/placeholder';
import autoIcon from '@/public/images/stars-svg.svg';
import LeadInfo from './leadsInfocarousels';


const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal,setModal] = useState<boolean>(false)
  const [currentLead, setCurrentlead] = useState(0)
  const visibleleadsCarousel = 2; 
  const totalSlides = Math.ceil(leadsCarousel.length / visibleleadsCarousel);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % totalSlides
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

   const openModal = (leadIndex: number)=>{
     setCurrentlead(leadIndex)
     setModal(true)
   }

   const closeModal = ()=> {
    setModal(false)
   }

  return (<>
   {modal && (
    <div className='absolute top-0 bottom-0 z-50 grid place-items-center right-0 left-0 m-auto'>
      <LeadInfo closeModal={closeModal} leadIndex={currentLead}/>
      </div>)}
    <div className="relative w-full max-w-4xl">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${(leadsCarousel.length / visibleleadsCarousel) * 50}%`,
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {leadsCarousel.map((lead, index) => (
            <div
              key={index}
              className="w-[50%] flex-shrink-0 px-2"
              style={{
                flexBasis: `${100 / visibleleadsCarousel}%`
              }}
            >
              <div onClick={()=> openModal(index)} className='w-full relative cursor-pointer group max-w-[480px] rounded-lg p-3 border shadow-md'> 
                     <div className='hidden absolute bottom-0 right-0  z-50 p-3 bg-white shadow-md rounded-lg group-hover:block'> {lead.decision()}</div>
                    <div className='flex items-center gap-2'>
                        <div className='rounded-full size-8  overflow-hidden'>
                            <Image
                            src={lead.image}
                            className='object-cover w-full h-full object-top'
                            alt='jane'
                            />
                        </div>
                        <div>
                            <p className='font-semibold text-sm'>{lead.name}</p>
                            <p className='relative text-sm text-[#888888]'>{lead.description()}</p>
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
                        <p className='text-sm my-1 font-semibold'>{lead.taskheader()}</p>
                        <p className='text-sm'>{lead.task}</p>
                    </div>    
                    <p className='text-sm text-[#888888] my-2'>{lead.display()}</p>
                </div>
                        </div>
                    ))}
                    </div>
                </div>

     
      <button
        onClick={handlePrev}
        className="absolute top-1/2 border border-gray-500 -left-4 -translate-y-1/2 p-[2px] bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeftOutlined sx={{color: '#1d4ed8'}}/>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2  border border-gray-500 -right-4 -translate-y-1/2 p-[2px] bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRightOutlined sx={{color: '#1d4ed8'}}/>
      </button>

 
      <div className="flex justify-center mt-4 space-x-2">
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
    </div>
    </>);
};

export default Carousel;
