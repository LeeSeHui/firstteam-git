import React, { useState } from 'react';
import ArtistSection from '../../../../components/ArtistSection';
import './Membership.css';

import minji from '../../../../assets/artist-select/minji.png';
import feedimg1 from '../../../../assets/artist/membership1.png';
import feedimg2 from '../../../../assets/artist/membership2.png';
import check from '../../../../assets/home/check.png';
import photo05_1 from '../../../../assets/artist/photo05_1.png';
import photo05_2 from '../../../../assets/artist/photo05_2.png';
import photo06_1 from '../../../../assets/artist/photo06_1.png';
import photo06_2 from '../../../../assets/artist/photo06_2.png';

import lockIcon from "../../../../assets/artist/lock.png";

const feedData = [
  {
    id: 1,
    profileImage: minji,
    artistName: '민지',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    feedImage: feedimg1,
    photo02: photo05_1,
    photo03: photo05_2
  },
  {
    id: 2,
    profileImage: minji,
    artistName: '민지',
    isVerified: true,
    verifiedIcon: check,
    postTime: '07.01. 05:06',
    postText: '멜버른 도착! 내일 공연 잘하고 올게요\n모두 내일 봐요~💜',
    feedImage: feedimg2,
    photo02: photo06_1,
    photo03: photo06_2
  },
];

const Membership = () => {
  const [unlockedFeedIds, setUnlockedFeedIds] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const totalCommentCount = comments.length;

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updated = [...comments, { username: { nickname: '익명' }, message: newComment }];
    setComments(updated);
    setNewComment('');
  };

  const handleUnlock = (id) => {
    if (!unlockedFeedIds.includes(id)) {
      setUnlockedFeedIds([...unlockedFeedIds, id]);
    }
  };

  return (
  <div className="membership-container">
    <div className="membership-feed-wrapper">
      {feedData.map((item) => {
        const isUnlocked = unlockedFeedIds.includes(item.id);

        return (
          <div key={item.id} onClick={() => !isUnlocked && handleUnlock(item.id)}>
            {isUnlocked ? (
              <ArtistSection
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
            ) : (
              <div className="locked-overlay">
                <div className="lock-image-wrap">
                  <img src={lockIcon} alt="자물쇠" className="lock-icon" />
                </div>
                <div className="lock-text">
                  <strong>멤버십 전용 콘텐츠입니다.</strong>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Membership;
