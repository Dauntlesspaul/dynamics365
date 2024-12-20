import React from 'react'
import CopillotLogo from '@/public/images/copillotlogo.png';
import Image from 'next/image';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import OutlookIcon from '@/public/images/outlook.jpg';
import CheckboxesTags from './search-input';
import { ChevronDown } from 'lucide-react';
function AgentModal({handleClose}: {handleClose: ()=>void}) {

    const handleModalClose = ()=>{
        handleClose()
    }
  return (
    <div className=' absolute top-0 bottom-0 right-0 z-50 left-0 bg-[#00000061]'>
         <div className='absolute p-10 h-[78vh] max-w-[880px] top-0 right-0 left-0  rounded-xl bottom-0 m-auto bg-gradient-to-b from-[#fdfdfd] via-[#f9f9f9] to-[#e4e5e6] shadow-md w-full'>
        <div className='flex justify-end my-3'>    
            <button onClick={handleModalClose}>
                <CloseOutlinedIcon  sx={{fontSize: '22px', color:'gray'}}/>
            </button>
        </div>    
          <div className='flex items-center mt-6 gap-2'>
              <Image
                src={CopillotLogo}
                width={25}
                height={25}
                alt="copillot logo"
              />
              <p className='font-semibold'>Agent Skill</p>
          </div>
          <div className='w-full relative p-5 mt-5 rounded-lg shadow-md h-fit'>
            <button className='absolute right-3 top-2 rotate-180'>
                <ChevronDown className='text-gray-600' size={22}/>
            </button>
              <p>Check if on-hand inventory  will allow all sale orders to ship without delay</p>
              <p className='leading-9'>When <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><PersonOutlineOutlinedIcon sx={{fontSize: '20px', color: '#7094ba', mx:'3px'}}/>any vendor</span>  sends a mail with changes to <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><DescriptionOutlinedIcon sx={{fontSize: '20px', color: '#7094ba', mx:'3px'}}/> confirmed purchase orders</span>, check if the resulting  <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><NotesOutlinedIcon sx={{fontSize: '20px', color: '#7094ba', mx:'3px'}}/>on-hand inventory</span> will allow <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><FileCopyOutlinedIcon sx={{fontSize: '19px', color: '#7094ba', mx:'3px'}}/>all sales orders</span> to <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><DirectionsOutlinedIcon sx={{fontSize: '19px', color: '#7094ba', mx:'3px'}}/>ship without delay</span> . If so, <span className='text-sm text-[#7094ba] bg-[#e9f6fe] p-[5px] px-[7px] rounded-lg whitespace-nowrap'><DirectionsOutlinedIcon sx={{fontSize: '19px', color: '#7094ba', mx:'3px'}}/>update the purchase order</span> to reflect the change.</p>
          </div>
          <div className='mt-14'>
            <div className='flex items-center gap-3'>
                <Image
                src={OutlookIcon}
                alt='outlook'
                width={25}
                height={25}
                />
                <h2 className='font-semibold'>Enable email access</h2>
              </div>  
              <p className='my-3'>Allow the agent to process email inboxes to read mail from unknown vendors</p> 
              <CheckboxesTags/>
              <div className='flex right-10 items-center gap-3 mt-20 absolute bottom-10'>
                <button className='rounded-sm w-24 p-2 px-3 shadow-sm bg-[#d7d6d6] border text-[#949494]'>
                    Activate
                </button>
                <button className='rounded-sm text-black shadow-sm w-20 p-2 border bg-[#e9e9e9]'>
                    Close
                </button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AgentModal