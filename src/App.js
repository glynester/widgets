import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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


  return (
    <div>
    {/*    <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown 
        selected={selected} 
        onSelectedChange={setSelected} 
        options={options} 
      />
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>Widgets App</div>
//     )}
// }

// export default App;