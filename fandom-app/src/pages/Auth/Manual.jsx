import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import manual1 from '../../assets/manual/manual1.png';
import manual2 from '../../assets/manual/manual2.png';
import manual3 from '../../assets/manual/manual3.png';
import manual4 from '../../assets/manual/manual4.png';

const Manual = () => {
  const images = [manual1, manual2, manual3, manual4];
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < images.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) {
      // 첫 이미지에서 뒤로가기 누르면 로그인 페이지로 이동
      navigate('/login');
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={images[step]}
        alt={`Manual step ${step + 1}`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleBack} style={{ marginRight: '10px' }}>
          뒤로가기
        </button>
        <button onClick={handleNext} disabled={step === images.length - 1}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Manual;