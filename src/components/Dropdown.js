import React from 'react';

const Dropdown=({options, onSelectedChange, selected})=>{
  const renderedOptions=options.map(option=>{
    if (option.value === selected.value) { return null; }
    return (
      <div 
        key={option.value} 
        className="item"
        onClick={()=>onSelectedChange(option)} 
      >
        {option.label}
      </div>
    )
  })
  return (
    <div className="ui form">
      <div classname="field">
        <label className="label">
          Select a colour
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">
            {renderedOptions}             
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown