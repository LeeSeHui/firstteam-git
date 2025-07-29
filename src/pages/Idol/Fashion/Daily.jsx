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
      tag: {
      text: 'BEADED TRACK HO...\n295,000원',
      link: 'https://604service.com/OUTERWEAR/?idx=475',
      position:{top:'150px'}
      },
      subImages: [
        {
          img: yuzin_sub1,
          name: 'BEADED TRACK HOODIE IN PIGMENT',
          detail: 'Light gray',
          price: '295,000원',
          review: 130,
          link: 'https://604service.com/OUTERWEAR/?idx=475'
        }
      ]
    },
    {
      image: yuzin2,
      title: '안유진\n데일리룩 정보 모음',
      tag: {
      text: 'lotsyou Ella Blouse\n66,000원',
      link: 'https://lotsyou.co.kr/product/lotsyou-ella-blouse-ivory/1987/category/1/display/2/?srsltid=AfmBOoqnplmzMsBJ_nEKakl7wC86oNTF1gXXsfsgKeYVrwBESP_PRRV4',
      position:{top:'150px'}
      },
      subImages: [
        {
          img: yuzin_sub2,
          name: 'lotsyou Ella Blouse ',
          detail: 'white',
          price: '66,000원',
          review: 130,
          link: 'https://lotsyou.co.kr/product/lotsyou-ella-blouse-ivory/1987/category/1/display/2/?srsltid=AfmBOoqnplmzMsBJ_nEKakl7wC86oNTF1gXXsfsgKeYVrwBESP_PRRV4'
        }
      ]
    },
    {
      image: yuzin3,
      title: '안유진\n데일리룩 정보 모음',
      tag: {
      text: 'Mardi Mercredi Flo...\n52,000원',
      link: 'https://mardimercredi.com/category/tshirt/519/',
      position:{top:'100px'}
      },
      subImages: [
        {
          img: yuzin_sub3,
          name: 'Mardi Mercredi Flower T-shirt',
          detail: 'black ivory S',
          price: '52,000원',
          review: 130,
          link: 'https://mardimercredi.com/category/tshirt/519/'
        }
      ]
    }
  ];

  const joyCards = [
    {
      image: joy1,
      title: '조이 인스타 속\n데일리룩 모음',
      tag: {
        text: '스컬프터 Farm Cor...\n78,400원',
        link: 'https://www.musinsa.com/products/5156581?utm_source=google_shopping&utm_medium=sh&utm_campaign=pmax_ongoing&source=GOSHSAP001&gad_source=1&gad_campaignid=22483694585&gbraid=0AAAAADl2rsLU8_r5kJ0I66yKI_XwLR86s&gclid=Cj0KCQjwhO3DBhDkARIsANxrhTp_hcMm9SN0kRLSjZslDTljKQZ_fGJNbv9GscABMnodux5Cch_OqYQaAtdBEALw_wcB',
        position:{top:'100px'}
      },
      subImages: [
        {
          img: joy1_sub,
          name: '스컬프터 Farm Corset Top',
          detail: 'black',
          price: '78,400원',
          review: 120,
          link: 'https://www.musinsa.com/products/5156581?utm_source=google_shopping&utm_medium=sh&utm_campaign=pmax_ongoing&source=GOSHSAP001&gad_source=1&gad_campaignid=22483694585&gbraid=0AAAAADl2rsLU8_r5kJ0I66yKI_XwLR86s&gclid=Cj0KCQjwhO3DBhDkARIsANxrhTp_hcMm9SN0kRLSjZslDTljKQZ_fGJNbv9GscABMnodux5Cch_OqYQaAtdBEALw_wcB'
        }
      ]
    },
    {
      image: joy2,
      title: '조이 인스타 속\n데일리룩 모음',
      tag: {
        text: 'Jacqumus Le Chiq...\n$780',
        link: 'https://www.jacquemus.com/en_fr/chiquitos-bags',
        position:{top:'120px'}
      },
      subImages: [
        {
          img: joy2_sub,
          name: 'Jacquemus Le Chiquito Handbag',
          detail: 'Light blue',
          price: '$780',
          review: 130,
          link: 'https://www.jacquemus.com/en_fr/chiquitos-bags'
        }
      ]
    },
    {
      image: joy3,
      title: '조이 인스타 속\n데일리룩 모음',
      tag: {
        text: 'PROJEKT PRODUKT\n295,000원',
        link: 'https://www.yslbeautykr.com/ko_KR/home',
        position:{top:'80px'}
      },
      subImages: [
        {
          img: joy3_sub,
          name: 'PROJEKT PRODUKT',
          detail: 'AU10 C1WG',
          price: '295,000원',
          review: 120,
          link: 'https://www.maccosmetics.co.kr/product/1368/60284/samples/powder-kiss-lipstick'
        }
      ]
    }
  ];

  const gdCards = [
    {
      image: gd1,
      title: '지드래곤\n패션 정보 모음',
      tag: {
        text: 'G-DRAGON Power...\n155,000원',
        link: 'https://kream.co.kr/products/449068?srsltid=AfmBOop5Ikm_mjBApRYQ17Om5-FNL2gUfOXws4Vd2OChrI_pbkvy0_qD',
        position:{top:'150px'}
      },
      subImages: [
        {
          img: gd1_sub,
          name: '맥 G-DRAGON Power Ball Cap',
          detail: 'White',
          price: '155,000원',
          review: 67,
          link: 'https://kream.co.kr/products/449068?srsltid=AfmBOop5Ikm_mjBApRYQ17Om5-FNL2gUfOXws4Vd2OChrI_pbkvy0_qD'
        }
      ]
    },
    {
      image: gd2,
      title: '지드래곤\n패션 정보 모음',
      tag: {
        text: '엘피 버지니아 메리 제...\n171,000원',
        link: 'https://kream.co.kr/products/548835?srsltid=AfmBOopS1Dlpz0GNsY2tQ-AQxCW8hHlDjr7Xg8JJn3O8fV7TKlZ2cS6S',
        position:{top:'180px'}
      },
      subImages: [
        {
          img: gd2_sub,
          name: '엘피 버지니아 메리 제인',
          detail: 'black',
          price: '171,000원',
          review: 130,
          link: 'https://kream.co.kr/products/548835?srsltid=AfmBOopS1Dlpz0GNsY2tQ-AQxCW8hHlDjr7Xg8JJn3O8fV7TKlZ2cS6S'
        }
      ]
    },
    {
      image: gd3,
      title: '지드래곤\n패션 정보 모음',
      tag: {
        text: 'Jonas wood X Louis...\nBidding closed',
        link: 'https://www.artsy.net/artist/jonas-wood-x-louis-vuitton',
        position:{top:'150px'}
      },
      subImages: [
        {
          img: gd3_sub,
          name: 'Jonas Wood X Louis Vuitton Scarf',
          detail: 'Light blue',
          price: 'Bidding closed',
          review: 120,
          link: 'https://www.artsy.net/artist/jonas-wood-x-louis-vuitton'
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
