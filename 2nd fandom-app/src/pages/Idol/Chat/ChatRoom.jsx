import React, { useEffect, useRef, useState } from 'react';
import haerinImg from '../../../assets/dm/img4.png';
import sampleImg from '../../../assets/dm/img4.png'; 
import BackButton from '../../../components/BackButton';
import './ChatRoom.css';
import check from '../../../assets/Home/check.png';
import dm_img from '../../../assets/dm/dm_img.png';
import dm_icon from '../../../assets/dm/icon.png';
import dm_plusIcon from '../../../assets/dm/dm-plusIcon.png';

const autoReplies = [
  '오늘도 화이팅!! 💪',
  '버니즈 보고싶다ㅜㅜ 💖'
];

const ChatRoom = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [replyIndex, setReplyIndex] = useState(0);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timers = [];

    for (let i = 1; i <= 4; i++) {
      const timer = setTimeout(() => {
        setVisibleMessages(i);
      }, i * 500);
      timers.push(timer);
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const now = new Date();
    const time = now.toTimeString().slice(0, 5);

    const userMsg = { sender: 'user', text: inputText, time };
    const artistMsg = {
      sender: 'artist',
      text: autoReplies[replyIndex % autoReplies.length],
      time,
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      setMessages(prev => [...prev, artistMsg]);
      setReplyIndex(prev => prev + 1);
    }, 500);
  };

  return (
    <div>
      <div className="chatroom-container">
        <BackButton label="DM" />

        <div className="chatroom-body">
          {/* 초기 메시지 */}
          {visibleMessages >= 1 && (
            <div className="chat-bubble fade-in">
              <img src={haerinImg} alt="profile" className="chat-avatar" />
              <div className="chat-box">
                <div className="chat-sender">
                  HAERIN <img src={check} alt="check" className="check-icon" />
                </div>
                <div className="chat-row">
                  <div className="chat-text">버니즈 좋은 아침~!</div>
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
                   HAERIN <img src={check} alt="check" className="check-icon" />
                </div>
                <div className="chat-row">
                  <div className="chat-text">저는 지금 쉬는시간이에옹</div>
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
                   HAERIN <img src={check} alt="check" className="check-icon" />
                </div>
                <div className="chat-row">
                  <div className="chat-text">화보 예쁘게 찍어서 얼른 보여줄게요 💖</div>
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
                   HAERIN <img src={check} alt="check" className="check-icon" />
                </div>
                <div className="chat-image">
                  <img src={dm_img} alt="chat" className="chat-photo" />
                  <div className="chat-time image-time">09:21</div>
                </div>
              </div>
            </div>
          )}

          {/* 입력 이후 메시지 */}
          {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="chat-bubble fade-in"
                  style={
                    msg.sender === 'user'
                      ? {
                          flexDirection: 'row-reverse',
                          justifyContent: 'flex-end',
                          alignSelf: 'flex-end', // ✅ 추가
                          marginRight: '10px'    // ✅ 완전 오른쪽 정렬
                        }
                      : {}
                  }
            >
              {msg.sender === 'artist' && (
                <img src={haerinImg} alt="profile" className="chat-avatar" />
              )}
              <div className="chat-box">
                <div className="chat-sender">
                  {msg.sender === 'artist' ? 'HAERIN' : ''}{' '}
                  {msg.sender === 'artist' && (
                    <img src={check} alt="check" className="check-icon" />
                  )}
                </div>

                 <div className="chat-row" style={{
                  display: 'flex',
                  flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-end',
                  gap: '6px'
                }}>
                  {/* 시간 위치만 다르게 */}
                  <div className="chat-text">{msg.text}</div>
                  <div className="chat-time">{msg.time}</div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="chatroom-input">
        <button className="circle-btn"><img src={dm_plusIcon} alt="plus" /></button>
        <div className="input-bubble">
          <input
            type="text"
            value={inputText}
            placeholder="메시지를 입력하세요"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="emoji-icon" onClick={handleSend}><img src={dm_icon} alt="send" /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
