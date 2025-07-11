import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/Backbutton';

import Img1 from '../../assets/fashionimg.png';
import Img2 from '../../assets/fashionproduct.png';
import Img3 from '../../assets/fashiondetail1.png';
import Img4 from '../../assets/fashiondetail2.png';
import Img5 from '../../assets/fashiondetail3.png';
import Img6 from '../../assets/fashiondetail4.png';
import Img7 from '../../assets/fashiondetail5.png';
import Img8 from '../../assets/fashiondetail6.png';
import Img9 from '../../assets/fashiondetail7.png';
import Img10 from '../../assets/fashiondetail8.png';
import Img11 from '../../assets/fashiondetail9.png';
import Img12 from '../../assets/fashiondetail10.png';

const imageMap = {
  1: {
    title: '지드래곤 공항패션 모자 정보',
    date: '2025.07.04',
    images: [Img1, Img2],
  },
  2: {
    title: '하니 메이크업',
    date: '2025.07.01',
    images: [Img3, Img4],
  },
  3: {
    title: '제니 패션 정보',
    date: '2025.07.02',
    images: [Img5, Img6],
  },
  4: {
    title: '나연 스타일 정보',
    date: '2025.07.03',
    images: [Img7, Img8],
  },
  5: {
    title: '안유진 데일리룩',
    date: '2025.07.04',
    images: [Img9, Img10],
  },
  6: {
    title: '조이 패션 정보',
    date: '2025.07.05',
    images: [Img11, Img12],
  },
};

const FashionDetail = () => {
  const { id } = useParams();
  const detail = imageMap[id];

  if (!detail) return <div>잘못된 접근입니다.</div>;

  return (
    <div className="fashion-page">
      <header className="fashion-header">
        <BackButton to="/fashion" />
        <h2>패션 상세</h2>
      </header>

      <div className="fashion-detail-content">
        <p className="date">{detail.date}</p>
        <h3 className="title">{detail.title}</h3>

        <div className="fashion-detail-images">
          {detail.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`상세 이미지 ${idx + 1}`}
              className="detail-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FashionDetail;
