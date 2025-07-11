import React from 'react';
import BackButton from '../../components/Backbutton';
import bill from '../../assets/bill.png'

const Payment = () => {
  return (
    <div>
      <BackButton />
      <h2>결제내역(멤버십관리)</h2>
      <img src={bill} alt="payment" style={{ width: '100%', maxWidth: '480px', marginTop: '20px' }} />
    </div>
  );
};

export default Payment;
