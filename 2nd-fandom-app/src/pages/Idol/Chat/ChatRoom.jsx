import React, { useEffect, useState } from 'react';
import sampleImg from '../../../assets/dm/img2.png';
import BackButton from '../../../components/BackButton';
import './ChatRoom.css';
import check from '../../../assets/Home/check.png';
import dm_img from '../../../assets/dm/dm_img.png'
import dm_icon from '../../../assets/dm/icon.png'

const ChatRoom = () => {
  const [visibleMessages, setVisibleMessages] = useState(0); // 몇 개 보여줄지

  useEffect(() => {
    const timers = [];

    // 0.5초마다 하나씩 메시지 등장
    for (let i = 1; i <= 4; i++) {
      const timer = setTimeout(() => {
        setVisibleMessages(i);
      }, i * 500); // 0.5초 간격
      timers.push(timer);
    }

    // cleanup
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="chatroom-container">
      <BackButton label="DM" />

      <div className="chatroom-body">
        {/* 메시지 리스트 */}
        {visibleMessages >= 1 && (
          <div className="chat-bubble fade-in">
            <img src={sampleImg} alt="profile" className="chat-avatar" />
            <div className="chat-box">
              <div className="chat-sender">
                JENNIE <img src={check} alt="check" className="check-icon" />
              </div>
              <div className="chat-row">
                <div className="chat-text">블링크 좋은 아침~! 뭐하고 있어?</div>
                <div className="chat-time">09:20</div>
              </div>
            </div>
          </div>
        )}

        {visibleMessages >= 2 && (
          <div className="chat-bubble fade-in">
            <img src={sampleImg} alt="profile" className="chat-avatar" />
            <div className="chat-box">
              <div className="chat-sender">
                JENNIE <img src={check} alt="check" className="check-icon" />
              </div>
              <div className="chat-row">
                <div className="chat-text">나는 이제 촬영장 도착!</div>
                <div className="chat-time">09:20</div>
              </div>
            </div>
          </div>
        )}

        {visibleMessages >= 3 && (
          <div className="chat-bubble fade-in">
            <img src={sampleImg} alt="profile" className="chat-avatar" />
            <div className="chat-box">
              <div className="chat-sender">
                JENNIE <img src={check} alt="check" className="check-icon" />
              </div>
              <div className="chat-row">
                <div className="chat-text">얼른 뮤비 촬영 끝내고 만나자~😊</div>
                <div className="chat-time">09:21</div>
              </div>
            </div>
          </div>
        )}

        {visibleMessages >= 4 && (
          <div className="chat-bubble fade-in">
            <img src={sampleImg} alt="profile" className="chat-avatar" />
            <div className="chat-box">
              <div className="chat-sender">
                JENNIE <img src={check} alt="check" className="check-icon" />
              </div>
              <div className="chat-image">
                <img src={dm_img} alt="chat" className="chat-photo" />
                <div className="chat-time image-time">09:21</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="chatroom-input">
        <button className="circle-btn">＋</button>
        <div className="input-bubble">
          <input type="text" placeholder="메시지를 입력하세요" />
          <button className="emoji-icon"><img src={dm_icon} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
