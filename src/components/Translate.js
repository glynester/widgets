import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import {LANGUAGES_LIST as langs} from '../gbHelperFiles/constants';
import {getRandom} from '../gbHelperFiles/gbHelper';
import { words } from '../gbHelperFiles/randomWords'

const Translate = () => {
  const [language, setLanguage]=useState(getRandom(langs,1)[0]);
  const [text,setText]=useState(words);
  return (
    <div>
      <div className="ui form">
        <div className="five wide field">
          <label>Enter Text { window.location.hostname!=="localhost"?"(NOTE - The google translate API only works from 'localhost')":''}</label>
          <input value={text} onChange={ (e)=>setText(e.target.value) } />
        </div>
      </div>
      <Dropdown 
        label="Select a Language"
        options={langs}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text}/>
    </div>
    
  )

}

export default Translate;