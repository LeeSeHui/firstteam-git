import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import logo from '../../../assets/Home/logo.png';
import alarm from '../../../assets/Home/alarm.png';
import idol_char from '../../../assets/Home/idol-mypage-char.png';
import artist1 from '../../../assets/Home/artist1.png';
import artist2 from '../../../assets/Home/artist2.png';
import artist3 from '../../../assets/Home/artist3.png';
import plusIcon from '../../../assets/Home/plus.png';
import live01 from '../../../assets/Home/live1.png';
import live02 from '../../../assets/Home/live2.png';
import live03 from '../../../assets/Home/live3.png';
import artist01 from '../../../assets/Home/artist01.png';
import check from '../../../assets/Home/check.png';
import save from '../../../assets/Home/save.png';
import photo01 from '../../../assets/Home/photo01.png';
import photo02 from '../../../assets/Home/photo02.png';
import photo03 from '../../../assets/Home/photo03.png';
import thumb1 from '../../../assets/Home/youtube01.png';
import thumb2 from '../../../assets/Home/youtube02.png';
import thumb3 from '../../../assets/Home/youtube03.png';

// vote
import vote01 from '../../../assets/Home/vote1.png';
import vote02 from '../../../assets/Home/vote2.png';
import vote03 from '../../../assets/Home/vote3.png';
import vote04 from '../../../assets/Home/vote4.png';

// membership
import membershipCardImg from '../../../assets/Home/membership.png';

