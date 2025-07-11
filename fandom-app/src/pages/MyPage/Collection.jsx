import React from 'react'
import BackButton from '../../components/Backbutton'
import collection from '../../assets/collection.png'

const Collection = () => {
  return (
    <div>
        <BackButton />
      <h2>컬렉션</h2>
      <img src={collection} alt="payment" style={{ width: '100%', maxWidth: '480px', marginTop: '20px' }} />
    </div>
  )
}

export default Collection
