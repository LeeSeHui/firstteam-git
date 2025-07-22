import React from 'react';
import sampleImg from '../../../assets/dm/img1.png'; // 너가 넣을 실제 이미지로 교체
import BackButton from '../../../components/BackButton';
import './ChatRoom.css'

const chatData = [
  { id: 1, sender: 'JENNIE', type: 'text', content: '블링크 좋은 아침~! 뭐하고 있어?', time: '09:20' },
  { id: 2, sender: 'JENNIE', type: 'text', content: '나는 이제 촬영장 도착!', time: '09:20' },
  { id: 3, sender: 'JENNIE', type: 'text', content: '얼른 뮤비 촬영 끝내고 만나자~😊', time: '09:21' },
  { id: 4, sender: 'JENNIE', type: 'image', content: sampleImg, time: '09:21' },
];

const ChatRoom = () => {
  return (
    <div className="chatroom-container">
      <BackButton label="DM" />

      {/* 채팅 영역 */}
       <div className="chatroom-body">
        {chatData.map((msg) => (
          <div className="chat-bubble" key={msg.id}>
            <img src={sampleImg} alt="profile" className="chat-avatar" />
            <div>
              <div className="chat-sender">
                JENNIE <img src="/icon/check.png" alt="check" className="check-icon" />
              </div>
              {msg.type === 'text' ? (
                <div className="chat-text">{msg.content}</div>
              ) : (
                <div className="chat-image">
                  <img src={msg.content} alt="chat" />
                  <div className="emoji-bar">❤️👍</div>
                </div>
              )}
              <div className="chat-time">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chatroom-input">
        <button className="plus-btn">＋</button>
        <input type="text" placeholder="메시지를 입력하세요" />
        <button className="emoji-btn">😊</button>
      </div>
    </div>
  );
};

export default ChatRoom;
