import React, { useRef } from 'react'
import Editor from '@monaco-editor/react'
import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import { MonacoBinding } from 'y-monaco'


function EditorWindow({Language, RoomId, UserName}) {

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco){
      editorRef.current = editor //listining to the editor when it mounts

      const doc = new Y.Doc(); //creating the shared object

      const provider = new WebrtcProvider(`${RoomId}`,doc); //listing to changes in oarticular rooms
      const type = doc.getText("monaco"); // getting what our editor is showing

      const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness)
  }

  return (

    <>
        <Editor
            height="85vh"
            width={`100%`} 
            theme='vs-dark'
            language={Language}
            onMount={handleEditorDidMount}
        />
    </>
  )
}

export default EditorWindow