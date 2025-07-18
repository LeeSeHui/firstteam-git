import { Outlet, NavLink } from 'react-router-dom';
import './Fashion.css'; // 스타일 파일 추가 (선택)
import BackButton from '../../../components/BackButton'

const Fashion = () => {
  return (
    <div className="fashion-container">
      <BackButton to="/idol/home" label="패션" />
      <div class="gradient-border-wrapper">
        <input class="gradient-input" type="text" placeholder="원하는 정보를 검색하세요! (ex. 뉴진스 컴백 메이크업)" />
      </div>
      <div className="fashion-tabs">
        <NavLink to="/idol/fashion/all" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>전체</NavLink>
        <NavLink to="/idol/fashion/makeup" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>메이크업</NavLink>
        <NavLink to="/idol/fashion/daily" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>데일리룩</NavLink>
        <NavLink to="/idol/fashion/airport" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>공항패션</NavLink> 
        <NavLink to="/idol/fashion/sports" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>운동룩</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default Fashion;
