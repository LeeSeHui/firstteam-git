import React from 'react';
import sampleImg from '../../../assets/dm/img2.png'; // 프로필 및 이미지 예시
import BackButton from '../../../components/BackButton';
import './ChatRoom.css';
import check from '../../../assets/home/check.png';
import dm_img from '../../../assets/dm/dm_img.png'
import dm_icon from '../../../assets/dm/icon.png'

const ChatRoom = () => {
  return (
    <div className="chatroom-container">
      <BackButton label="DM" />

      {/* 채팅 영역 */}
      <div className="chatroom-body">
        {/* 첫 메시지 */}
        <div className="chat-bubble">
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

        {/* 두 번째 메시지 */}
        <div className="chat-bubble">
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

        {/* 세 번째 메시지 */}
        <div className="chat-bubble">
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

        {/* 이미지 메시지 */}
        <div className="chat-bubble">
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
      </div>

      {/* 입력창 */}
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
