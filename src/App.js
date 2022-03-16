import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import * as ConstsReqd from './gbHelperFiles/constants';
import {getRandom} from './gbHelperFiles/gbHelper';
import Header from './components/Header';

const items=[
  {title: 'What is React?',content: 'React is a front-end Javascript framework.'},
  {title:'Why use React?',content:'React is a favourite JS library amongst engineers.'},
  {title:'How do you use React?',content:'You use React by creating components'}
]

const options= ConstsReqd.COLOURS_LIST;
// [
//   {label:'The colour red', value:'red'},
//   {label:'The colour green', value:'green'},
//   {label:'A shade of blue', value:'blue'}
// ]

// Setting up manual navigation rather than using React-Router
// const showAccordion=()=>{
//   if (window.location.pathname==='/'){
//     return <Accordion items={items} />
//   }
// }

export default ()=>{
  const [selected, setSelected]=useState(getRandom(options,1)[0]);
  // const [selected, setSelected]=useState(options[0]);
  // const [showDropDown, setShowDropdown]=useState(true);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items}/>
      </Route> 
      <Route path='/list'> 
        <Search />
      </Route>
      <Route path='/dropdown'>
        <>
          <Dropdown 
            label="Select a colour"
            selected={selected} 
            onSelectedChange={setSelected} 
            options={options} 
          /> 
            <div className='ui label' 
              style={{color: `${selected.value}`}}>
              {`This text is ${selected.value}`} 
            </div>
        </>
      </Route>
      <Route path='/translate'> 
        <Translate />
      </Route>

      {/* { showAccordion() }
      { showList() }
      { showDropdown() }
      { showTranslate() } */}

      {/* <Accordion items={items}/> */}
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
      {/* <Translate /> */}
    </div>
  )
}