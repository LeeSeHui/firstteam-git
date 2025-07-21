import React, { useState } from 'react';
import './ArtistSection.css';
import { useNavigate } from 'react-router-dom';

const ArtistSection = ({
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
  onProfileClickPath = '/', // 기본값 설정
  isLocked = false,
  onUnlock = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

    // 🔒 잠금 처리
    if (isLocked) {
      return (
        <div className="artistSection locked" onClick={onUnlock}>
          <div className="locked-overlay">🔒 멤버십 전용 콘텐츠입니다.</div>
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
                e.stopPropagation(); // 확장 방지
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
          <button className="bookmark-btn">🔖</button>
        </div>

        <p className="feed-text">{postText}</p>

        <div className="post-footer">
          <div className="like-counts">
            <span>💛10K+</span>
            <span>💬10K+</span>
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
          <p className="commentCount">전체 댓글 {totalCommentCount}</p>
          <div className="comments">
            {comments.map((comment, idx) => (
              <div className="commentRow" key={idx}>
                <div className="commentText">
                  <span className="username">{comment.username.nickname}</span>
                  <span className="message">{comment.message}</span>
                </div>
                <span className="heart">🤍</span>
              </div>
            ))}
          </div>

          <div className="commentInputWrap">
            <input
              type="text"
              placeholder="예쁜 댓글을 입력하세요."
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
