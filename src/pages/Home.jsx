import React, { useState } from 'react'
import {v4 as uuidV4} from 'uuid';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Home() {

    const [RoomId, useRoomId] = useState('');
    const [UserName, useUserName] = useState('');
    const navigate = useNavigate(); //to navigate to a route --> this offers 

    const createCodeRoom = (event) => {

        //to prevent refreshing the tab while creating a new room cuz its an <a> tag
        event.preventDefault(); 
        
        const id = `code` + uuidV4(); //create new room id
        useRoomId(id); //set it as using useState
        toast.success('New Code room created');
    }
    

    const enterNewRoom = () => {

      if( !RoomId || !UserName){
        toast.error("Room ID and User Name is Required");
        return;
      }

      toast.dismiss();

      navigate(
        `/codeeditor/${RoomId}`, //To :
        //Options :
        {
          state: {
            UserName : `${UserName}`,
            RoomId : `${RoomId}`,
            }  
        },
      );
      
    }

    const enterPress = (e) => {
      if(e.code === 'Enter'){
        enterNewRoom();
      }
    }
  return (
    <div>
        <input type='text' value={RoomId} onChange={(e) => useRoomId(e.target.value)} onKeyUp={enterPress} placeholder='ROOM'/><br />
        <input type='text' value={UserName} onChange={(e) => useUserName(e.target.value)} onKeyUp={enterPress} placeholder='User Name'/><br />
        <button type='submit' onClick={enterNewRoom} >Join</button><br />
        <span>
            create a room &nbsp;
            <button type='submit' onClick={createCodeRoom}>Create Room</button>
        </span>
    </div>
  )
}

export default Home