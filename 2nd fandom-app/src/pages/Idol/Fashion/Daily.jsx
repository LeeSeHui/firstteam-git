import React from 'react';
import FashionSection from '../../../components/FashionSection';

import yuzin1 from '../../../assets/fashion/yuzin1.png';
import yuzin2 from '../../../assets/fashion/yuzin2.png';
import yuzin3 from '../../../assets/fashion/yuzin3.png';
import yuzin_sub1 from '../../../assets/fashion/yuzin_sub1.png';
import yuzin_sub2 from '../../../assets/fashion/yuzin_sub2.png';
import yuzin_sub3 from '../../../assets/fashion/yuzin_sub3.png';

import joy1 from '../../../assets/fashion/joy1.png';
import joy2 from '../../../assets/fashion/joy2.png';
import joy3 from '../../../assets/fashion/joy3.png';
import joy1_sub from '../../../assets/fashion/joy1_sub.png';
import joy2_sub from '../../../assets/fashion/joy2_sub.png';
import joy3_sub from '../../../assets/fashion/joy3_sub.png';

import gd1 from '../../../assets/fashion/gd1.png';
import gd2 from '../../../assets/fashion/gd2.png';
import gd3 from '../../../assets/fashion/gd3.png';
import gd1_sub from '../../../assets/fashion/gd1_sub.png';
import gd2_sub from '../../../assets/fashion/gd2_sub.png';
import gd3_sub from '../../../assets/fashion/gd3_sub.png';

const Daily = () => {
  const yuzinCards = [
    {
      image: yuzin1,
      title: '안유진\n데일리룩 정보 모음',
      subImages: [
        {
          img: yuzin_sub1,
          name: 'BEADED TRACK HOODIE IN PIGMENT',
          detail: 'Light gray',
          price: '295,000원',
          review: 130
        }
      ]
    },
    {
      image: yuzin2,
      title: '안유진\n데일리룩 정보 모음',
      subImages: [
        {
          img: yuzin_sub2,
          name: 'lotsyou Ella Blouse ',
          detail: 'white',
          price: '66,000원',
          review: 130
        }
      ]
    },
    {
      image: yuzin3,
      title: '안유진\n데일리룩 정보 모음',
      subImages: [
        {
          img: yuzin_sub3,
          name: 'Mardi Mercredi Flower T-shirt',
          detail: 'black ivory S',
          price: '52,000원',
          review: 130
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

  return (
    <>
      <FashionSection cards={yuzinCards} />
      <FashionSection cards={joyCards} />
      <FashionSection cards={gdCards} />
    </>
  );
};

export default Daily;
