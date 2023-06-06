import EditorRoom from "./pages/EditorRoom"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'


function App() {

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/codeeditor/:RoomId" element={<EditorRoom/>}/>
      </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