import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState([
  { username: "너누구야", message: "❤️ 너무 예뻐요!" },
  { username: "너뭐이야", message: "휴가 잘 다녀오세요! 🌴" },
  { username: "뾰루지소녀", message: "귀척ㅋ 우웩" },
  { username: "말티즈이", message: "GD 오빠보면 눈 깔아라;" },
  { username: "꽥괙이", message: "나보다 못생긴듯ㅋ" },
  { username: "먺짱이", message: "언니 뭐 먹을거야??????????" },
  { username: "종민", message: "세희 금요일 소주 ㄱ??" },
]);
  const [newComment, setNewComment] = useState("");

  const MAX_COMMENTS = 4;

  const AlarmClick = () => navigate('/idol/home/alarm');
  const handleMypageClick = () => navigate('/idol/mypage');
  const handleArtistClick = () => navigate('/idol/artist/highlight');
  const handlePlusClick = () => navigate('/onboarding/select-artist');
  const handleLiveClick = () => navigate('/idol/home/live');
  const handleVoteCardClick = () => navigate("/idol/home/vote");
  const handleMembershipClick = () => navigate("/idol/home/membership");
  const handleQuizClick = () => navigate('/idol/home/quiz');

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newObj = { username: "me", message: newComment };

    let updatedComments = [...comments, newObj];
    if (updatedComments.length > MAX_COMMENTS) {
      updatedComments = updatedComments.slice(1);
    }

    setComments(updatedComments);
    setNewComment("");
  };

  const quizData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `오늘의 QUIZ! 지금 바로 도전하세요`,
    desc: `맞추신분들께는 포인트를 적립해드려요.`,
  }));

  const membershipData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    group: "BTS",
    title: "ARMY\nMEMBERSHIP",
    desc: "RENEWAL!\n지금바로 확인하세요",
    img: membershipCardImg,
    current: `${i + 1}`,
    total: "12",
  }));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className='container'>
      <header>
        <p className="img"><img src={logo} alt="logo" /></p>
        <p className="img" onClick={AlarmClick}><img src={alarm} alt="alarm" /></p>
      </header>

      {/* 마이페이지 */}
      <div className="mypageSection" onClick={handleMypageClick}>
        <div className="left">
          <p>말티즈님, 오늘도 우리 함께 <br /> 행복한 덕질해요! </p>
          <div className="artistButtons">
            <button onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist1} alt="artist1" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist2} alt="artist2" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleArtistClick(); }}>
              <img src={artist3} alt="artist3" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); handlePlusClick(); }}>
              <img src={plusIcon} alt="plus" />
            </button>
          </div>
        </div>
        <div className="right">
          <img src={idol_char} alt="idol character" />
        </div>
      </div>

      {/* 라이브 */}
      <div className="liveSection">
        <p>LIVE NOW!</p>
        <div className="swipe">
          <p className="liveImg" onClick={handleLiveClick}><img src={live01} alt="" /></p>
          <p className="liveImg" onClick={handleLiveClick}><img src={live02} alt="" /></p>
          <p className="liveImg" onClick={handleLiveClick}><img src={live03} alt="" /></p>
        </div>
      </div>

      {/* 아티스트 게시글 */}
      <div
        className={`artistSection ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="top">
          <div className="profile" onClick={(e) => e.stopPropagation()}>
            <img src={artist01} alt="profile" />
            <div className="name">
              <span>JENNIE <img src={check} alt="check" /></span>
              <span>06.28. 03:06</span>
            </div>
          </div>
          <div className="save"><img src={save} alt="save" /></div>
        </div>
        <p className="text">
          여러분~~ 저 휴가왔어요!<br />
          다들 여름 휴가 조심히 다녀오세요!!💜
        </p>

        <div className="photoWrap">
          {!isExpanded ? (
            <>
              <img src={photo01} alt="photo1" />
              <div className="iconWrap">
                <span>🤍 10K+</span>
                <span>💬 10K+</span>
              </div>
            </>
          ) : (
            <>
              <img src={photo02} alt="photo2" />
              <img src={photo03} alt="photo3" />
            </>
          )}
        </div>

        {isExpanded && (
          <div
            className="commentSection"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="commentCount">전체 댓글 {comments.length}</p>
            <div className="comments">
              {comments.map((comment, idx) => (
                <div className="commentRow" key={idx}>
                  <div className="commentText">
                    <span className="username">{comment.username}</span>
                    <span className="message">{comment.message}</span>
                  </div>
                  <span className="heart">🤍</span>
                </div>
              ))}
            </div>
            <div className="commentInputWrap" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="예쁜 댓글을 입력하세요..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddComment();
                }}
              >
                등록
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 유튜브 */}
      <div className="videoSection">
        <p>JUST FOR 먹짱 <span>더보기 &gt;</span></p>
        <div className="videoSwipe">
          <a href="https://www.youtube.com/watch?v=CHp0Kaidr14" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb1} alt="video1" />
            <p>'최초 공개' <br /> NewJeans의 HOT 컴백 무대</p>
          </a>
          <a href="https://www.youtube.com/watch?v=o9DhvbqYzns" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb2} alt="video2" />
            <p>'최초 공개/4K' <br /> G-DRAGON - TOO BAD (feat. Anderson .Paak)</p>
          </a>
          <a href="https://www.youtube.com/watch?v=lmJPeFW75qQ" target="_blank" rel="noopener noreferrer" className="videoCard">
            <img src={thumb3} alt="video3" />
            <p>[입덕직캠] <br />뉴진스 하니직캠 4K 'Hype Boy' @MCOUNTDOWN</p>
          </a>
        </div>
      </div>

      {/* 퀴즈 */}
      <div className="quizSection">
        <Slider {...sliderSettings}>
          {quizData.map((quiz) => (
            <div key={quiz.id} className="quizCard" onClick={handleQuizClick}>
              <h3>{quiz.title}</h3>
              <p>{quiz.desc}</p>
              <img src={idol_char} alt="quiz" />
              <div className="progress">{quiz.id} / {quizData.length}</div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 투표 */}
      <div className="voteSection">
        <div className="swipe vote">
          <div className="voteRow">
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote01} alt="vote1" />
              <div className="voteText"><span>[798회] KBS 뮤직뱅크 <br /> K-Chart 1위 후보 투표</span></div>
            </div>
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote02} alt="vote2" />
              <div className="voteText"><span>7월 첫째주 <br /> 당신의 마음을 울린 아이돌은?</span></div>
            </div>
          </div>
          <div className="voteRow offset">
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote03} alt="vote3" />
              <div className="voteText"><span>케이팝 코스프레 1위는?</span></div>
            </div>
            <div className="voteCard" onClick={handleVoteCardClick}>
              <img src={vote04} alt="vote4" />
              <div className="voteText"><span>[808회] KBS 인기가요 <br /> K-Chart 1위 후보 투표</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 멤버십 */}
      <div className="membershipSection">
        <Slider {...sliderSettings}>
          {membershipData.map((item) => (
            <div key={item.id} className="membershipCard" onClick={handleMembershipClick}>
              <div className="membershipInfo">
                <p className="group">{item.group}</p>
                <h2>
                  {item.title.split(" ").map((word, idx) => (
                    <React.Fragment key={idx}>{word}<br /></React.Fragment>
                  ))}
                </h2>
                <p className="desc">
                  {item.desc.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>{line}<br /></React.Fragment>
                  ))}
                </p>
              </div>
              <div className="membershipImg">
                <img src={item.img} alt="membership card" />
                <div className="indicator">
                  <span className="current">{item.current}</span>
                  <span className="total"> | {item.total}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
