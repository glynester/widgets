import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const Translate = () => {
  const [language, setLanguage]=useState(options[0]);
  const [text,setText]=useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text { window.location.hostname!=="localhost"?"(NOTE - The google translate API only works from 'localhost')":''}</label>
          <input value={text} onChange={ (e)=>setText(e.target.value) } />
        </div>
      </div>
      <Dropdown 
        label="Select a Language"
        options={options}
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

const options=[
  { label: 'Afrikaans', value: 'af'},
  { label: 'Albanian', value: 'sq'},
  { label: 'Amharic', value: 'am'},
  { label: 'Arabic', value: 'ar'},
  { label: 'Armenian', value: 'hy'},
  { label: 'Azerbaijani', value: 'az'},
  { label: 'Basque', value: 'eu'},
  { label: 'Belarusian', value: 'be'},
  { label: 'Bengali', value: 'bn'},
  { label: 'Bosnian', value: 'bs'},
  { label: 'Bulgarian', value: 'bg'},
  { label: 'Catalan', value: 'ca'},
  { label: 'Cebuano', value: 'ceb'},
  { label: 'Chinese (Simplified)', value: 'zh-CN'},
  { label: 'Chinese (Traditional)', value: 'zh-TW'},
  { label: 'Corsican', value: 'co'},
  { label: 'Croatian', value: 'hr'},
  { label: 'Czech', value: 'cs'},
  { label: 'Danish', value: 'da'},
  { label: 'Dutch', value: 'nl'},
  { label: 'English', value: 'en'},
  { label: 'Esperanto', value: 'eo'},
  { label: 'Estonian', value: 'et'},
  { label: 'Finnish', value: 'fi'},
  { label: 'French', value: 'fr'},
  { label: 'Frisian', value: 'fy'},
  { label: 'Galician', value: 'gl'},
  { label: 'Georgian', value: 'ka'},
  { label: 'German', value: 'de'},
  { label: 'Greek', value: 'el'},
  { label: 'Gujarati', value: 'gu'},
  { label: 'Haitian Creole', value: 'ht'},
  { label: 'Hausa', value: 'ha'},
  { label: 'Hawaiian', value: 'haw'},
  { label: 'Hebrew', value: 'he'},
  { label: 'Hindi', value: 'hi'},
  { label: 'Hmong', value: 'hmn'},
  { label: 'Hungarian', value: 'hu'},
  { label: 'Icelandic', value: 'is'},
  { label: 'Igbo', value: 'ig'},
  { label: 'Indonesian', value: 'id'},
  { label: 'Irish', value: 'ga'},
  { label: 'Italian', value: 'it'},
  { label: 'Japanese', value: 'ja'},
  { label: 'Javanese', value: 'jv'},
  { label: 'Kannada', value: 'kn'},
  { label: 'Kazakh', value: 'kk'},
  { label: 'Khmer', value: 'km'},
  { label: 'Kinyarwanda', value: 'rw'},
  { label: 'Korean', value: 'ko'},
  { label: 'Kurdish', value: 'ku'},
  { label: 'Kyrgyz', value: 'ky'},
  { label: 'Lao', value: 'lo'},
  { label: 'Latvian', value: 'lv'},
  { label: 'Lithuanian', value: 'lt'},
  { label: 'Luxembourgish', value: 'lb'},
  { label: 'Macedonian', value: 'mk'},
  { label: 'Malagasy', value: 'mg'},
  { label: 'Malay', value: 'ms'},
  { label: 'Malayalam', value: 'ml'},
  { label: 'Maltese', value: 'mt'},
  { label: 'Maori', value: 'mi'},
  { label: 'Marathi', value: 'mr'},
  { label: 'Mongolian', value: 'mn'},
  { label: 'Myanmar (Burmese)', value: 'my'},
  { label: 'Nepali', value: 'ne'},
  { label: 'Norwegian', value: 'no'},
  { label: 'Nyanja (Chichewa)', value: 'ny'},
  { label: 'Odia (Oriya)', value: 'or'},
  { label: 'Pashto', value: 'ps'},
  { label: 'Persian', value: 'fa'},
  { label: 'Polish', value: 'pl'},
  { label: 'Portuguese (Portugal, Brazil)', value: 'pt'},
  { label: 'Punjabi', value: 'pa'},
  { label: 'Romanian', value: 'ro'},
  { label: 'Russian', value: 'ru'},
  { label: 'Samoan', value: 'sm'},
  { label: 'Scots Gaelic', value: 'gd'},
  { label: 'Serbian', value: 'sr'},
  { label: 'Sesotho', value: 'st'},
  { label: 'Shona', value: 'sn'},
  { label: 'Sindhi', value: 'sd'},
  { label: 'Sinhala (Sinhalese)', value: 'si'},
  { label: 'Slovak', value: 'sk'},
  { label: 'Slovenian', value: 'sl'},
  { label: 'Somali', value: 'so'},
  { label: 'Spanish', value: 'es'},
  { label: 'Sundanese', value: 'su'},
  { label: 'Swahili', value: 'sw'},
  { label: 'Swedish', value: 'sv'},
  { label: 'Tagalog (Filipino)', value: 'tl'},
  { label: 'Tajik', value: 'tg'},
  { label: 'Tamil', value: 'ta'},
  { label: 'Tatar', value: 'tt'},
  { label: 'Telugu', value: 'te'},
  { label: 'Thai', value: 'th'},
  { label: 'Turkish', value: 'tr'},
  { label: 'Turkmen', value: 'tk'},
  { label: 'Ukrainian', value: 'uk'},
  { label: 'Urdu', value: 'ur'},
  { label: 'Uyghur', value: 'ug'},
  { label: 'Uzbek', value: 'uz'},
  { label: 'Vietnamese', value: 'vi'},
  { label: 'Welsh', value: 'cy'},
  { label: 'Xhosa', value: 'xh'},
  { label: 'Yiddish', value: 'yi'},
  { label: 'Yoruba', value: 'yo'},
  { label: 'Zulu', value: 'zu'},
]