'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className=" mt-4 rounded-md shadow-md">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: { backgroundColor: 'blue' },
        }}
        aria-label="secondary tabs example"
        sx={{
          '& .MuiTab-root': { color: 'gray', display: 'flex', alignItems: 'center' }, // Center content
          '& .Mui-selected': { color: 'black' },
          minHeight: '40px'
        }}
      >
        <Tab
          sx={{
            textTransform: 'none',
            fontSize: '12px',
            padding: '0 10px', // Adjust padding
            minWidth: '30px',
            minHeight: '30px', // Adjust height
            height: '40px', // Ensure consistent height
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
          }}
          value="one"
          label="Engage"
        />
        <Tab
          sx={{
            textTransform: 'none',
            fontSize: '12px',
            padding: '0 5px', // Adjust padding
            minWidth: '30px',
            minHeight: '30px', // Adjust height
            height: '40px', // Ensure consistent height
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
          }}
          value="two"
          label="Research"
        />
      </Tabs>
    </div>
  );
}
