import React, { useState } from 'react';
import './ArtistBoard.css';
import ArtistSection from '../../../../components/ArtistSection';

import herin from '../../../../assets/artist-select/herin.png';
import check from '../../../../assets/Home/check.png';

import feedimg1 from '../../../../assets/artist/artistfeed1.png';
import feedimg2 from '../../../../assets/artist/artistfeed2.png';
import feedimg3 from '../../../../assets/artist/artistfeed3.png';
import feedimg4 from '../../../../assets/artist/artistfeed4.png';

import photo02 from '../../../../assets/haerin-uproad.png';
import photo03 from '../../../../assets/haerin-uproad2.png';
import photo02_1 from '../../../../assets/artist/photo02_1.png';
import photo02_2 from '../../../../assets/artist/photo02_2.png';
import photo03_1 from '../../../../assets/artist/photo03_1.png';
import photo03_2 from '../../../../assets/artist/photo03_2.png';
import photo04_1 from '../../../../assets/artist/photo04_1.png';
import photo04_2 from '../../../../assets/artist/photo04_2.png';

import useNickname from '../../../../contexts/useNickname'; // ✅ 수정한 부분

// ✅ 시간 계산 함수
const getTimeAgo = (timestamp) => {
  const now = new Date();
  const created = new Date(timestamp);
  const diff = Math.floor((now - created) / 1000);

  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
};

// ✅ 기본 댓글에 createdAt 추가
const initialComments = [
  { username: { nickname: 'jeansgood_bb' }, message: '언니 너무 예뻐요!', createdAt: new Date().toISOString() },
  { username: { nickname: 'minjilover' }, message: '공연 화이팅!', createdAt: new Date().toISOString() },
];

const feedData = [
  {
    id: 1,
    profileImage: herin,
    artistName: '해린',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    feedImage: feedimg1,
    photo02,
    photo03,
  },
  {
    id: 2,
    profileImage: herin,
    artistName: '해린',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '안녕하세요 해린입니다\n모두 내일 봐요~💜',
    feedImage: feedimg2,
    photo02: photo02_1,
    photo03: photo02_2,
  },
  {
    id: 3,
    profileImage: herin,
    artistName: '해린',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '오늘은 멤버들이랑 아이스크림을 먹었습니다\n기분이가 조쿤요😆',
    feedImage: feedimg3,
    photo02: photo03_1,
    photo03: photo03_2,
  },
  {
    id: 4,
    profileImage: herin,
    artistName: '해린',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '오늘은 까부는 멤버들 참교육하겠습니다\n사랑의 멤메~💜',
    feedImage: feedimg4,
    photo02: photo04_1,
    photo03: photo04_2,
  },
];

const ArtistBoard = () => {
  const { nickname } = useNickname(); // ✅ 닉네임 사용
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const totalCommentCount = comments.length;

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updated = [
      ...comments,
      {
        username: { nickname },
        message: newComment,
        createdAt: new Date().toISOString(), // ✅ 시간 추가
      },
    ];
    setComments(updated);
    setNewComment('');
  };

  const handleDeleteComment = (indexToDelete) => {
    setComments((prev) => prev.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className="artist-board">
      {feedData.map((item) => (
        <ArtistSection
          key={item.id}
          profileImage={item.profileImage}
          artistName={item.artistName}
          isVerified={item.isVerified}
          verifiedIcon={item.verifiedIcon}
          postTime={item.postTime}
          postText={item.postText}
          feedImage={item.feedImage}
          photo02={item.photo02}
          photo03={item.photo03}
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          handleAddComment={handleAddComment}
          handleDeleteComment={handleDeleteComment} 
          totalCommentCount={totalCommentCount}
          nickname={nickname}
          onProfileClickPath="/idol/artist/highlight"
          getTimeAgo={getTimeAgo} // ✅ 시간 함수 넘김
        />
      ))}
    </div>
  );
};

export default ArtistBoard;
