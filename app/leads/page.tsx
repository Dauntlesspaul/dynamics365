import React from 'react'
import ToolBar from '../ui/leads/tool-bar'
import CopilotMenu from '../ui/leads/copilot'
import LeadTable from '../ui/leads/lead-table';

function LeadPage() {
  return (
    <div className='bg-[#efefef] min-h-svh px-4 py-2'>
      <ToolBar/>
      <CopilotMenu/>
      <LeadTable/>
    </div>
  )
}

export default LeadPage