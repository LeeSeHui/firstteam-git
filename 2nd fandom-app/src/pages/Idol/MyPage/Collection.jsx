import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Collection.css';
import BackButton from '../../../components/BackButton';
import fashionImg from '../../../assets/mypage/collection/fashion.png';
import jennieImg from '../../../assets/mypage/collection/jenny.png';
import selfieImg from '../../../assets/mypage/collection/selfie.png';
import goodsImg from '../../../assets/mypage/collection/goods.png';
import groupImg from '../../../assets/mypage/collection/grouppoto.png';
import boyfriendImg from '../../../assets/mypage/collection/conceptshot.png';
import fanartImg from '../../../assets/mypage/collection/fanart.png';
import photoImg from '../../../assets/mypage/collection/poto.png';



const Collection = () => {
  const navigate = useNavigate();

  const handlePlusClick = () => {
    console.log('플러스 버튼 클릭됨');
  };

  return (
    <div className="container">
    <BackButton label="마이 컬렉션" onPlusClick={handlePlusClick} />

    <div className="collection-grid">
        {/* 상단 4개 */}
        <div className="collection-item">
          <img src={fashionImg} alt="fashion" />
          <div className="title">FASHION</div>
          <div className="count">핀 10개</div>
        </div>
        <div className="collection-item">
          <img src={jennieImg} alt="jennie" />
          <div className="title">JENNIE</div>
          <div className="count">핀 28개</div>
        </div>
        <div className="collection-item">
          <img src={selfieImg} alt="selfie" />
          <div className="title">셀피</div>
          <div className="count">핀 528개</div>
        </div>
        <div className="collection-item">
          <img src={goodsImg} alt="goods" />
          <div className="title">GOODS</div>
          <div className="count">핀 5개</div>
        </div>
      </div>

     <p className="subtitle">Nevie 추천 컬렉션</p>
      <div className="collection-grid">
        <div className="collection-item">
          <img src={groupImg} alt="group" />
          <div className="overlay-text">단체 사진</div>
        </div>
        <div className="collection-item">
          <img src={boyfriendImg} alt="boyfriend" />
          <div className="overlay-text">남친짤</div>
        </div>
        <div className="collection-item">
          <img src={fanartImg} alt="fanart" />
          <div className="overlay-text">팬아트</div>
        </div>
        <div className="collection-item">
          <img src={photoImg} alt="real" />
          <div className="overlay-text">직찍 모음</div>
        </div>
      </div>
    </div>
  );
};

export default Collection;