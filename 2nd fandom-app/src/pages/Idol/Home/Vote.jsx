import React, { useState } from 'react';
import './Vote.css';
import '../../../index.css';
import './../../../components/Popup.css';
// 컴포넌트
import Popup from '../../../components/Popup';
import BackButton from '../../../components/BackButton'
// 이미지
import vote1 from '../../../assets/vote/vote1.png';
import vote2 from '../../../assets/vote/vote2.png';
import vote3 from '../../../assets/vote/vote3.png';
import banner from '../../../assets/vote/voteimg.png';
import popup from '../../../assets/vote/popup.png';


const voteList = [
  {
    id: 1,
    name: 'NewJeans - Attention',
    votes: 884292,
    img: vote1,
  },
  {
    id: 2,
    name: 'IU - Love wins all',
    votes: 549124,
    img: vote2,
  },
  {
    id: 3,
    name: 'aespa - Whiplash',
    votes: 299751,
    img: vote3,
  },
];

const Vote = () => {
  const [selectedVote, setSelectedVote] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleVoteClick = (vote) => {
    setSelectedVote(vote);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedVote(null);
  };

  return (
    <div className="vote-page">
       <BackButton label="투표" />

      <img src={banner} alt="배너" className="vote-banner" />

      <div className="vote-desc">
        <p className="vote-info ">[798회] KBS 뮤직뱅크 K-Chart 1위 후보 주간 투표</p>
        <ul>
          <li className="sub-color">✔ 뮤직뱅크 798회 1위 선정에 Nuvie의 투표 결과 반영</li>
          <li className="sub-color">✔ 1인 1투표 가능</li>
        </ul>
        <p className="vote-date sub-color">2025.07.08 18:00 - 2025.07.10 00:00 KST</p>
      </div>

      <div className="vote-list">
        {voteList.map((item, index) => (
          <div className="vote-card" key={item.id}>
            <img src={item.img} alt={item.name} className="vote-profile" />
            <div className="vote-content2">
              <p className="vote-rank">{index + 1}</p>
              <p className="vote-name">{item.name}</p>
              <p className="vote-count sub-color">{item.votes.toLocaleString()}표</p>
              <div className="vote-bar" style={{'--bar-width': `${(item.votes / voteList[0].votes) * 100}%` }} />
            </div>
            <button className="vote-btn" onClick={() => handleVoteClick(item)}>
              투표
            </button>
          </div>
        ))}
      </div>

      {/* 확인 모달 */}
      {showConfirm && selectedVote && (
        <div className="modalOverlay">
          <div className="modalContent">
            <p className="modal-title">{selectedVote.name}</p>
            <p className="modal-sub">투표 하시겠습니까?</p>
            <div className="modal-btns">
              <button className="cancel-btn" onClick={() => setShowConfirm(false)}>취소</button>
              <button className="confirm-btn" onClick={handleConfirm}>확인</button>
            </div>
          </div>
        </div>
      )}

      {/* 투표 완료 팝업 */}

      {showPopup && (
  <Popup
    type="vote"
    voteImg={popup}
    onConfirm={handleClosePopup}
  />
)}
    </div>

  );
};

export default Vote;
