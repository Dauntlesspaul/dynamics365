import React from 'react'
import Image from 'next/image';
import messageIcon from '@/public/images/mail.png';
import janeProfile from '@/public/images/jane.webp';
import CircleIcon from '@mui/icons-material/Circle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import decisionIcon from '@/public/images/decison maker.jpg';
import medalIcon from '@/public/images/medal.png';
import rateIcon from '@/public/images/rate.jpg';
import sheildIcon from '@/public/images/shield.png';
import chartIcon from '@/public/images/pie-chart.png';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import autoIcon from '@/public/images/stars-svg.svg';

function LeadModal({closeModal}: {closeModal: ()=>void}) {

    const handleClose = ()=>{
        closeModal();
    }
  return (
    <div className='absolute p-[2px] z-50 -top-12 right-0 bottom-0 left-0 m-auto w-full max-w-[968px]  h-[84vh] bg-gradient-to-r from-blue-700 via-[#b8dbf0] to-[#ba98d7] shadow-xl shadow-[#a0a0a0ce] rounded-2xl'>
    <div className='w-full p-5 h-full bg-gradient-to-b from-white via-white to-[#e2e4e6] rounded-2xl'>
       <div className='flex justify-between px-4'>
        <div className='flex items-center gap-2'>
                <Image
                    src={messageIcon}
                    width={18}
                    height={18}
                    className=''
                    alt="message"
                />
                <p className='text-sm font-semibold'>Engage with Jane Reyes</p>
            </div> 
            <button onClick={handleClose}>
                <CloseOutlinedIcon  sx={{fontSize: '18px'}}/>
            </button>
        </div>  
        <div className='flex p-4 rounded-md mt-3 shadow-md shadow-slate-300 items-center gap-2'>
            <div className='rounded-full size-8  overflow-hidden'>
                <Image
                src={janeProfile}
                className=' object-cover w-full h-fullobject-center'
                alt='jane'
                />
            </div>
            <div>
                <p className='font-semibold text-sm'>Jane Reyes</p>
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
                    <p className='text-xs font-bold bg-gradient-to-r from-blue-700 to-[#aa9acf] text-transparent bg-clip-text'>Jane may be interested in upgrading esspreso machines for her in-store coffee shop.</p>
                </div>
                <div className='flex gap-2'>
                    <div className='px-2 py-[3px] shadow-md rounded-sm bg-white flex items-center gap-[2px]'>
                        <ModeOutlinedIcon sx={{fontSize: '15px', color:'#3d56ce'}}/>
                        <p className='text-xs text-[#3d56ce]'>Edit</p>
                    </div>
                    <div className='px-2 py-[3px] rounded-sm bg-gradient-to-r from-[#3d56ce] to-[#8032e6] bg-white flex items-center gap-[2px]'>
                        <SendOutlinedIcon sx={{fontSize: '15px', color: 'white'}}/>
                        <p className='text-xs text-white'>Approve and send</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='mt-4 rounded-md  shadow-md'>
                <button className='text-sm p-3'>
                    Engage
                </button>
                <button className='text-sm p-3'>
                    Research
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
                    <ul>
                        <li className='text-xs list-disc ml-5'>Jane is a <b>key decision maker</b> and was browsing <b>'espresso machines'</b> on First Coffee's website. &emsp;<span className='text-[10px] bg-white p-[2px]'>1</span></li>
                        <li className='text-xs list-disc ml-5'>Multiple people at her company have reported 'slowness' during <b>service request</b> &emsp;<span className='text-[10px] bg-white p-[2px]'>2</span></li>
                        <li className='text-xs list-disc ml-5'>Northwind Traders currently see <b>$200M in revenue</b> from their in-store coffee shops. &emsp;&emsp;<span className='text-[10px] bg-white p-[2px]'>3</span></li>
                        <li></li>
                    </ul>
                    <div>
                        <div className='flex gap-2 mt-3'>
                            <div className='p-3  bg-white  shadow-md rounded-lg'>
                            <div className='flex gap-3'>
                                    <Image
                                    alt='decision icon'
                                    src={decisionIcon}
                                    width={45}
                                    height={45}
                                    />
                                <div>
                                    <p className='text-xs font-semibold'>Decision maker</p>
                                    <p className='text-[#3d56ce] font-semibold'>Yes</p>
                                </div>
                            </div>    
                            </div>
                            <div className='p-3 bg-white  shadow-md rounded-lg'>
                            <div className='flex gap-3'>
                                    <Image
                                    alt='decision icon'
                                    src={medalIcon}
                                    width={45}
                                    height={45}
                                    />
                                <div>
                                    <p className='text-xs font-semibold'>Potential deal value</p>
                                    <p className='text-[#3d56ce] font-semibold'>$1M</p>
                                </div>
                            </div>    
                            </div>
                            <div className='p-3 bg-white shadow-md rounded-lg'>
                            <div className='flex gap-3'>
                                    <Image
                                    alt='decision icon'
                                    src={rateIcon}
                                    width={45}
                                    height={45}
                                    />
                                <div>
                                    <p className='text-xs font-semibold'>Intent</p>
                                    <p className='text-[#3d56ce] font-semibold'>High</p>
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
                <h2 className='text-sm font-semibold'>About Jane</h2>
                <p className='text-sm'>
                    Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with proven track record in optimizing operation and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to exellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings. ensuring consist, high quality services.
                </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default LeadModal