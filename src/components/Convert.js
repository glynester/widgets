import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Convert=({language, text})=>{
  console.log("API==>",process.env.NODE_ENV);
  const [translated, setTranslated]=useState('');
  const [debouncedText, setDebouncedText]=useState(text);

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setDebouncedText(text);
    },500);
    // cleanup function.
    return ()=>{
      clearTimeout(timerId);
    }
  },[text]);

  useEffect(()=>{
    // console.log("New language/text");
    // 2nd arg empty coz nothing to be sent in body
    const doTranslation=async()=>{
      const res=await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
      params: {
        q: debouncedText,   // change from 'text'
        target: language.value, 
        key: process.env.REACT_APP_GOOGLE_TRANSLATE_API
      } 
    })
    setTranslated(res.data.data.translations[0].translatedText)
    }
    doTranslation();
  },[language,debouncedText]); // change from 'text'

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert;

