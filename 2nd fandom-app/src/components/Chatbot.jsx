import React, { useState, useRef, useEffect } from 'react';
import useNickname from '../contexts/useNickname';
import mascotImg from '../assets/mascot.png';
import './Chatbot.css';
import micIcon from '../assets/mic-icon.png'
import X_button from '../assets/onboarding/X_button.png'
import plus from '../assets/chatbot_plusButton.png'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);
  const { nickname } = useNickname();

  const suggestions = [
    '나의 아티스트', '시스템 설정', '캐릭터 레벨업', '출석 현황', '최근 기록'
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes('출석')) {
      return `금주 출석 현황\n3일 연속 출석완료\n\n추가 문의 사항은 아래 버튼 선택 또는 직접 입력해주세요.`;
    } else if (lower.includes('레벨')) {
      return `별별이의 현재 레벨은 3레벨입니다.\n투표와 퀴즈를 통해 포인트를 쌓아보세요!`;
    } else if (lower.includes('아티스트')) {
      return `등록된 아티스트는 'Newjeans' 입니다.\n마이페이지에서 변경할 수 있어요.`;
    } else if (lower.includes('시스템')) {
      return `시스템 설정에서는 알림, 테마, 자동로그인 등을 변경할 수 있어요.`;
    } else if (lower.includes('기록')) {
      return `최근 기록은 마이페이지 > 활동내역에서 확인할 수 있어요.`;
    } else if (lower.includes('이세희바보')) {
      return `지당하신 말씀이네요!!`;
    }
    return `죄송해요, 아직 해당 질문에 대한 답변은 준비 중이에요!`;
  };
  

  const toggleAccordion = (index) => {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === index ? { ...msg, expanded: !msg.expanded } : msg
      )
    );
  };

  const handleSend = (text) => {
    const msg = text.trim();
    if (!msg) return;
    if (!hasInteracted) setHasInteracted(true);

    const botReply = getBotReply(msg);
    setMessages((prev) => [...prev, { sender: 'user', text: msg }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'typing', loading: true }]);
      setTimeout(() => {
        setMessages((prev) =>
          prev
            .filter((m) => !(m.loading && m.text === 'typing'))
            .concat({ sender: 'bot', text: botReply })
        );
      }, 1000);
    }, 300);

    setInput('');
  };

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([]);
    setInput('');
    setHasInteracted(false);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chatbot-floating-btn" onClick={handleOpen}>
          <img src={mascotImg} alt="챗봇 열기" />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span className="chatbot-title">챗봇</span>
            <button onClick={() => setIsOpen(false)} className="chatbot-close"><img src={X_button} alt="" /></button>
          </div>

          <div className="chatbot-body">
            <div className="chat-log">
              <div className="chatbot-greeting">
                <p className="chatbot-date">25.07.05 (금)</p>
                <p className="chatbot-greet">{nickname}님, 반가워요!<br />무엇을 도와드릴까요?</p>
                <div className="chatbot-mascot">
                  <img src={mascotImg} alt="마스코트" />
                </div>
              </div>

              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>
                  {msg.sender === 'user' ? (
                    <div className="user-bubble">
                      <div className="chat-text2 user-text">{msg.text}</div>
                      <div className="chat-time">09:20</div>
                    </div>
                  ) : (
                    <div className="bot-msg-block" onClick={() => toggleAccordion(i)}>
                      <img src={mascotImg} className="bot-avatar" alt="bot" />
                      
                      <div className="bot-content">
                        <span className="bot-name">별별봇</span>
                        <div className={`chat-text bot-text ${msg.expanded ? 'expanded' : 'collapsed'}`}>
                          {msg.text}
                        </div>
                      </div>
                    </div>

                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="suggestions">
              {suggestions.map((item, i) => (
                <button key={i} onClick={() => handleSend(item)}>{item}</button>
              ))}
            </div>
            <div className="chat-input-wrapper">
              <button className="circle-btn plus" onClick={() => alert('추가기능')}>
                <span><img src={plus} alt="" /></span>
              </button>

              <div className="chat-input-area styled">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="메시지를 입력하세요"
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                />
                <button className="circle-btn mic" onClick={() => handleSend(input)}>
                  <img src={micIcon} alt="mic" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
