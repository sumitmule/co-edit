import React from 'react'
import Select from 'react-select'
import { languageOptions } from '../constants/languageOptions'


export default function LanguageSelect({onChangeLang}) {
  return (
    <>
        <Select 
            placeholder={`Select Language`}
            options={languageOptions}
            // styles={}
            defaultValue={languageOptions[0]}
            onChange={e => onChangeLang(e)}
        />
    </>
  )
}
