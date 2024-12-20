'use client';
import React, { useState } from 'react';
import CopillotLogo from '@/public/images/copillotlogo.png';
import Image from 'next/image';
import CustomizedProgressBars from './progess-bar';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Carousel from './leads-carousels';
import KeyActivities from './key-activities';
import clsx from 'clsx';

function CopilotMenu() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleCopilotBar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        'mt-3 p-[2px] rounded-xl overflow-hidden bg-gradient-to-r from-blue-700 via-[#b8dbf0] to-[#ba98d7] shadow-xl shadow-[#a7a7a7ce] transition-all duration-500 ease-linear'
      )}
      style={{
        maxHeight: isExpanded ? '400px' : '90px', 
      }}
    >
      <div className="w-full overflow-hidden rounded-xl bg-white p-5">
        <div className="flex items-center">
          <Image
            src={CopillotLogo}
            width={30}
            height={30}
            alt="copillot logo"
          />
          <p className="mx-3 font-semibold">
            Hi Monna, <span className="text-blue-700">68%</span> of goal achieved
            and rest can be achieved by focusing on 20 top leads.
          </p>
          <CustomizedProgressBars />
          <button onClick={toggleCopilotBar}>
            <ExpandLessOutlinedIcon
              sx={{
                marginLeft: '8px',
                transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </button>
        </div>
        <div className="mt-5 px-7 flex items-center">
          <div className="border-r-[1px] w-fit box-border pr-7">
            <p className="text-sm font-medium text-[#686868]">
              Copilot has pinpointed 20 key leads that show strong purchase intent and
              are actively engaging. These leads need your focus.
            </p>
            <div className="flex w-full mt-4">
              <div className="w-fit">
                <Carousel />
              </div>
            </div>
          </div>
          <div className="flex-1 px-7">
            <KeyActivities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopilotMenu;
