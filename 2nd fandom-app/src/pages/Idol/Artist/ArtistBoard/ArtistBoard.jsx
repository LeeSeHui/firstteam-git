import React, { useState } from 'react';
import './ArtistBoard.css';
import ArtistSection from '../../../../components/ArtistSection';

import herin from '../../../../assets/artist-select/herin.png';
import check from '../../../../assets/home/check.png';

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

const initialComments = [
  { username: { nickname: '팬1' }, message: '언니 너무 예뻐요!' },
  { username: { nickname: '팬2' }, message: '공연 화이팅!' },
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
    photo03: photo02_2
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
    photo03: photo03_2
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
    photo03: photo04_2
  },
];

const ArtistBoard = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const totalCommentCount = comments.length;

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updated = [...comments, { username: { nickname: '익명' }, message: newComment }];
    setComments(updated);
    setNewComment('');
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
          totalCommentCount={totalCommentCount}
          onProfileClickPath="/idol/artist/highlight"
        />
      ))}
    </div>
  );
};

export default ArtistBoard;
