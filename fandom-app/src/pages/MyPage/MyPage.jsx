import React from 'react';
import { useNavigate } from 'react-router-dom';
import mypageImg from '../../assets/mypage.png'
import './MyPage.css'; // ✅ css 파일 불러오기
import BackButton from '../../components/Backbutton';

const menuItems = [
  { title: '미션 하기', to: '/mission' },
  // { title: '친구 초대', to: '/invite' },
  { title: '컬렉션', to: '/collection' },
  { title: '결제 내역', to: '/payment' },
  { title: '최근 본 미디어', to: '/history' },
  // { title: '어플 설정', to: '/settings' },
  { title: '투표 페이지', to: '/vote' },
];

const MyPage = () => {
  const navigate = useNavigate();

  const handleClick = (to) => {
    if (typeof to === 'number') {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <>
    <BackButton to="/home" />
    <img src={mypageImg} alt="" />
    <div className="mypage-container">
      
      <h2 className="mypage-title">마이페이지</h2>

      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleClick(item.to)}
          className="mypage-button"
        >
          {item.title}
        </button>
      ))}
    </div>
    </>
  );
};

export default MyPage;
