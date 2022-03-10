import React, {useState, useEffect} from 'react';
import axios from 'axios';
import word from '../gbHelperFiles/randomWords';

console.log("Word in Search", word)

const Search=()=>{
  // const [term, setTerm]=useState('programming');
  const [term, setTerm]=useState(word);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults]=useState([]);
  // console.log("This runs with every term render");
  useEffect(()=>{
    // Queue up a change to "debouncedTerm"
    const timerId =setTimeout(()=>{
      setDebouncedTerm(term);  // This triggers 2nd useEffect fn which runs when debouncedTerm changes.
    },1000);
    // If term changes too quickly, clear the timeout and start another.
    return ()=>{
      clearTimeout(timerId);
    }
  },[term]);      // Runs when term changes.

  useEffect(()=>{
   const search=async()=>{
    const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
      params: {
        action: "query",
        list: "search",
        format: "json",
        origin: "*",
        srsearch: debouncedTerm
      }
    });
    setResults(data.query.search);
    console.log("result=>",results);
   };
   search();
  }, [debouncedTerm]);    //<== NB
  // },[term, results.length])
  const updateTerm=(value)=>{
    setTerm(value);
    // console.log("term",term);
  }
  const renderedResults=results.map(result=>{
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a 
          className="ui button" 
          href={`https://en.wikipedia.org?curid=${result.pageid}`}>See article
          </a>
          </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* {result.snippet} */}
          <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
        </div>
      </div>
    )
  })
  return (
    <div>
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