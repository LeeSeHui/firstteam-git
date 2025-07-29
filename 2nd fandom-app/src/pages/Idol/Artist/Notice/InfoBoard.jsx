import React, { useState } from 'react';

import './InfoBoard.css'; // CSS 따로 작성 필요

const noticeData = [
  {
    title: '[안내] NewJeans Fansign event 상세 안내',
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: "[안내] 2025 SEASON'S GREETINGS 25/7 with NewJeans",
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: '[안내] The Face Magazine Photoshoot Behind',
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: '[안내] NewJeans Day On air 2025.07.22 00:00~19:00(KST)',
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: "[안내] 'Bubble Gum' 응원법",
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: '[안내] NewJeans 혜인 건강 및 스케줄 관련 안내',
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  },
  {
    title: "[안내] 'Supernatural' Dance Practice Behind",
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.뉴진스`
  },
  {
    title: '[안내] 아티스트 권익 침해 관련 법적 대응 상황 안내',
    content: `안녕하세요, NewJeans 입니다.\n전 세계 버니즈 여러분을 위한 NewJeans Global Fansign Event 참여 방법 및 일정을 아래와 같이 안내드립니다.\n이번 팬사인회는 팬분들과의 특별한 만남을 위해 마련되었으며, 당첨자 분들께는 비디오 화상 팬사인회 기회가 주어집니다.\n\nHello, This is NewJeans.\nWe are excited to announce the NewJeans Global Fansign Event, created especially for our beloved global Bunnies!\nSelected fans will have the opportunity to join video call fansign with the members of NewJeans.`
  }
];

const InfoBoard = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="notice-list">
      {noticeData.map((item, index) => (
        <div className="notice-item" key={index}>
          <button className="notice-title" onClick={() => toggle(index)}>
            <span>{item.title}</span>
            <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-icon"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <div className="notice-content">
              {item.content.split('\n').map((line, i) => {
                const isEnglish = /[a-zA-Z]/.test(line);
                return (
                  <p key={i} className={isEnglish ? 'en' : 'ko'}>
                    {line}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoBoard;
