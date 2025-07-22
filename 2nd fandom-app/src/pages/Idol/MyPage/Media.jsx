import React from 'react'
import BackButton from '../../../components/BackButton'

const Media = () => {
  return (
    <div className="container">
     <BackButton
  label="최근 본 미디어"
  editText="편집"                      // ✅ editText로 수정
  onEditClick={() => console.log('편집 클릭됨')}   // ✅ onEditClick으로 수정
/>


    </div>
  )
}

export default Media
