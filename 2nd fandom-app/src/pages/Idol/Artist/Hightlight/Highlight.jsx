import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useNickname from '../../../../contexts/useNickname';
import ArtistSection from '../../../../components/ArtistSection';

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
import commentIcon from '../../../../assets/artist/comment.png';

import './Highlight.css';
import '../../../../index.css';

const Highlight = () => {
  const navigate = useNavigate();
  const { nickname } = useNickname();

  const [comments, setComments] = useState([
    { username: { nickname: '팬1' }, message: '언니 너무 예뻐요!' },
    { username: { nickname: '팬2' }, message: '공연 화이팅!' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updated = [...comments, { username: { nickname }, message: newComment }];
    setComments(updated);
    setNewComment('');
  };

  const totalCommentCount = comments.length;

  return (
    <div className="highlight-wrapper">
      {/* 아티스트 이미지 가로 정렬 */}
      <div className="artist-row">
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
        <button
          className="send-btn"
          onClick={() => alert('축하 카드가 전송되었습니다!')}
        >
          축하 카드 전송
        </button>
      </div>

      {/* 공지 */}
      <div className="notice-box">
        <p className="body.light">
          <img src={noticeicon} alt="공지 아이콘" className="notice-icon" />
          [안내] NewJeans Global Fansign... 공지
        </p>
        <p>
          <img src={noticeicon} alt="공지 아이콘" className="notice-icon" />
          NewJeans 일정을 확인해보세요.
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
      <div className="live-replay">
        <p className="live-title">
          <span className="live-red">Live</span> Replay
        </p>

        <img src={live} alt="Live Replay" className="live-thumbnail" />

        <div className="live-header">
          <div className="profile-info">
            <img src={herin} alt="해린 프로필" className="profile-img" />
            <div>
              <p className="nickname">해린 <span className="badge">✔️</span></p>
              <p className="time">07.01. 05:06</p>
            </div>
          </div>

          <p className="live-desc">1주년 기념 라이브 방송 보러오세요~</p>

          <div className="post-footer">
            <div className="like-counts">
              <span><img src={likeIcon} alt="좋아요" className="icon-small" />10K+</span>
              <span><img src={commentIcon} alt="댓글" className="icon-small" />10K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
