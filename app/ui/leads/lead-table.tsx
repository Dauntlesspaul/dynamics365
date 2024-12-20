'use client';
import React, { useState } from 'react';
import CopillotLogo from '@/public/images/copillotlogo.png'
import Image from 'next/image';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { leads } from '@/lib/placeholder';

type lead= {
    id: string;
    name: string;
    topic: string;
    status: string;
    date: string;
}[]

function LeadTable() {
    const [leadsdata, setLeadsData] = useState<lead>(leads)
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchQuery(value);
  
      
      const filterRegex = new RegExp(value, 'i'); 
  
      const filteredLeads = leads.filter((lead) => lead.name.match(filterRegex) || lead.topic.match(filterRegex));
      setLeadsData(filteredLeads);
    };
  return (
    <div className='w-full bg-gradient-to-b from-white to-gray-200 min-h-24 mt-4 py-2 '>
         <div className='p-[2px] m-2 rounded-sm w-fit bg-gradient-to-r from-blue-700 via-[#b8dbf0] to-[#ba98d7] relative'>
         <Image
            src={CopillotLogo}
             width={18}
             height={18}
             alt='copillot logo'
             className='absolute right-2 top-0 bottom-0 my-auto'
            />
            <input 
            type='text' 
            value={searchQuery}
            onChange={handleChange}
            className='bg-white p-2 outline-none text-sm rounded-sm h-[26px] w-[380px]  placeholder:text-sm' 
            name='search' 
            placeholder='Sort, filter and search with Copilot'
            />
         </div>   
         
         <table className="w-full mt-3 table-auto  ">
            <thead>
                <tr>
                    <th className="w-1/4 px-4 py-2 ">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Name</span>
                            <ChevronDown size={16} />
                        </div>
                    </th>
                    <th className="w-1/4 px-4 py-2 ">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Topic</span>
                            <ChevronDown size={16} />
                        </div>
                    </th>
                    <th className="w-1/4 px-4 py-2 ">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Status reason</span>
                            <ChevronDown size={16} />
                        </div>
                    </th>
                    <th className="w-1/4 px-4 py-2 ">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Created on</span>
                            <ArrowDown size={16} />
                            <ChevronDown size={16} />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    leadsdata.map((lead, index)=>(
                        <tr key={index} className='border-y border-gray-300'>
                            <td className="px-4 py-2 flex items-center gap-2 text-sm text-blue-700">
                                <input type='checkbox' value={lead.name} name='leadName'/>
                                {lead.name}
                            </td>
                            <td className="px-4 py-2 text-sm">{lead.topic}</td>
                            <td className="px-4 py-2 text-sm">{lead.status}</td>
                            <td className="px-4 py-2 text-sm">{lead.date}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>


    </div>
  )
}

export default LeadTable