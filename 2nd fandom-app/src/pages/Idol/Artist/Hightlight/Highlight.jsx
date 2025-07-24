import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useNickname from '../../../../contexts/useNickname';
import ArtistSection from '../../../../components/ArtistSection';
import confetti from 'canvas-confetti';

import minji from '../../../../assets/artist-select/minji.png';
import haein from '../../../../assets/artist-select/haein.png';
import hani from '../../../../assets/artist-select/hani.png';
import daniel from '../../../../assets/artist-select/daniel.png';
import herin from '../../../../assets/artist-select/herin.png';

import artist01 from '../../../../assets/home/artist01.png';
import check from '../../../../assets/home/check.png';
import card from '../../../../assets/artist-select/cardsend.png';
import letter from '../../../../assets/artist/heartletter.png';
import vote from '../../../../assets/artist/votebanner.png';
import feedimg1 from '../../../../assets/artist/artistfeed1.png';
import photo02 from '../../../../assets/home/photo02.png';
import photo03 from '../../../../assets/home/photo03.png';
import live from '../../../../assets/artist/livereplay.png';
import noticeicon from '../../../../assets/artist/noticeicon.png';
import likeIcon from '../../../../assets/artist/like.png';
import noLikeIcon from '../../../../assets/artist/nolike.png';
import commentIcon from '../../../../assets/artist/comment.png';

import './Highlight.css';
import '../../../../index.css';

const Highlight = () => {
  const navigate = useNavigate();
  const { nickname } = useNickname();

  const [comments, setComments] = useState([
    { username: { nickname: 'jeansgood_bb' }, message: '언니 너무 예뻐요!' },
    { username: { nickname: 'minjilover' }, message: '공연 화이팅!' },
  ]);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [sent, setSent] = useState(false); // ✅ 전송 상태

  const handleAddComment = () => {
    if (!newComment.trim()) return;
  
    const updated = [
      ...comments,
      {
        username: { nickname },
        message: newComment,
        createdAt: new Date(), // ✅ 요 줄 추가!
      },
    ];
    setComments(updated);
    setNewComment('');
  };

  const handleSendCard = () => {
    // 🎉 컴패티 효과 (이전 방식)
    confetti({
      particleCount: 200,
      spread: 120,
      angle: 90,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FF69B4', '#00e5ff'],
    });
  
    // ✅ 전송 문구 보여주기
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  const totalCommentCount = comments.length;

  return (
    <div className="container-highlight">
      {/* 아티스트 이미지 가로 정렬 */}
      <div className="artist-profile">
        <img src={minji} alt="minji" />
        <img src={haein} alt="haein" />
        <img src={hani} alt="hani" />
        <img src={daniel} alt="daniel" />
        <img src={herin} alt="herin" />
      </div>

      {/* 축하 카드 전송 섹션 */}
      <div className="card-section">
        <img src={card} alt="NewJeans Group" className="card-bg" />
        <img src={letter} alt="Heart Letter" className="heart-letter" />

        {/* ✅ 전송 문구 */}
        {sent && <div className="send-text">전송되었습니다.</div>}

        <button className="send-btn" onClick={handleSendCard}>
          축하 카드 전송
        </button>
      </div>

      {/* 공지 클릭 시 Notice 페이지로 이동 */}
      <div
        className="notice-box"
        onClick={() => navigate('/idol/artist/artist-notice')}
        style={{ cursor: 'pointer' }}
      >
        <p className="body.light">
          <img src={noticeicon} alt="공지 아이콘" className="notice-icon" />
          [안내] NewJeans Global Concert Fansign...
        </p>
        <p>
          <img src={noticeicon} alt="공지 아이콘" className="notice-icon" />
          NewJeans 8월 음악방송 일정을 확인해보세...
        </p>
      </div>

      {/* 투표 배너 */}
      <div className="vote-banner" onClick={() => navigate('/idol/home/vote')}>
        <img src={vote} alt="투표 배너" />
        <div className="vote-content">
          <span className="vote-badge">마감 D-3</span>
          <p className="vote-message">
            이번 여름,<br />뉴진스를 응원해주세요!
          </p>
          <span className="vote-go">투표 바로가기 &gt;</span>
        </div>
      </div>

      {/* 아티스트 피드 카드 */}
      <ArtistSection
        profileImage={artist01}
        artistName="해린"
        isVerified={true}
        verifiedIcon={check}
        postTime="07.01. 05:06"
        postText={`멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜`}
        feedImage={feedimg1}
        photo02={photo02}
        photo03={photo03}
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
        totalCommentCount={totalCommentCount}
        onProfileClickPath="/idol/artist/highlight"
      />

      {/* 라이브 리플레이 */}
      <div className="live-replay" onClick={() => navigate('/idol/home/live')}>
        <p className="live-title">
          <span className="live-red">Live</span> Replay
        </p>

        <img src={live} alt="Live Replay" className="live-thumbnail" />

        <div className="live-header">
          <div className="profile-info">
            <img src={herin} alt="해린 프로필" className="profile-img" />
            <div>
              <p className="nickname">
                해린 <span className="badge">✔️</span>
              </p>
              <p className="time">07.01. 05:06</p>
            </div>
          </div>

          <p className="live-desc">1주년 기념 라이브 방송 보러오세요~</p>

          <div className="post-footer">
            <div className="like-counts">
              <span onClick={() => setLiked(!liked)}>
                <img
                  src={liked ? likeIcon : noLikeIcon}
                  alt="좋아요"
                  className="icon-small"
                />
                10K+
              </span>
              <span>
                <img src={commentIcon} alt="댓글" className="icon-small" />
                10K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
