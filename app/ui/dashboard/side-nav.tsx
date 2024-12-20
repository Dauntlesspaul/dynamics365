'use client';
import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import { usePathname } from 'next/navigation';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import clsx from 'clsx';
import Man3OutlinedIcon from '@mui/icons-material/Man3Outlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { PushPinOutlined } from '@mui/icons-material';
import { useState } from 'react';
import AgentModal from '../agentskill/agent-modal';
import { ChevronDown } from 'lucide-react';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ImageAspectRatioOutlinedIcon from '@mui/icons-material/ImageAspectRatioOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

function SideNav() {
    const pathname = usePathname();
    const [open, setOpen] = useState(true)
    const [agentModal, setAgentModal] = useState(false)

    const toggleButton = ()=>{
        setOpen((prevState)=> !prevState)
    }
    const handleModal = () => {
        setAgentModal(true)
    }
   const handleClose = ()=>{
        setAgentModal(false)
   }
  return (
    <aside className={`h-full transition-all duration-300 ease-linear overflow-hidden bg-[#efefef] border border-t-0 border-r-1 border-[#c9c8c8] flex flex-col py-2 overflow-y-scroll no-scrollbar ${open ? 'w-56' : 'w-10' }`}>
        {agentModal && <AgentModal handleClose={handleClose}/>}
        <div className='flex pl-[7px] justify-start w-full relative'>
            <button onClick={toggleButton}>
                <MenuOutlinedIcon sx={{fontSize: '20px', marginLeft: '8px', width: 'fit-content'}}/>
            </button>
            {!open && <span className='size-[6px] rounded-full bg-blue-600 absolute top-[5px] right-1'></span>}
        </div>
         {open && (
        <nav className='mt-1'>
         <Link 
           className={clsx(
            "flex p-2 px-3 text-black relative",
            {
                " bg-white": pathname === '/',
                "hover:bg-white": pathname !== '/'
            }
            )}
            
            href="/"
            >
            <span className={clsx(
            'h-5 absolute left-[3px] top-0 bottom-0 m-auto rounded-t-md rounded-b-md bg-blue-600',
            {
             'w-1': pathname === '/' && agentModal === false ,
             'w-0': pathname !== '/' && agentModal === true
            }
            )}>
            </span>
            <HomeOutlinedIcon sx={{fontSize: '20px', marginTop: '-1px'}}/> <p className='ml-2 text-sm font-medium'>Home</p>
         </Link>
         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/colateral',
              "bg-[#1e40af] text-white": pathname === '/colateral'
            }
          )}
          
         href="/"
         >
            <ScheduleOutlinedIcon sx={{fontSize: '20px', marginTop: '-1px'}}/> <p className='ml-2 text-sm font-medium'>Recent</p><ChevronDown className='ml-auto' size={17}/>
         </Link>
         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/pined',
            }
          )}
          
         href="/"
         >
            <PushPinOutlined sx={{fontSize: '20px', transform: 'rotate(30deg)'}}/> <p className='ml-2 text-sm'>Pinned</p><ChevronDown className='ml-auto' size={17}/>
         </Link>

         <button 
            className={clsx(
            "flex p-2 px-3 relative w-full text-black",
            {
              "hover:bg-white ": pathname !== '/agent',
            }
          )}
          onClick={handleModal}
         >
            <span className={clsx(
                'h-5 absolute left-[3px] top-0 bottom-0 m-auto rounded-t-md rounded-b-md bg-blue-600',
                {
                'w-1': agentModal === true,
                'w-0': agentModal === false
                }
                )}>
                </span>
            <Man3OutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Agent Skill</p>
         </button>
         
         <p className='text-sm font-semibold pl-3 my-2'>My Work</p>

         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/colateral',
              "bg-[#1e40af] text-white": pathname === '/colateral'
            }
          )}
          
         href="/"
         >
            <RocketLaunchOutlinedIcon sx={{fontSize: '20px'}}/>
            <p className='ml-2 text-sm font-medium'>Sales accelerator</p>
         </Link>
         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/colateral',
              "bg-[#1e40af] text-white": pathname === '/colateral'
            }
          )}
          
         href="/"
         >
            <DashboardOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Dashboards</p>
         </Link>

         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/colateral',
              "bg-[#1e40af] text-white": pathname === '/colateral'
            }
          )}
          
         href="/"
         >
            <ContentPasteOutlinedIcon sx={{fontSize: '20px', marginTop: '-1px'}}/> <p className='ml-2 text-sm font-medium'>Activities</p>
         </Link>

         <p className='text-sm font-semibold pl-3 my-2'>Customers</p>

         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/customers',
              "bg-[#1e40af] text-white": pathname === '/customers'
            }
          )}
          
         href="/"
         >
            <FolderSharedOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Accounts</p>
         </Link>
         <Link 
            className={clsx(
            "flex p-2 px-3 text-black",
            {
              "hover:bg-white ": pathname !== '/colateral',
              "bg-[#1e40af] text-white": pathname === '/colateral'
            }
          )}
          
         href="/"
         >
            <PersonOutlineOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Contact</p>
         </Link>

         <p className='text-sm font-medium pl-3 my-2'>Sales</p>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black relative",
        {
            " bg-white": pathname === '/leads',
            "hover:bg-white": pathname !== 'leads'
        }
        )}
        
        href="/leads"
        >
        <span className={clsx(
        'h-5 absolute left-[3px] top-0 bottom-0 m-auto rounded-t-md rounded-b-md bg-blue-600',
        {
         'w-1': pathname === '/leads' && agentModal === false ,
         'w-0': pathname !== '/leads' && agentModal === true
        }
        )}>
        </span>
        <SettingsPhoneOutlinedIcon sx={{fontSize: '20px'}}/> 
        <p className='ml-2 text-sm'>Leads</p>
        </Link>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/opportunity',
            "bg-[#1e40af] text-white": pathname === '/opportunity'
        }
        )}
        
        href="/"
        >
        <SpaOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Opportunities</p>
        </Link>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/competitor',
            "bg-[#1e40af] text-white": pathname === '/competitor'
        }
        )}
        
        href="/"
        >
        <WorkspacePremiumOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Compepitors</p>
        </Link>

        <p className='text-sm font-semibold pl-3 my-2'>Collateral</p>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/collateral',
            "bg-[#1e40af] text-white": pathname === '/collateral'
        }
        )}

        href="/"
        >
        <ImageAspectRatioOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Quotes</p>
        </Link>
        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/orders',
            "bg-[#1e40af] text-white": pathname === '/orders'
        }
        )}

        href="/"
        >
        <DescriptionOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Orders</p>
        </Link>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/invoice',
            "bg-[#1e40af] text-white": pathname === '/invoice'
        }
        )}

        href="/"
        >
        <ReceiptLongOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Invoices</p>
        </Link>
        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/products',
            "bg-[#1e40af] text-white": pathname === '/products'
        }
        )}

        href="/cl"
        >
        <Inventory2OutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Products</p>
        </Link>
        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/sales-literature',
            "bg-[#1e40af] text-white": pathname === '/sales-literature'
        }
        )}

        href="/"
        >
        <CollectionsBookmarkOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Sales literature</p>
        </Link>


        <p className='text-sm font-semibold pl-3 my-2'>Marketing</p>

        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/marketing',
            "bg-[#1e40af] text-white": pathname === '/marketing'
        }
        )}

        href="/"
        >
        <ListAltOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Marketing list</p>
        </Link>
        <Link 
        className={clsx(
        "flex p-2 px-3 text-black",
        {
            "hover:bg-white ": pathname !== '/campaign',
            "bg-[#1e40af] text-white": pathname === '/campaign'
        }
        )}

        href="/"
        >
        <CampaignOutlinedIcon sx={{fontSize: '20px'}}/> <p className='ml-2 text-sm'>Quick campaign</p>
        </Link>
        <p className='text-sm font-medium pl-3 mt-2 mb-1'>Customers</p>
        <hr/>
        <div className='flex gap-2 px-3 items-center'>
            <span className='size-7 bg-purple-700 grid place-items-center text-white text-base'>
                s
            </span>
            <p className='text-sm'>Sales</p>
        </div>    
        </nav> 
        ) }  
    </aside>
  )
}

export default SideNav