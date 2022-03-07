import React, {useState} from 'react';

const Search=()=>{
  const [term, setTerm]=useState('');

  const updateTerm=(value)=>{
    setTerm(value);
    console.log("term",term);
  }

  return (
    <div>
      Search component
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e)=>updateTerm(e.target.value)} className="input" 
          />
        </div>
      </div>
    </div>
  )
}

export default Search;