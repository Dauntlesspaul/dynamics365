'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';


interface ProgressSegmentProps {
  color: string;
  percentage: number;
}


const MulticoloredProgressContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: 8,
  borderRadius: 5,
  overflow: 'hidden',
});

const ProgressSegment = styled('div')<ProgressSegmentProps>(({ color, percentage }) => ({
  backgroundColor: color,
  width: `${percentage}%`,
}));

const CustomizedProgressBars: React.FC = () => {

  const segments = [
    { color: '#cbdeca', percentage: 20 },
    { color: '#86b3f1', percentage: 15 },
    { color: '#e6cff3', percentage: 10 },
    { color: '#fecb84', percentage: 5 },
    { color: '#ebeaee', percentage: 60 },
  ];

  return (
    <div className='flex-1'>
    <div className="flex justify-between items-center">
        <p className='text-xs pl-5'> <WatchLaterOutlinedIcon sx={{fontSize: '12px', marginTop: '-2px'}}/> one month until Q4 ends</p>
        <div className='w-[42%] flex justify-between'>
            <p className='text-sm relative'> <span className='text-black absolute bg-black w-[1px] h-[26px] -left-1 top-1 '></span>Target<span className='ml-4 font-semibold'>$45 million</span></p>
            <p className='text-sm'>68% of target achieved</p>
        </div>
    </div>       
    <Stack spacing={2} sx={{ flexGrow: 1 , margin: '2px 0', padding:0}}>
      <MulticoloredProgressContainer>
        {segments.map((segment, index) => (
          <ProgressSegment
            key={index}
            color={segment.color}
            percentage={segment.percentage}
          />
        ))}
      </MulticoloredProgressContainer>
    </Stack>
    <div className='flex gap-2 justify-between w-[55%] pl-5'>
        <div className='flex items-center gap-[2px]'>
            <span className='size-[7px] rounded-full bg-[#cbdeca]'></span>
            <p className='text-xs'>Won $18m</p>
        </div>
        <div className='flex items-center gap-[2px]'>
            <span className='size-[7px] rounded-full bg-[#86b3f1]'></span>
            <p className='text-xs'>Committed $8m</p>
        </div>
        <div className='flex items-center gap-[2px]'>
            <span className='size-[7px] rounded-full bg-[#e6cff3]'></span>
            <p className='text-xs'>Best case $7m</p>
        </div>
        <div className='flex items-center gap-[2px]'>
            <span className='size-[7px] rounded-full bg-[#fecb84]'></span>
            <p className='text-xs'>Qualified $3m</p>
        </div>
        <div className='flex items-center gap-[2px]'>
            <span className='size-[7px] rounded-full bg-[#ebeaee]'></span>
            <p className='text-xs'>Leads $75m</p>
        </div>
    </div>
    </div>
  );
};

export default CustomizedProgressBars;
