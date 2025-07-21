import React from 'react';
import FashionSection from '../../../components/FashionSection';

import hani1 from '../../../assets/fashion/hani1.png';
import hani2 from '../../../assets/fashion/hani2.png';
import hani3 from '../../../assets/fashion/hani3.png';
import hani1_sub from '../../../assets/fashion/hani1_sub.png';
import hani2_sub from '../../../assets/fashion/hani2_sub.png';
import hani3_sub from '../../../assets/fashion/hani3_sub.png';

import lenz1 from '../../../assets/fashion/lenz1.png';
import lenz2 from '../../../assets/fashion/lenz2.png';
import lenz3 from '../../../assets/fashion/lenz3.png';
import lenz1_sub from '../../../assets/fashion/lenz1_sub.png';
import lenz2_sub from '../../../assets/fashion/lenz2_sub.png';
import lenz3_sub from '../../../assets/fashion/lenz3_sub.png';

import jennie1 from '../../../assets/fashion/jenny1.png';
import jennie2 from '../../../assets/fashion/jenny2.png';
import jennie3 from '../../../assets/fashion/jenny3.png';
import jennie1_sub from '../../../assets/fashion/jenny1_sub.png';
import jennie2_sub from '../../../assets/fashion/jenny2_sub.png';
import jennie3_sub from '../../../assets/fashion/jenny3_sub.png';

const Makeup = () => {
  const haniCards = [
    {
      image: hani1,
      title: '뉴진스 하니\n웜톤 메이크업',
      tag: {
        text: 'rom&nd 제로 매트 립...\n13,000원',
        link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000142217',
        position:{top:'250px'}
      },
      subImages: [
        {
          img: hani1_sub,
          name: 'rom&nd 제로 매트 립스틱',
          detail: '03 beige',
          price: '13,000원',
          review: 130,
          link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000142217'
        }
      ]
    },
    {
      image: hani2,
      title: '뉴진스 하니\n웜톤 메이크업',
      tag: {
        text: '3ce 소프트 매트 립스...\n12,000원',
        link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148167',
        position:{top:'230px'}
      },
      subImages: [
        {
          img: hani2_sub,
          name: '3ce 소프트 매트 립스틱',
          detail: 'pink rose',
          price: '12,000원',
          review: 130,
          link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000148167'
        }
      ]
    },
    {
      image: hani3,
      title: '뉴진스 하니\n웜톤 메이크업',
      tag: {
        text: '웨이크메이크 쉬어 블...\n18,000원',
        link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000209762',
        position:{top:'200px'}
      },
      subImages: [
        {
          img: hani3_sub,
          name: '웨이크메이크 쉬어 블러링 립스틱',
          detail: '01 pink beige',
          price: '18,000원',
          review: 130,
          link: 'https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000209762'
        }
      ]
    }
  ];

  const lenzsCards = [
    {
      image: lenz1,
      title: '아이돌 컬러렌즈\n정보 모음',
      tag: {
        text: 'Hapa Kristin 크리스...\n19,000원',
        link: 'https://hapakristin.co.kr/products/h74781/',
        position:{top:'100px'}
      },
      subImages: [
        {
          img: lenz1_sub,
          name: 'Hapa Kristin 크리스틴 원데이 컬러렌즈',
          detail: 'gray',
          price: '19,000원',
          review: 130,
          link: 'https://hapakristin.co.kr/products/h74781/'
        }
      ]
    },
    {
      image: lenz2,
      title: '아이돌 컬러렌즈\n정보 모음',
      tag: {
        text: 'OLENS 글로이티어 컬...\n20,000원',
        link: 'https://o-lens.com/product/20778',
        position:{top:'150px'}
      },
      subImages: [
        {
          img: lenz2_sub,
          name: 'OLENS 글로이티어 컬러렌즈',
          detail: 'gray',
          price: '20,000원',
          review: 110,
          link: 'https://o-lens.com/product/20778'
        }
      ]
    },
    {
      image: lenz3,
      title: '아이돌 컬러렌즈\n정보 모음',
      tag: {
      text: 'OLENS 비비링 원데...\n36,000원',
      link: 'https://o-lens.com/product/20008',
      position:{top:'200px'}
      },
        subImages: [
          {
            img: lenz3_sub,
            name: 'OLENS 비비링 원데이 컬러렌즈',
            detail: 'gray',
            price: '36,000원',
            review: 80,
            link: 'https://o-lens.com/product/20008'
          }
        ]
    }
  ];

  const jennieCards = [
      {
        image: jennie1,
        title: '블랙핑크 제니\n메이크업 정보 모음',
        tag: {
          text: '샤넬 루쥬 알뤼르 벨벳\n56,000원',
          link: 'https://www.chanel.com/kr/makeup/lips/c/5x1x1x31/lipstick/?gad_source=1&gad_campaignid=20289150879&gclid=EAIaIQobChMIsrfVzPPFjgMVMNgWBR3ywzHZEAAYASAAEgLkcPD_BwE',
          position:{top:'200px'}
        },
        subImages: [
          {
            img: jennie1_sub,
            name: '샤넬 루쥬 알뤼르 벨벳',
            detail: '51 레전 데이트',
            price: '59,000원',
            review: 130,
            link: 'https://www.chanel.com/kr/makeup/lips/c/5x1x1x31/lipstick/?gad_source=1&gad_campaignid=20289150879&gclid=EAIaIQobChMIsrfVzPPFjgMVMNgWBR3ywzHZEAAYASAAEgLkcPD_BwE'
          }
        ]
      },
      {
        image: jennie2,
        title: '블랙핑크 제니\n메이크업 정보 모음',
        tag: {
          text: '입생로랑 메이크 미...\n52,000원',
          link: 'https://www.yslbeautykr.com/ko_KR/home',
          position:{top:'300px'}
        },
        subImages: [
          {
            img: jennie2_sub,
            name: '입생로랑 루쥬 볼륍떼 샤인',
            detail: '95 코랄 핑크',
            price: '52,000원',
            review: 98,
            link: 'https://www.yslbeautykr.com/ko_KR/home'
          }
        ]
      },
      {
        image: jennie3,
        title: '블랙핑크 제니\n메이크업 정보 모음',
        tag: {
          text: '입생로랑 메이크 미...\n52,000원',
          link: 'https://www.maccosmetics.co.kr/product/1368/60284/samples/powder-kiss-lipstick',
          position:{top:'300px'}
        },
        subImages: [
          {
            img: jennie3_sub,
            name: '맥 파우더 키스 립스틱',
            detail: '몰 잇 오버',
            price: '43,000원',
            review: 67,
            link: 'https://www.maccosmetics.co.kr/product/1368/60284/samples/powder-kiss-lipstick'
          }
        ]
      }
    ];

  return (
    <>
      <FashionSection cards={haniCards} />
      <FashionSection cards={lenzsCards} />
      <FashionSection cards={jennieCards} />
    </>
  );
};

export default Makeup;
