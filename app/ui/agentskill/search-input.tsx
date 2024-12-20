'use client';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <div className='flex gap-3'>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={users}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.name} ({option.email})
            </li>
          );
        }}
        size='small'
        style={{ width: '100%' }}
        renderInput={(params) => (
          <TextField {...params} label="" placeholder="" />
        )}
      />
      <button className='p-1 w-36 bg-[#2463e3] text-white rounded-sm'>
        Allow access
      </button>
    </div>
  );
}

const users = [
    { name: 'Winford Asher', email: 'winford.asher@email.com' },
    { name: 'Josia Love', email: 'josia.love@email.com' },
    { name: 'Harrison Curtis', email: 'harrison.curtis@email.com' },
    { name: 'Jermaine Berrett', email: 'jermaine.berrett@email.com' },
    { name: 'Gerald Stephens', email: 'gerald.stephens@email.com' },
    { name: 'Haile Griffiths', email: 'haile.griffiths@email.com' },
    { name: 'Rachael Michael', email: 'rachael.michael@email.com' },
    { name: 'Alex Baker', email: 'alex.baker@email.com' },
    { name: 'Lilly Pyles', email: 'lilly.pyles@email.com' },
    { name: 'Jane Reyes', email: 'jane.reyes@email.com' },
    { name: 'Peter White', email: 'peter.white@email.com' },
    { name: 'Sophia Lang', email: 'sophia.lang@email.com' },
    { name: 'Lucas Brown', email: 'lucas.brown@email.com' },
    { name: 'Emma Taylor', email: 'emma.taylor@email.com' },
    { name: 'Oliver Davis', email: 'oliver.davis@email.com' },
  ];