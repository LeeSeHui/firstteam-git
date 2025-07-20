import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Collection.css';
import BackButton from '../../../components/BackButton'

  const Collection = () => {
   const navigate = useNavigate();

  return (
   
    <div>
       <BackButton label="마이 컬렉션" />
    
    </div>
  )
}

export default Collection
