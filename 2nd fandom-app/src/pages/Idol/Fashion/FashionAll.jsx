import React from 'react';
import FashionSection from '../../../components/FashionSection';

import jennie1 from '../../../assets/fashion/jenny1.png';
import jennie2 from '../../../assets/fashion/jenny2.png';
import jennie3 from '../../../assets/fashion/jenny3.png';
import jennie1_sub from '../../../assets/fashion/jenny1_sub.png';
import jennie2_sub from '../../../assets/fashion/jenny2_sub.png';
import jennie3_sub from '../../../assets/fashion/jenny3_sub.png';

import gd1 from '../../../assets/fashion/gd1.png';
import gd2 from '../../../assets/fashion/gd2.png';
import gd3 from '../../../assets/fashion/gd3.png';
import gd1_sub from '../../../assets/fashion/gd1_sub.png';
import gd2_sub from '../../../assets/fashion/gd2_sub.png';
import gd3_sub from '../../../assets/fashion/gd3_sub.png';

import joy1 from '../../../assets/fashion/joy1.png';
import joy2 from '../../../assets/fashion/joy2.png';
import joy3 from '../../../assets/fashion/joy3.png';
import joy1_sub from '../../../assets/fashion/joy1_sub.png';
import joy2_sub from '../../../assets/fashion/joy2_sub.png';
import joy3_sub from '../../../assets/fashion/joy3_sub.png';

const FashionAll = () => {
  const jennieCards = [
    {
      image: jennie1,
      title: '블랙핑크 제니\n메이크업 정보 모음',
      tag: ['샤넬 루쥬 알뤼르 벨벳','56,000원'],
      subImages: [
        {
          img: jennie1_sub,
          name: '샤넬 루쥬 알뤼르 벨벳',
          detail: '51 레전 데이트',
          price: '56,000원',
          review: 130
        }
      ]
    },
    {
      image: jennie2,
      title: '블랙핑크 제니\n메이크업 정보 모음',
      subImages: [
        {
          img: jennie2_sub,
          name: '입생로랑 루쥬 볼륍떼 샤인',
          detail: '95 코랄 핑크',
          price: '52,000원',
          review: 98
        }
      ]
    },
    {
      image: jennie3,
      title: '블랙핑크 제니\n메이크업 정보 모음',
      subImages: [
        {
          img: jennie3_sub,
          name: '맥 파우더 키스 립스틱',
          detail: '몰 잇 오버',
          price: '34,000원',
          review: 67
        }
      ]
    }
  ];

  const gdCards = [
    {
      image: gd1,
      title: '지드래곤\n패션 정보 모음',
      subImages: [
        {
          img: gd1_sub,
          name: '맥 G-DRAGON Power Ball Cap',
          detail: 'White',
          price: '215,000원',
          review: 67
        }
      ]
    },
    {
      image: gd2,
      title: '지드래곤\n패션 정보 모음',
      subImages: [
        {
          img: gd2_sub,
          name: '엘피 버지니아 메리 제인',
          detail: 'black',
          price: '343,000원',
          review: 130
        }
      ]
    },
    {
      image: gd3,
      title: '지드래곤\n패션 정보 모음',
      subImages: [
        {
          img: gd3_sub,
          name: 'Jonas Wood X Louis Vuitton Scarf',
          detail: 'Light blue',
          price: '215,000원',
          review: 120
        }
      ]
    }
  ];

  const joyCards = [
    {
      image: joy1,
      title: '조이 인스타 속\n데일리룩 모음',
      subImages: [
        {
          img: joy1_sub,
          name: '스컬프티 Farm Corset Top',
          detail: 'black',
          price: '98,000원',
          review: 120
        }
      ]
    },
    {
      image: joy2,
      title: '조이 인스타 속\n데일리룩 모음',
      subImages: [
        {
          img: joy2_sub,
          name: 'Jacquemus Le Chiquito Handbag',
          detail: 'Light blue',
          price: '$780 (약 1,075,600원)',
          review: 130
        }
      ]
    },
    {
      image: joy3,
      title: '조이 인스타 속\n데일리룩 모음',
      subImages: [
        {
          img: joy3_sub,
          name: 'PROJEKT PRODUKT',
          detail: 'AU10 C1WG',
          price: '295,000원',
          review: 120
        }
      ]
    }
  ];

  return (
    <>
      <FashionSection cards={jennieCards} />
      <FashionSection cards={gdCards} />
      <FashionSection cards={joyCards} />
    </>
  );
};

export default FashionAll;
