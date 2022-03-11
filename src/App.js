import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items=[
  {title: 'What is React?',content: 'React is a front-end Javascript framework.'},
  {title:'Why use React?',content:'React is a favourite JS library amongst engineers.'},
  {title:'How do you use React?',content:'You use React by creating components'}
]

const options=[
  {label:'The colour red', value:'red'},
  {label:'The colour green', value:'green'},
  {label:'A shade of blue', value:'blue'}
]

export default ()=>{
  const [selected, setSelected]=useState(options[0]);
  // const [showDropDown, setShowDropdown]=useState(true);

  return (
    <div>
      {/*    <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <>
        <Dropdown 
          label="Select a colour"
          selected={selected} 
          onSelectedChange={setSelected} 
          options={options} 
        />
        <div className='ui label' style={{color: `${selected.value}`}}>{`This text is ${selected.value}`} </div>
      </> */}
      <Translate />
    </div>
  )
}