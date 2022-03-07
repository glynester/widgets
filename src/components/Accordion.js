import React from 'react';

const Accordion = ({items})=>{
  console.log(items);
  const renderedItems=items.map(item=>{
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    
    )
  })
  // return <h1>{items.length}</h1>;
  return <div className="ui styled accordion">
      {renderedItems}
    </div>;
}

export default Accordion;


