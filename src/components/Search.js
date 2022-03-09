import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search=()=>{
  const [term, setTerm]=useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults]=useState([]);
  // console.log("This runs with every term render");
  useEffect(()=>{
    // Queue up a change to "debouncedTerm"
    const timerId =setTimeout(()=>{
      setDebouncedTerm(term);  // This triggers 2nd useEffect fn which runs when debouncedTerm changes.
    },1000);
    // It term changes too quickly, clear the timeout and start another.
    return ()=>{
      clearTimeout(timerId);
    }
  },[term]);      // Runs when term changes.

  useEffect(()=>{
    // console.log("All renders");
   const search=async()=>{
    const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
      params: {
        action: "query",
        list: "search",
        format: "json",
        origin: "*",
        srsearch: debouncedTerm
        // srsearch: term
      }
    });
    setResults(data.query.search);
    console.log("result=>",results);
   };
   search();
// Prevent delay on first search
  //  if (term && !results.length){
  //    search();    // No delay
  //  } else {
  //   const timeoutId=setTimeout(()=>{
  //     if (term){ search(); }  // Only search if not blank.
  //     }
  //   ,1000);
  //   return ()=>{
  //     clearTimeout(timeoutId);
  //   }
  //  }

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