import React, { useState } from 'react';
import './ArtistSection.css';
import '../index.css';
import { useNavigate } from 'react-router-dom';

import likeIcon from '../assets/artist/like.png';
import noLikeIcon from '../assets/artist/nolike.png';
import commentIcon from '../assets/artist/comment.png';

import tagIcon from '../assets/artist/tag.png';
import dark_tagIcon from '../assets/dark/dark_tagIcon.png';
import tagActiveIcon from '../assets/artist/tag-yellow.png';



import lockIcon from '../assets/artist/lock.png';

// ✅ 시간 표시 함수
const getTimeAgo = (timestamp) => {
  const now = new Date();
  const diff = Math.floor((now - new Date(timestamp)) / 1000);

  if (diff < 60) return '방금 전';
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
};

const ArtistSection = ({
  nickname,
  handleDeleteComment,
  profileImage,
  artistName,
  isVerified,
  verifiedIcon,
  postTime,
  postText,
  feedImage,
  photo02,
  photo03,
  comments,
  newComment,
  setNewComment,
  handleAddComment,
  totalCommentCount,
  onProfileClickPath = '/',
  isLocked = false,
  onUnlock = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const [commentHearts, setCommentHearts] = useState({}); // ✅ 댓글 하트 상태
  const navigate = useNavigate();
  const isDarkMode = document.body.classList.contains('dark');

  
  if (isLocked) {
    return (
      <div className="artistSection locked" onClick={onUnlock}>
        <div className="locked-overlay">
          <img src={lockIcon} alt="잠금 아이콘" className="lock-icon" />
          멤버십 전용 콘텐츠입니다.
        </div>
      </div>
    );
  }

  return (
    <div className={`artistSection Section ${isExpanded ? 'expanded' : ''}`}>
      {/* ✅ 피드 카드 */}
      <div className="feed-card" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="feed-header">
          <div className="profile-info">
            <img
              src={profileImage}
              alt={`${artistName} 프로필`}
              className="profile-img"
              onClick={(e) => {
                e.stopPropagation();
                navigate(onProfileClickPath);
              }}
            />
            <div>
              <p className="nickname">
                {artistName}
                {isVerified && verifiedIcon && (
                  <img src={verifiedIcon} alt="verified" />
                )}
              </p>
              <p className="time">{postTime}</p>
            </div>
          </div>
          <button
            className="bookmark-btn"
            onClick={(e) => {
              e.stopPropagation();
              setBookmarked(!bookmarked);
            }}
          >
            <img
              src={
                bookmarked
                  ? tagActiveIcon
                  : isDarkMode
                    ? dark_tagIcon
                    : tagIcon
              }
              alt="북마크 아이콘"
              className="bookmark-icon"
            />

          </button>
        </div>

        <p className="feed-text">{postText}</p>

        <div className="post-footer">
          <div className="like-counts">
            <span
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
            >
              <img
                src={liked ? likeIcon : noLikeIcon}
                alt="좋아요"
                className="icon-small"
              />
              10K+
            </span>
            <span>
              <img src={commentIcon} alt="댓글" className="icon-small" />10K+
            </span>
          </div>
        </div>

        {!isExpanded ? (
          <div className="feed-images">
            <img src={feedImage} alt="피드" />
          </div>
        ) : (
          <div className="expanded-images">
            <img src={photo02} alt="추가 이미지 1" />
            <img src={photo03} alt="추가 이미지 2" />
          </div>
        )}
      </div>

      {/* ✅ 댓글 영역 */}
      {isExpanded && (
  <div className="commentSection" onClick={(e) => e.stopPropagation()}>
    <p className="commentCount sub-color">전체 댓글 {totalCommentCount}</p>
    <div className="comments sub-color">
      {comments.map((comment, idx) => (
        <div className="commentRow" key={idx}>
          <div className="commentText">
            <div className="comment-meta">
            <span className="username">{comment.username.nickname}</span>
              {comment.createdAt && (
                <span className="created-at sub-color">{getTimeAgo(comment.createdAt)}</span>
              )}

        
{nickname === comment.username.nickname && (
  <button
  className="delete-comment-btn"
  onClick={() => handleDeleteComment(idx)}
>
  삭제
</button>

  
)}
            </div>
            <span className="message">{comment.message}</span>
          </div>
          <span
            className="heart"
            onClick={() =>
              setCommentHearts((prev) => ({
                ...prev,
                [idx]: !prev[idx],
              }))
            }
          >
            {commentHearts[idx] ? '❤️' : '🤍'}
          </span>
        </div>
      ))}
    </div>

    <div className="commentInputWrap">
      <input
        type="text"
        placeholder="예쁜 댓글을 입력해주세요"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>등록</button>
    </div>
  </div>
)}

    </div>
  );
};

export default ArtistSection;
