import React from 'react';
import Accordion from './components/Accordion';

const items=[
  {title: 'What is React?',content: 'React is a front-end Javascript framework.'},
  {title:'Why use React?',content:'React is a favourite JS library amongst engineers.'},
  {title:'How do you use React?',content:'You use React by creating components'}
]

export default ()=>{
  return (
    <div>
      <h1>Widgets App</h1>
      <Accordion items={items}/>
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