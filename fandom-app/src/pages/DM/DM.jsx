import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DM.css';
import BackButton from '../../components/Backbutton';
import bannerImg from '../../assets/DMartist.PNG'; 
import profile1 from '../../assets/DMartist.PNG'; 
import profile2 from '../../assets/DMartist.PNG';
import profile3 from '../../assets/DMartist.PNG';

const storyProfiles = [
  { name: 'KARINA', time: '2시간전', img: profile1 },
  { name: 'JENNIE', time: '3시간전', img: profile2 },
  { name: 'IU', time: '', img: profile3 },
  { name: 'RIA', time: '', img: profile1 },
];

const artistList = [
  { name: '안유진', eng: 'AHNYUJIN', img: profile1 },
  { name: '장원영', eng: 'JANGWONYOUNG', img: profile2 },
  { name: '예지', eng: 'YEJI', img: profile3 },
  { name: '혜원', eng: 'HYEWON', img: profile1 },
  { name: '지우', eng: 'JIWOO', img: profile2 },
  { name: '배이', eng: 'BAEI', img: profile3 },
  { name: '민니', eng: 'MINNI', img: profile1 },
  { name: '미연', eng: 'MIYEON', img: profile2 },
];

const DM = () => {
  const Nav = useNavigate();

  return (
    <>
      <BackButton to="/home" />
      <div className="dm-container">
        <img src={bannerImg} alt="DM Banner" className="dm-banner" />

        <div className="dm-story-section">
          <h3>Message</h3>
          <div className="dm-story-list">
            {storyProfiles.map((story, idx) => (
              <div key={idx} className="dm-story">
                <img src={story.img} alt={story.name} className="dm-story-img" />
                {story.time && <span className="dm-time">{story.time}</span>}
                <p>{story.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dm-search-tags">
          <input
            type="text"
            placeholder="아티스트의 이름을 입력하세요."
            className="dm-search-input"
          />
          <div className="dm-tags">
            <button>전체</button>
            <button>추천 아티스트</button>
            <button>KATSEYE</button>
            <button>BLACKPINK</button>
            <button>추천 아티스트</button>
          </div>
        </div>

        <div className="dm-artist-list">
          {artistList.map((artist, idx) => (
            <div key={idx} className="dm-artist-card">
              <img src={artist.img} alt={artist.name} className="dm-artist-img" />
              <div className="dm-artist-info">
                <p className="dm-name">{artist.name}</p>
                <p className="dm-name-eng">{artist.eng}</p>
              </div>
              <button className="dm-go-button">바로가기</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DM;
