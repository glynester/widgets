import React, { useState, useEffect, useRef } from 'react';

const Dropdown=({options, onSelectedChange, selected})=>{
  const [open, setOpen]=useState(false);
  const ref = useRef();

  useEffect(()=>{
    document.body.addEventListener('click',(event)=>{
      // console.log(event.target);
      // console.log('Body click!!!');
      if (ref.current.contains(event.target)){
        return;
      }
      setOpen(false);
    },{ capture: true })
  },[]);    // [] = only want this to run once.

  const renderedOptions=options.map(option=>{
    if (option.value === selected.value) { return null; }
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={()=>{
          // console.log('Item click!!!');
          onSelectedChange(option)
        }} 
      >
        {option.label}
      </div>
    )
  })
  // console.log("ref",ref.current);
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">
          Select a colour
        </label>
        <div onClick={()=>{
            // console.log('Dropdown click!!!');
            setOpen(!open);
          }} className={`ui selection dropdown ${open?'visible active':''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open?'visible transition':''}`}>
            {renderedOptions}             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown