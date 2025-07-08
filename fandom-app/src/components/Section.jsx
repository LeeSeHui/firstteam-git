import { useNavigate } from 'react-router-dom';

const Section = ({ title, to }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(to)}
      style={{
        background: '#eee',
        padding: '20px',
        marginBottom: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Section;
