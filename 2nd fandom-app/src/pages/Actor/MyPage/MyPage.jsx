import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useNickname from '../../../contexts/useNickname';
import { useTheme } from '../../../contexts/ThemeContext';
import './MyPage.css';
import BackButton from '../../../components/BackButton';
import starlogo from '../../../assets/mypage/starlogo.png';
import video1 from '../../../assets/mypage/video1.png';
import levelbar from '../../../assets/mypage/levelbar.png';
import iconCollection from '../../../assets/mypage/collection.png';
import iconPayment from '../../../assets/mypage/payment.png';
import iconMedia from '../../../assets/mypage/media.png';
import iconSetting from '../../../assets/mypage/setting.png';
import challengeImg1 from '../../../assets/mypage/challengeimg1.png';
import challengeImg2 from '../../../assets/mypage/challengeimg2.png';
import iconYoutube from '../../../assets/mypage/youtube.png';
import iconInsta from '../../../assets/mypage/instagram.png';
import iconX from '../../../assets/mypage/x.png';
import iconTiktok from '../../../assets/mypage/tiktok.png';
import nicknameEdit from '../../../assets/mypage/nicknameedit.png';

const MyPage = () => {
  const navigate = useNavigate();
 const { nickname, updateNickname } = useNickname();
  const { darkMode, toggleTheme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(nickname);

  const handleSave = () => {
  updateNickname(tempName);
  setIsEditing(false);
};
  return (
    <div className="container">
      <BackButton label="마이페이지" />

      <div className='intro'>
        <p className='mypage-nickname'>
          {isEditing ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
              className="nickname-input"
            />
          ) : (
            <>
              {nickname}님
              <button onClick={() => {
                setTempName(nickname);
                setIsEditing(true);
              }} className="edit-btn">
                <img src={nicknameEdit} alt="닉네임 수정" className="edit-icon" />
              </button>
            </>
          )}
        </p>
        <p className="text">오늘도 같이 덕질 해볼까요?</p>
        <p className='point'>
          <img className='star-logo' src={starlogo} alt="star" />
          <span>보유 포인트 : 180</span>
        </p>
      </div>

      <div className="video-box">
        <img src={video1} alt="video" />
      </div>

      <div className="challenge-section">
        <div className="day">D+160</div>
        <p>
          {nickname}님, 오늘의 챌린지를 통해<br />목표에 달성해보아요!
        </p>
        <span>별별이 L.1</span>
        <img src={levelbar} alt="level bar" />
        <span>조금만 더 가면 Lv.2에 달성해요</span>
      </div>

      <div className="category-section">
        <h3 className="category-title">Category</h3>

        <button onClick={() => navigate('/idol/mypage/collection')}>
          <img src={iconCollection} alt="컬렉션 아이콘" className="category-icon" />
          <span className="category-text">나의 컬렉션</span>
          <span className="arrow">›</span>
        </button>

        <button onClick={() => navigate('/idol/mypage/payment')}>
          <img src={iconPayment} alt="결제 아이콘" className="category-icon" />
          <span className="category-text">결제내역(멤버십관리)</span>
          <span className="arrow">›</span>
        </button>

        <button onClick={() => navigate('/idol/mypage/media')}>
          <img src={iconMedia} alt="미디어 아이콘" className="category-icon" />
          <span className="category-text">최근 본 미디어</span>
          <span className="arrow">›</span>
        </button>

        <button className="setting-button">
          <img src={iconSetting} alt="설정 아이콘" className="category-icon" />
          <span className="category-text">어플설정(다크모드 알림 설정)</span>
          <div className="toggle-switch">
            <span
              className={`toggle-option ${darkMode ? 'active' : ''}`}
              onClick={() => !darkMode && toggleTheme()}
            >
              on
            </span>
            <span
              className={`toggle-option ${!darkMode ? 'active' : ''}`}
              onClick={() => darkMode && toggleTheme()}
            >
              off
            </span>
          </div>
        </button>
      </div>

      <div className="challenge-button-section">
        <h3 className="category-title">Challenge</h3>
        <button className="challenge-button" onClick={() => navigate('/idol/home/vote')}>
          <img src={challengeImg1} alt="챌린지 이미지" className="challenge-vote" />
          <div className="voteBox">
            <p className="top">레벨업 하고</p>
            <p className="bottom">내 아티스트에게 투표하세요!</p>
          </div>
          <span className="botton">투표하기</span>
        </button>
        <button className="challenge-button" onClick={() => navigate('/idol/home/quiz')}>
          <img src={challengeImg2} alt="챌린지 이미지" className="challenge-Quiz" />
          <div className="QuizBox">
            <p className="top">퀴즈 풀고</p>
            <p className="bottom">포인트 받아가세요!</p>
          </div>
          <span className="botton">퀴즈풀기</span>
        </button>
      </div>

      <div className="footer">
        <div className="footer-links">
          <span>이용약관</span>
          <span>서비스운영정책</span>
          <span>회사소개</span>
          <span>로그아웃</span>
          <span>아동 및 청소년 보호정책</span>
          <span>개인정보처리방침</span>
          <span>고객센터</span>
        </div>

        <div className="footer-info">
          <p>
            <span>뉴비컴퍼니 사업자 정보</span>
            <span className="divider">전화번호 +82 1599-0712</span>
          </p>
          <p>상호 Nuvie Company Inc. | 대표자 김뉴비</p>
          <p>E-Mail nuvie@gmail.com</p>
          <p>주소 초대로77길 41 대동2빌딩 9층</p>
          <p>사업자등록번호 221-72-549</p>
        </div>

        <div className="footer-sns">
          <img src={iconYoutube} alt="유튜브" />
          <img src={iconInsta} alt="인스타그램" />
          <img src={iconX} alt="X" />
          <img src={iconTiktok} alt="틱톡" />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
