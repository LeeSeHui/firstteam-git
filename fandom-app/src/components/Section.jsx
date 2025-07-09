import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Section.css';

const Section = ({ title, to, children, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <section
      className={className}
      onClick={handleClick}      // section 태그에 클릭 이벤트 추가
      style={{ cursor: to ? 'pointer' : 'default' }} // 클릭 가능하면 포인터 커서
    >
      <h2>{title}</h2>
      <div className="section-sub-buttons">{children}</div>
    </section>
  );
};

export default Section;
