import { ChevronDown, Trash2Icon } from "lucide-react";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Image from "next/image";
import microSoftLogo from "@/public/images/Microsoft_Teams.png";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShareIcon from '@/public/images/share-1-svgrepo-com.svg';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function ToolBar(){
    return(
    <div className=" bg-green-500 top-0 sticky z-50  w-full">
        <div className="shadow-lg pt-2  h-fit flex items-center py-[4px] overflow-x-auto -  bg-white px-2 justify-between">
            <div className="flex gap-1 items-center cursor-pointer">
                <p className="text-sm whitespace-nowrap">My open leads</p> <ChevronDown size={18}/>
            </div>
            <div className="flex space-x-2 items-center w-fit justify-between">
                <div className="flex items-center gap-1 rounded-sm p-[3px] cursor-pointer hover:bg-[#f6f6f6]">
                    <BrokenImageOutlinedIcon sx={{color: 'blue', fontSize: '20px'}}/> 
                    <p className="text-sm whitespace-nowrap">Show Chart</p>
                </div>
                <div className="flex items-center gap-1 rounded-sm p-[3px] cursor-pointer hover:bg-[#f6f6f6]">
                    <FormatListBulletedOutlinedIcon sx={{ fontSize: '20px', color: '#3e6dc4'}}/> 
                    <p className="text-sm whitespace-nowrap">Focused view</p>
                </div>
                <div className="flex items-center gap-1 p-[3px] cursor-pointer hover:bg-[#f6f6f6]">
                    <AddOutlinedIcon sx={{ fontSize: '25px', color: '#32cab1'}}/> 
                    <p className="text-sm whitespace-nowrap">New</p>
                </div>
                <div className="flex items-center p-[3px] cursor-pointer hover:bg-[#f6f6f6]">
                    <RefreshOutlinedIcon sx={{ fontSize: '20px', transform: 'rotate(-100deg)'}}/> 
                    <p className="text-sm whitespace-nowrap">Refresh</p>
                </div>
                <div className="flex items-center gap-1 p-[3px] cursor-pointer hover:bg-[#f6f6f6]">
                    <Image
                    height={20}
                    width={20}
                    src={microSoftLogo}
                    alt="collaboration logo"
                    />
                    <p className="text-sm whitespace-nowrap">Collaborate</p>
                </div>
                <div className="flex items-center ml-10 group gap-1 p-[3px]  cursor-pointer hover:bg-[#f6f6f6]">
                    <Trash2Icon className="group-hover:text-red-500 -mt-1" size={17}/> 
                    <p className="text-sm">Delete</p>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-gray-500 ml-2">|</span>
                    <ChevronDown className='text-gray-500 cursor-pointer' size={15}/>
                </div>
                <div className="flex items-center group gap-1 cursor-pointer relative">
                    <MoreVertOutlinedIcon/>
                    <span className=" hidden absolute  bg-white shadow-sm rounded-sm p-[1px] px-[4px] top-10 text-black text-[14px]  group-hover:block">more</span>
                </div>
                <div className="flex items-center hover:bg-[#f6f6f6] cursor-pointer rounded-sm p-[5px] border-[1px] gap-1">
                    <PieChartOutlineOutlinedIcon sx={{fontSize: '20px'}}/> 
                    <p className="text-sm whitespace-nowrap">Smart data</p>
                </div>
                <div className="flex items-center hover:bg-[#f6f6f6] cursor-pointer rounded-sm p-[5px] border-[1px] gap-1">
                    <FilterListOutlinedIcon sx={{fontSize: '20px'}}/> 
                    <p className="text-sm whitespace-nowrap">Edit filters</p>
                </div>
                <div className="flex items-center hover:bg-[#f6f6f6] cursor-pointer rounded-sm p-[5px] border-[1px] gap-1">
                    <EditRoadOutlinedIcon sx={{fontSize: '20px'}}/> 
                    <p className="text-sm whitespace-nowrap">Edit columns</p>
                </div>
                <div className="flex items-center cursor-pointer bg-blue-800 rounded-sm p-[5px] border-[1px] px-2">
                    <Image
                    src={ShareIcon}
                    alt="share icon"
                    height={15}
                    width={15}
                    /> 
                    <span className="text-white ml-2">|</span>
                    <ChevronDown className='text-white' size={15}/>
                </div>
            </div>
        </div>
       </div> 
    )
}