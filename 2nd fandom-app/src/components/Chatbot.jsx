// src/components/Chatbot.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getChatReply } from '../api/openai';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const messagesEndRef = useRef(null);
  const location = useLocation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleOpen = () => {
    setIsOpen(true);
    setMessages([
      { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요? 😊' },
      { sender: 'bot', text: '아래 버튼을 선택하거나 직접 입력해 주세요.' }
    ]);
    setSuggestions(['잔여 포인트 현황', '출석 현황', '투표 현황', '포인트 사용']);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
    setSuggestions([]);
  };

  const handleSend = async (msg = null, isButton = false) => {
    const text = msg || input;
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setLoading(true);
    setSuggestions([]);

    const typingMessage = { sender: 'bot', text: '....' };
    setMessages([...newMessages, typingMessage]);

    try {
      await new Promise((res) => setTimeout(res, 1000));
      const botReply = await getChatReply(text, isButton);
      const updatedMessages = [...newMessages, { sender: 'bot', text: botReply }];
      setMessages(updatedMessages);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: 'bot', text: '에러가 발생했어요 😥' }]);
    } finally {
      setSuggestions(['잔여 포인트 현황', '출석 현황', '투표 현황', '포인트 사용']);
      setLoading(false);
    }

    setInput('');
  };

  // 👇 조건부 렌더링으로 수정한 부분
  return location.pathname === '/idol/home/live' ? null : (
    <div className="chatbot-container">
      {!isOpen ? (
        <button className="chatbot-button" onClick={handleOpen}>
          💬
        </button>
      ) : (
        <div className="chatbot-box">
          <div className="chatbot-header">
            챗봇
            <button className="chatbot-close" onClick={handleClose}>✖</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {suggestions.length > 0 && (
            <div className="chatbot-suggestions">
              {suggestions.map((sug, idx) => (
                <button key={idx} onClick={() => handleSend(sug, true)}>
                  {sug}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="메시지를 입력하세요"
            />
            <button onClick={() => handleSend()}>전송</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
