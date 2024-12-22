'use client';
import React, { useState } from 'react'
import ToolBar from '../ui/leads/tool-bar'
import CopilotMenu from '../ui/leads/copilot'
import LeadTable from '../ui/leads/lead-table';
import LeadChart from '../ui/leads/leadscart';


function LeadPage() {
  const [tab,setTab] = useState('focused view')

  const handleTabChange = (selectedTab: string) => {
    setTab(selectedTab);
  };
  return (
    <div className='bg-[#efefef] min-h-svh px-4 py-2'>
      <ToolBar handleTabChange={handleTabChange}/>
      <CopilotMenu/>
      {tab === 'chart' && <LeadChart/>}
       {tab === 'focused view' && <LeadTable/> }
    </div>
  )
}

export default LeadPage