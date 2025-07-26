// ✅ Chatbot.jsx (마스코트 영역이 입력 시 위로 올라가고, 챗봇 닫았다 열면 초기화)
import React, { useState, useRef, useEffect } from 'react';
import mascotImg from '../assets/chatbot.png'; // 마스코트 이미지
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef(null);

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
      return `등록된 아티스트는 '먹짱이'입니다.\n마이페이지에서 변경할 수 있어요.`;
    } else if (lower.includes('시스템')) {
      return `시스템 설정에서는 알림, 테마, 자동로그인 등을 변경할 수 있어요.`;
    } else if (lower.includes('기록')) {
      return `최근 기록은 마이페이지 > 활동내역에서 확인할 수 있어요.`;
    } else {
      return `죄송해요, 아직 해당 질문에 대한 답변은 준비 중이에요!`;
    }
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

  // 타이핑 중 표시
  setTimeout(() => {
    setMessages((prev) => [...prev, { sender: 'bot', text: 'typing', loading: true }]);

    setTimeout(() => {
      setMessages((prev) =>
        prev
          .filter((m) => !(m.loading && m.text === 'typing')) // 타이핑 제거
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
            <button onClick={() => setIsOpen(false)} className="chatbot-close">✖</button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-greeting">
              <p className="chatbot-date">25.07.05 (금)</p>
              <p className="chatbot-greet">먹짱이님, 반가워요!<br/>무엇을 도와 드릴까요?</p>
              <div className="chatbot-mascot">
                <img src={mascotImg} alt="마스코트" />
                <span className="help-badge">HELP!</span>
              </div>
            </div>

            <div className="chat-log">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>
                  {msg.sender === 'user' ? (
                    <div className="user-bubble">
                      <div className="chat-text user-text">{msg.text}</div>
                      <div className="chat-time">09:20</div>
                    </div>
                  ) : (
                    <div className="bot-msg-block" onClick={() => toggleAccordion(i)}>
                      <img src={mascotImg} className="bot-avatar" />
                      <div className={`chat-text bot-text ${msg.expanded ? 'expanded' : 'collapsed'}`}>
                        {msg.text}
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

            <div className="chat-input-area">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="멍처잉아!"
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              />
              <button onClick={() => handleSend(input)}>🎡</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
