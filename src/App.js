import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
  {title: 'What is React?',content: 'React is a front-end Javascript framework.'},
  {title:'Why use React?',content:'React is a favourite JS library amongst engineers.'},
  {title:'How do you use React?',content:'You use React by creating components'}
]

export default ()=>{
  return (
    <div>
    {/*    <Accordion items={items}/> */}
      <Search />
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