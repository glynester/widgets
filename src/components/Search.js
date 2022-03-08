import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search=()=>{
  const [term, setTerm]=useState('programming');
  const [results, setResults]=useState([]);
  // console.log("This runs with every term render");
  useEffect(()=>{
    // console.log("All renders");
   const search=async()=>{
    const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
      params: {
        action: "query",
        list: "search",
        format: "json",
        origin: "*",
        srsearch: term
      }
    });
    setResults(data.query.search);
    console.log("result=>",results);
   }
  //  if (term){ search(); }  // Only search if not blank.
  search()
  },[term])
  const updateTerm=(value)=>{
    setTerm(value);
    // console.log("term",term);
  }
  const renderedResults=results.map(result=>{
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    )
  })
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

      <div className="ui celled list">{renderedResults}</div>

    </div>
  )
}

export default Search;