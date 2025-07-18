import React from 'react'
import { useNavigate } from 'react-router-dom';


const Chat = () => {
  const navigate = useNavigate();
  return (
    <div>

      <div className="container">
        
      아이돌 DM
      <button onClick={() => navigate('/idol/mypage/media')}>dfdf</button>
      </div>
     
    </div>
  )
}

export default Chat
