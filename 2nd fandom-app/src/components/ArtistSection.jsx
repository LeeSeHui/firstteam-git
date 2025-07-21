import React, { useState } from 'react';
import heart from '../assets/home/heart.png'
import text from '../assets/home/text.png'
import './ArtistSection.css'

const ArtistSection = ({
  artistImg,
  artistName,
  time,
  saveIcon,
  mainText,
  photo01,
  photo02,
  photo03,
  checkIcon,
  comments,
  newComment,
  setNewComment,
  handleAddComment,
  totalCommentCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`artistSection Section ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="top">
        <div className="profile" onClick={(e) => e.stopPropagation()}>
          <img src={artistImg} alt="profile" />
          <div className="name">
            <span>
              {artistName} <img src={checkIcon} alt="check" />
            </span>
            <span>{time}</span>
          </div>
        </div>
        <div className="save">
          <img src={saveIcon} alt="save" />
        </div>
      </div>

      <p className="text">
        {mainText.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      <div className="photoWrap">
        {!isExpanded ? (
          <>
            <img src={photo01} alt="photo1" />
            <div className="iconWrap">
              <div className="icon-text">
                <img src={heart} alt="heart" />
                <span>10K+</span>
              </div>

              <div className="icon-text">
                <img src={text} alt="text" />
                <span>10K+</span>
              </div>
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
          <div className="commentInputWrap" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="예쁜 댓글을 입력하세요."
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
  );
};

export default ArtistSection;
