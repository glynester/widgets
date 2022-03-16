import React, {useState} from 'react';

const Accordion = ({items})=>{
  // Array destructuring
  // console.log("XXXX",useState(null))
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick=(index)=>{
    // console.log('Title clicked',index);
    setActiveIndex(index);
  }

  
  const renderedItems=items.map((item,index)=>{
    // active - will add a cLassName 'active' to show or add '' to hide the detail of the item as appropriate.
    const active = index===activeIndex?'active':'';
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    
    )
  })
  // return <h1>{items.length}</h1>;
  return <div className="ui styled accordion">
      {renderedItems}
      {/* <h1>{activeIndex}</h1> */}
    </div>;
}

export default Accordion;


