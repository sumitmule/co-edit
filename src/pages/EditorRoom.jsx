import React, {useState} from 'react'
import LanguageSelect from '../components/LanguageSelect'
import EditorWindow from '../components/EditorWindow'
import { languageOptions } from '../constants/languageOptions'
import { useLocation } from 'react-router-dom'


function EditorRoom() {

  const location = useLocation();
  const getroomid = location.state.RoomId;
  const getuser = location.state.UserName;

  const [Language, setLanguage] = useState(languageOptions[0])

  function onChangeLang(sl) {
    setLanguage(sl);
  };


  return (
    <>
      <LanguageSelect onChangeLang={onChangeLang}/>
      <EditorWindow
        Language={Language.value}
        RoomId={getroomid}
        UserName={getuser}
      />
    </>
  )
}

export default EditorRoom